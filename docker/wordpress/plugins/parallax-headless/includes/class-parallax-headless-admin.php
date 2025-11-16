<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Lightweight admin screen to edit JSON payloads per page/locale.
 */
class Parallax_Headless_Admin
{
    /**
     * Hook admin actions.
     */
    public static function boot(): void
    {
        add_action('admin_menu', [__CLASS__, 'register_menu']);
        add_action('admin_post_parallax_headless_save', [__CLASS__, 'handle_save']);
    }

    /**
     * Add the "Parallax Content" entry in the sidebar.
     */
    public static function register_menu(): void
    {
        add_menu_page(
            __('Parallax Headless', 'parallax-headless'),
            __('Parallax Headless', 'parallax-headless'),
            'manage_options',
            'parallax-headless',
            [__CLASS__, 'render_page'],
            'dashicons-rest-api',
            58
        );
    }

    /**
     * Handle form submission (bulk save).
     */
    public static function handle_save(): void
    {
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'parallax-headless'));
        }

        check_admin_referer('parallax_headless_save');

        $locale = isset($_POST['locale']) ? sanitize_text_field((string) wp_unslash($_POST['locale'])) : 'en';
        $payloads = isset($_POST['payload']) && is_array($_POST['payload']) ? wp_unslash($_POST['payload']) : [];

        $errors = [];

        foreach ($payloads as $pageKey => $json) {
            $decoded = json_decode((string) $json, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                $errors[] = sprintf('%s: %s', esc_html($pageKey), json_last_error_msg());
                continue;
            }
            Parallax_Headless_Content::save_page($locale, $pageKey, $decoded);
        }

        $redirect = add_query_arg(
            [
                'page'    => 'parallax-headless',
                'locale'  => $locale,
                'updated' => empty($errors) ? '1' : '0',
                'errors'  => rawurlencode(wp_json_encode($errors)),
            ],
            admin_url('admin.php')
        );

        wp_safe_redirect($redirect);
        exit;
    }

    /**
     * Render the main admin screen.
     */
    public static function render_page(): void
    {
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'parallax-headless'));
        }

        $locale = isset($_GET['locale']) ? sanitize_text_field((string) $_GET['locale']) : 'en';
        $availableLocales = Parallax_Headless_Defaults::locales();
        if (!in_array($locale, $availableLocales, true)) {
            $locale = 'en';
        }

        $content = Parallax_Headless_Content::get_site_content($locale);
        $pageKeys = Parallax_Headless_Defaults::page_keys();

        $updated = isset($_GET['updated']) && $_GET['updated'] === '1';
        $errors = [];
        if (isset($_GET['errors'])) {
            $decodedErrors = json_decode((string) wp_unslash($_GET['errors']), true);
            if (is_array($decodedErrors)) {
                $errors = $decodedErrors;
            }
        }
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Parallax Headless Content', 'parallax-headless'); ?></h1>

            <p><?php esc_html_e('Use this screen to manage JSON payloads for each Next.js page. Each tab stores its own locale-specific post inside the custom post type.', 'parallax-headless'); ?></p>

            <?php if ($updated) : ?>
                <div class="notice notice-success"><p><?php esc_html_e('Content saved.', 'parallax-headless'); ?></p></div>
            <?php endif; ?>

            <?php if (!empty($errors)) : ?>
                <div class="notice notice-error">
                    <p><?php esc_html_e('Some payloads were not saved because they are not valid JSON:', 'parallax-headless'); ?></p>
                    <ul>
                        <?php foreach ($errors as $error) : ?>
                            <li><?php echo esc_html($error); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>

            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                <?php wp_nonce_field('parallax_headless_save'); ?>
                <input type="hidden" name="action" value="parallax_headless_save" />
                <label for="parallax-headless-locale"><?php esc_html_e('Locale', 'parallax-headless'); ?></label>
                <select id="parallax-headless-locale" name="locale" onchange="this.form.submit()">
                    <?php foreach ($availableLocales as $availableLocale) : ?>
                        <option value="<?php echo esc_attr($availableLocale); ?>" <?php selected($locale, $availableLocale); ?>>
                            <?php echo esc_html(strtoupper($availableLocale)); ?>
                        </option>
                    <?php endforeach; ?>
                </select>

                <p class="description"><?php esc_html_e('Switch locale to edit the alternate payload. Data is stored per locale.', 'parallax-headless'); ?></p>

                <hr />

                <?php foreach ($pageKeys as $key => $label) :
                    $payload = $content[$key] ?? [];
                    $pretty = wp_json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                    ?>
                    <h2><?php echo esc_html($label); ?> (<?php echo esc_html($key); ?>)</h2>
                    <p class="description">
                        <?php esc_html_e('Paste or edit JSON matching the shape expected by the Next.js frontend. Defaults are pre-filled when no data is stored.', 'parallax-headless'); ?>
                    </p>
                    <textarea
                        name="payload[<?php echo esc_attr($key); ?>]"
                        rows="12"
                        style="width: 100%; font-family: monospace;"
                    ><?php echo esc_textarea($pretty); ?></textarea>
                    <hr />
                <?php endforeach; ?>

                <p>
                    <button type="submit" class="button button-primary"><?php esc_html_e('Save content', 'parallax-headless'); ?></button>
                </p>
            </form>
        </div>
        <?php
    }
}
