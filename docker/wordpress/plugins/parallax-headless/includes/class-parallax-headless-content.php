<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Storage helper around the custom post type that holds page JSON payloads.
 */
class Parallax_Headless_Content
{
    public const POST_TYPE = 'parallax_site_page';
    private const META_KEY = '_parallax_content_key';
    private const META_LOCALE = '_parallax_content_locale';
    private const META_PAYLOAD = '_parallax_content_payload';

    /**
     * Register the custom post type.
     */
    public static function register_post_type(): void
    {
        if (post_type_exists(self::POST_TYPE)) {
            return;
        }

        register_post_type(
            self::POST_TYPE,
            [
                'labels' => [
                    'name'          => __('Parallax Content', 'parallax-headless'),
                    'singular_name' => __('Parallax Page', 'parallax-headless'),
                ],
                'public'              => false,
                'show_ui'             => true,
                'show_in_menu'        => false,
                'supports'            => ['title'],
                'show_in_rest'        => true,
                'capability_type'     => 'post',
                'map_meta_cap'        => true,
                'rewrite'             => false,
                'show_in_graphql'     => true,
                'graphql_single_name' => 'parallaxPage',
                'graphql_plural_name' => 'parallaxPages',
            ]
        );
    }

    /**
     * Register meta that stores locale, page key, and JSON payload.
     */
    public static function register_meta_fields(): void
    {
        register_post_meta(
            self::POST_TYPE,
            self::META_KEY,
            [
                'type'         => 'string',
                'single'       => true,
                'show_in_rest' => true,
                'auth_callback'=> [__CLASS__, 'can_edit'],
            ]
        );

        register_post_meta(
            self::POST_TYPE,
            self::META_LOCALE,
            [
                'type'         => 'string',
                'single'       => true,
                'show_in_rest' => true,
                'auth_callback'=> [__CLASS__, 'can_edit'],
            ]
        );

        register_post_meta(
            self::POST_TYPE,
            self::META_PAYLOAD,
            [
                'type'              => 'object',
                'single'            => true,
                'show_in_rest'      => true,
                'default'           => [],
                'sanitize_callback' => function ($value) {
                    return is_array($value) ? $value : [];
                },
                'auth_callback'     => [__CLASS__, 'can_edit'],
            ]
        );
    }

    /**
     * Current user capability check.
     */
    public static function can_edit(): bool
    {
        return current_user_can('edit_posts');
    }

    /**
     * Create starter posts when the plugin is activated.
     */
    public static function seed_defaults(): void
    {
        $defaults = Parallax_Headless_Defaults::content();
        foreach ($defaults as $locale => $pages) {
            foreach ($pages as $pageKey => $payload) {
                if (!is_array($payload)) {
                    continue;
                }
                self::save_page($locale, $pageKey, $payload, false);
            }
        }
    }

    /**
     * Create or update a page payload.
     */
    public static function save_page(string $locale, string $pageKey, array $payload, bool $updateTitle = true): int
    {
        $existing = self::find_page($locale, $pageKey);
        $title = sprintf('%s (%s)', ucfirst($pageKey), strtoupper($locale));

        if ($existing) {
            if ($updateTitle) {
                wp_update_post(
                    [
                        'ID'         => $existing->ID,
                        'post_title' => $title,
                    ]
                );
            }
            update_post_meta($existing->ID, self::META_PAYLOAD, $payload);
            return (int) $existing->ID;
        }

        $postId = wp_insert_post(
            [
                'post_type'   => self::POST_TYPE,
                'post_status' => 'publish',
                'post_title'  => $title,
            ]
        );

        if (!is_wp_error($postId)) {
            update_post_meta($postId, self::META_KEY, $pageKey);
            update_post_meta($postId, self::META_LOCALE, $locale);
            update_post_meta($postId, self::META_PAYLOAD, $payload);
        }

        return (int) $postId;
    }

    /**
     * Locate a stored page.
     */
    private static function find_page(string $locale, string $pageKey): ?WP_Post
    {
        $posts = get_posts(
            [
                'post_type'  => self::POST_TYPE,
                'numberposts'=> 1,
                'fields'     => 'all',
                'meta_query' => [
                    [
                        'key'   => self::META_KEY,
                        'value' => $pageKey,
                    ],
                    [
                        'key'   => self::META_LOCALE,
                        'value' => $locale,
                    ],
                ],
            ]
        );

        return $posts ? $posts[0] : null;
    }

    /**
     * Return payload for a specific page in a locale, falling back to defaults.
     */
    public static function get_page(string $locale, string $pageKey, array $default = []): array
    {
        $post = self::find_page($locale, $pageKey);
        $payload = [];
        if ($post) {
            $payload = get_post_meta($post->ID, self::META_PAYLOAD, true);
        }

        if (!is_array($payload) || empty($payload)) {
            $defaults = Parallax_Headless_Defaults::content();
            $payload = $defaults[$locale][$pageKey] ?? $default;
        }

        return is_array($payload) ? $payload : [];
    }

    /**
     * Collate all top-level pages for a locale.
     */
    public static function get_site_content(string $locale): array
    {
        $content = [];
        foreach (Parallax_Headless_Defaults::page_keys() as $key => $label) {
            $content[$key] = self::get_page($locale, $key);
        }

        return $content;
    }
}
