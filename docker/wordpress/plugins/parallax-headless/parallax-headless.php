<?php
/**
 * Plugin Name: Parallax Headless Toolkit
 * Description: Custom content manager and GraphQL schema for the Parallax Stud.io Next.js frontend.
 * Version: 0.1.0
 * Author: Parallax Stud.io
 * License: GPL-2.0-or-later
 */

if (!defined('ABSPATH')) {
    exit;
}

define('PARALLAX_HEADLESS_PATH', plugin_dir_path(__FILE__));
define('PARALLAX_HEADLESS_URL', plugin_dir_url(__FILE__));
define('PARALLAX_HEADLESS_VERSION', '0.1.0');

require_once PARALLAX_HEADLESS_PATH . 'includes/default-content.php';
require_once PARALLAX_HEADLESS_PATH . 'includes/class-parallax-headless-content.php';
require_once PARALLAX_HEADLESS_PATH . 'includes/class-parallax-headless-admin.php';
require_once PARALLAX_HEADLESS_PATH . 'includes/class-parallax-headless-graphql.php';

/**
 * Bootstrap the plugin.
 */
final class Parallax_Headless_Plugin {
    /**
     * Hook everything.
     */
    public static function init(): void
    {
        add_action('init', [__CLASS__, 'register_content_type']);
        add_action('plugins_loaded', [__CLASS__, 'init_admin']);
        add_action('graphql_register_types', [__CLASS__, 'init_graphql']);
        register_activation_hook(__FILE__, [__CLASS__, 'activate']);
    }

    /**
     * Register the custom post type used to store structured page payloads.
     */
    public static function register_content_type(): void
    {
        Parallax_Headless_Content::register_post_type();
        Parallax_Headless_Content::register_meta_fields();
    }

    /**
     * Seed defaults on activation so editors have something to edit right away.
     */
    public static function activate(): void
    {
        Parallax_Headless_Content::register_post_type();
        Parallax_Headless_Content::register_meta_fields();
        Parallax_Headless_Content::seed_defaults();
        flush_rewrite_rules();
    }

    /**
     * Only load admin UI inside wp-admin.
     */
    public static function init_admin(): void
    {
        if (is_admin()) {
            Parallax_Headless_Admin::boot();
        }
    }

    /**
     * Attach the GraphQL schema if WPGraphQL is available.
     */
    public static function init_graphql(): void
    {
        Parallax_Headless_GraphQL::boot();
    }
}

Parallax_Headless_Plugin::init();
