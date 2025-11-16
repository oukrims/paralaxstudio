<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registers GraphQL schema that matches the queries used by the Next.js frontend.
 */
class Parallax_Headless_GraphQL
{
    /**
     * Register types and fields when WPGraphQL is present.
     */
    public static function boot(): void
    {
        if (!function_exists('register_graphql_object_type')) {
            return;
        }

        self::register_types();
        self::register_queries();
    }

    /**
     * Helper to normalise type references.
     *
     * @param mixed $type
     * @return mixed
     */
    private static function normalize_type($type)
    {
        if (is_array($type) && isset($type['list_of'])) {
            return ['list_of' => self::normalize_type($type['list_of'])];
        }

        return $type;
    }

    /**
     * Register GraphQL object types in bulk.
     */
    private static function register_types(): void
    {
        $definitions = self::type_definitions();

        foreach ($definitions as $name => $config) {
            register_graphql_object_type(
                $name,
                [
                    'description' => $config['description'] ?? '',
                    'fields'      => function () use ($config) {
                        $fields = [];
                        foreach ($config['fields'] as $fieldName => $type) {
                            $fields[$fieldName] = [
                                'type' => self::normalize_type($type),
                            ];
                        }
                        return $fields;
                    },
                ]
            );
        }
    }

    /**
     * Attach root-level fields.
     */
    private static function register_queries(): void
    {
        register_graphql_field(
            'RootQuery',
            'parallaxContent',
            [
                'type'        => 'ParallaxContentPayload',
                'description' => __('Structured site content keyed by locale.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $payload = Parallax_Headless_Content::get_site_content($locale);

                    return [
                        'settings' => $payload['settings'] ?? null,
                        'homepage' => $payload['homepage'] ?? null,
                        'gallery'  => $payload['gallery'] ?? null,
                        'cases'    => $payload['cases'] ?? null,
                        'studio'   => $payload['studio'] ?? null,
                        'blog'     => $payload['blog'] ?? null,
                        'contact'  => $payload['contact'] ?? null,
                        'vousEtes' => $payload['vousEtes'] ?? null,
                        'tarifs'   => $payload['tarifs'] ?? null,
                    ];
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'parallaxBlogPost',
            [
                'type'        => 'ParallaxBlogPost',
                'description' => __('Single blog post from the Parallax toolkit.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                    'slug'   => [
                        'type'        => 'String',
                        'description' => 'Post slug',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $slug = isset($args['slug']) ? (string) $args['slug'] : '';
                    $content = Parallax_Headless_Content::get_site_content($locale);
                    $posts = $content['blogPosts'] ?? [];
                    foreach ($posts as $post) {
                        if (!empty($post['slug']) && $post['slug'] === $slug) {
                            return $post;
                        }
                    }
                    return null;
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'parallaxServicesPage',
            [
                'type'        => 'ParallaxServicesPage',
                'description' => __('Services listing content.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $content = Parallax_Headless_Content::get_site_content($locale);
                    return $content['services'] ?? null;
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'parallaxService',
            [
                'type'        => 'ParallaxService',
                'description' => __('Service detail entry.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                    'slug'   => [
                        'type'        => 'String',
                        'description' => 'Service slug',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $slug = isset($args['slug']) ? (string) $args['slug'] : '';
                    $content = Parallax_Headless_Content::get_site_content($locale);
                    $servicesPage = $content['services'] ?? [];
                    $services = $servicesPage['services'] ?? [];
                    foreach ($services as $service) {
                        if (!empty($service['slug']) && $service['slug'] === $slug) {
                            return $service;
                        }
                    }
                    return null;
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'parallaxProjectsPage',
            [
                'type'        => 'ParallaxProjectsPage',
                'description' => __('Projects listing content.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $content = Parallax_Headless_Content::get_site_content($locale);
                    return $content['projects'] ?? null;
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'parallaxProject',
            [
                'type'        => 'ParallaxProject',
                'description' => __('Project detail entry.', 'parallax-headless'),
                'args'        => [
                    'locale' => [
                        'type'         => 'String',
                        'defaultValue' => 'en',
                    ],
                    'slug'   => [
                        'type'        => 'String',
                        'description' => 'Project slug',
                    ],
                ],
                'resolve'     => function ($root, array $args) {
                    $locale = isset($args['locale']) ? (string) $args['locale'] : 'en';
                    $slug = isset($args['slug']) ? (string) $args['slug'] : '';
                    $content = Parallax_Headless_Content::get_site_content($locale);
                    $projectsPage = $content['projects'] ?? [];
                    $projects = $projectsPage['projects'] ?? [];
                    foreach ($projects as $project) {
                        if (!empty($project['slug']) && $project['slug'] === $slug) {
                            return $project;
                        }
                    }
                    return null;
                },
            ]
        );

        register_graphql_field(
            'RootQuery',
            'clients',
            [
                'type'        => ['list_of' => 'ParallaxClientLogo'],
                'description' => __('Client logos used throughout the site.', 'parallax-headless'),
                'resolve'     => function () {
                    $defaults = Parallax_Headless_Defaults::content();
                    // Client logos are not locale-dependent for now; use English payload
                    $content = Parallax_Headless_Content::get_site_content('en');
                    return $content['clients'] ?? ($defaults['en']['clients'] ?? []);
                },
            ]
        );
    }

    /**
     * Blueprint for all GraphQL types.
     */
    private static function type_definitions(): array
    {
        return [
            'ParallaxImage'                => [
                'description' => 'Basic image information.',
                'fields'      => [
                    'id'  => 'String',
                    'src' => 'String',
                    'alt' => 'String',
                ],
            ],
            'ParallaxCTA'                  => [
                'description' => 'Simple call to action.',
                'fields'      => [
                    'label' => 'String',
                    'href'  => 'String',
                ],
            ],
            'ParallaxHeroContent'          => [
                'fields' => [
                    'title'    => 'String',
                    'subtitle' => 'String',
                    'quote'    => 'String',
                    'gallery'  => ['list_of' => 'ParallaxImage'],
                ],
            ],
            'ParallaxHeroCta'              => [
                'fields' => [
                    'title'   => 'String',
                    'subtitle'=> 'String',
                    'eyebrow' => 'String',
                    'cta'     => 'ParallaxCTA',
                    'secondaryCta' => 'ParallaxCTA',
                ],
            ],
            'ParallaxQuoteText'            => [
                'fields' => [
                    'text'       => 'String',
                    'direction'  => 'String',
                    'alignment'  => 'String',
                    'letterAnime'=> 'Boolean',
                    'lineAnime'  => 'Boolean',
                ],
            ],
            'ParallaxQuoteSection'         => [
                'fields' => [
                    'scrollPrompt' => 'String',
                    'texts'        => ['list_of' => 'ParallaxQuoteText'],
                    'images'       => ['list_of' => 'ParallaxImage'],
                ],
            ],
            'ParallaxFeaturedProject'      => [
                'fields' => [
                    'id'       => 'String',
                    'name'     => 'String',
                    'type'     => 'String',
                    'location' => 'String',
                    'year'     => 'String',
                    'image'    => 'ParallaxImage',
                ],
            ],
            'ParallaxFeaturedProjects'     => [
                'fields' => [
                    'title'   => 'String',
                    'intro'   => 'String',
                    'ctaLabel'=> 'String',
                    'ctaHref' => 'String',
                    'projects'=> ['list_of' => 'ParallaxFeaturedProject'],
                ],
            ],
            'ParallaxServiceBucket'        => [
                'fields' => [
                    'id'      => 'String',
                    'title'   => 'String',
                    'bullets' => ['list_of' => 'String'],
                ],
            ],
            'ParallaxServicesSection'      => [
                'fields' => [
                    'title'    => 'String',
                    'intro'    => 'String',
                    'items'    => ['list_of' => 'ParallaxServiceBucket'],
                    'ctaLabel' => 'String',
                    'ctaHref'  => 'String',
                    'videoUrl' => 'String',
                ],
            ],
            'ParallaxProcessStep'          => [
                'fields' => [
                    'id'          => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'icon'        => 'String',
                    'details'     => ['list_of' => 'String'],
                ],
            ],
            'ParallaxProcessSection'       => [
                'fields' => [
                    'title' => 'String',
                    'intro' => 'String',
                    'steps' => ['list_of' => 'ParallaxProcessStep'],
                ],
            ],
            'ParallaxAboutSection'         => [
                'fields' => [
                    'title'    => 'String',
                    'body'     => 'String',
                    'dnaTitle' => 'String',
                    'dnaBody'  => 'String',
                    'ctaLabel' => 'String',
                    'ctaHref'  => 'String',
                ],
            ],
            'ParallaxDifferentiator'       => [
                'fields' => [
                    'id'          => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                ],
            ],
            'ParallaxDifferentiators'      => [
                'fields' => [
                    'title' => 'String',
                    'intro' => 'String',
                    'items' => ['list_of' => 'ParallaxDifferentiator'],
                ],
            ],
            'ParallaxClientType'           => [
                'fields' => [
                    'id'          => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'logo'        => 'ParallaxImage',
                ],
            ],
            'ParallaxClientsSection'       => [
                'fields' => [
                    'title'    => 'String',
                    'intro'    => 'String',
                    'items'    => ['list_of' => 'ParallaxClientType'],
                    'ctaLabel' => 'String',
                    'ctaHref'  => 'String',
                ],
            ],
            'ParallaxFAQItem'              => [
                'fields' => [
                    'id'       => 'String',
                    'question' => 'String',
                    'answer'   => 'String',
                ],
            ],
            'ParallaxFAQSection'           => [
                'fields' => [
                    'title' => 'String',
                    'items' => ['list_of' => 'ParallaxFAQItem'],
                ],
            ],
            'ParallaxFinalCTA'             => [
                'fields' => [
                    'title'       => 'String',
                    'subtitle'    => 'String',
                    'quote'       => 'String',
                    'primaryCta'  => 'ParallaxCTA',
                    'secondaryCta'=> 'ParallaxCTA',
                ],
            ],
            'ParallaxFooterContact'        => [
                'fields' => [
                    'label' => 'String',
                    'value' => 'String',
                    'href'  => 'String',
                ],
            ],
            'ParallaxFooterLink'           => [
                'fields' => [
                    'label' => 'String',
                    'href'  => 'String',
                ],
            ],
            'ParallaxFooterLinkGroup'      => [
                'fields' => [
                    'id'    => 'String',
                    'title' => 'String',
                    'links' => ['list_of' => 'ParallaxFooterLink'],
                ],
            ],
            'ParallaxFooterSocial'         => [
                'fields' => [
                    'id'    => 'String',
                    'label' => 'String',
                    'href'  => 'String',
                ],
            ],
            'ParallaxFooter'               => [
                'fields' => [
                    'tagline'     => 'String',
                    'description' => 'String',
                    'contact'     => ['list_of' => 'ParallaxFooterContact'],
                    'linkGroups'  => ['list_of' => 'ParallaxFooterLinkGroup'],
                    'copyright'   => 'String',
                    'socials'     => ['list_of' => 'ParallaxFooterSocial'],
                ],
            ],
            'ParallaxServiceNavItem'       => [
                'fields' => [
                    'slug'  => 'String',
                    'title' => 'String',
                ],
            ],
            'ParallaxNavigation'           => [
                'fields' => [
                    'contact'  => 'String',
                    'instagram'=> 'String',
                    'services' => 'String',
                    'gallery'  => 'String',
                    'cases'    => 'String',
                    'studio'   => 'String',
                    'blog'     => 'String',
                    'vousEtes' => 'String',
                    'tarifs'   => 'String',
                    'cta'      => 'String',
                ],
            ],
            'ParallaxSiteSettings'         => [
                'fields' => [
                    'servicesNav' => ['list_of' => 'ParallaxServiceNavItem'],
                    'navigation'  => 'ParallaxNavigation',
                ],
            ],
            'ParallaxHomepage'             => [
                'fields' => [
                    'hero'             => 'ParallaxHeroContent',
                    'quoteSection'     => 'ParallaxQuoteSection',
                    'featuredProjects' => 'ParallaxFeaturedProjects',
                    'services'         => 'ParallaxServicesSection',
                    'process'          => 'ParallaxProcessSection',
                    'about'            => 'ParallaxAboutSection',
                    'differentiators'  => 'ParallaxDifferentiators',
                    'clients'          => 'ParallaxClientsSection',
                    'faqs'             => 'ParallaxFAQSection',
                    'finalCta'         => 'ParallaxFinalCTA',
                    'footer'           => 'ParallaxFooter',
                ],
            ],
            'ParallaxGalleryCategory'      => [
                'fields' => [
                    'id'    => 'String',
                    'slug'  => 'String',
                    'label' => 'String',
                    'intro' => 'String',
                ],
            ],
            'ParallaxImageAlbum'           => [
                'fields' => [
                    'id'          => 'String',
                    'slug'        => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'category'    => 'String',
                    'location'    => 'String',
                    'year'        => 'String',
                    'client'      => 'String',
                    'architect'   => 'String',
                    'renderType'  => 'String',
                    'services'    => 'String',
                    'virtualTourUrl' => 'String',
                    'videoUrl'    => 'String',
                    'coverImage'  => 'ParallaxImage',
                    'images'      => ['list_of' => 'ParallaxImage'],
                ],
            ],
            'ParallaxGalleryShowcase'      => [
                'fields' => [
                    'title'       => 'String',
                    'intro'       => 'String',
                    'categories'  => ['list_of' => 'ParallaxGalleryCategory'],
                    'albums'      => ['list_of' => 'ParallaxImageAlbum'],
                    'ctaLabel'    => 'String',
                    'ctaHref'     => 'String',
                    'virtualTourShowcaseUrl' => 'String',
                ],
            ],
            'ParallaxGalleryPage'          => [
                'fields' => [
                    'hero'            => 'ParallaxHeroCta',
                    'showcase'        => 'ParallaxGalleryShowcase',
                    'services'        => 'ParallaxServicesSection',
                    'differentiators' => 'ParallaxDifferentiators',
                    'finalCta'        => 'ParallaxFinalCTA',
                    'footer'          => 'ParallaxFooter',
                ],
            ],
            'ParallaxBenefit'              => [
                'fields' => [
                    'id'          => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'icon'        => 'String',
                ],
            ],
            'ParallaxService'              => [
                'fields' => [
                    'slug'           => 'String',
                    'title'          => 'String',
                    'tagline'        => 'String',
                    'description'    => 'String',
                    'heroImage'      => 'ParallaxImage',
                    'benefits'       => ['list_of' => 'ParallaxBenefit'],
                    'process'        => ['list_of' => 'ParallaxProcessStep'],
                    'images'         => ['list_of' => 'ParallaxImage'],
                    'relatedProjects'=> ['list_of' => 'ParallaxFeaturedProject'],
                    'icon'           => 'String',
                    'category'       => 'String',
                    'ctaLabel'       => 'String',
                    'ctaHref'        => 'String',
                ],
            ],
            'ParallaxServicesPage'         => [
                'fields' => [
                    'hero'    => 'ParallaxHeroCta',
                    'services'=> ['list_of' => 'ParallaxService'],
                    'finalCta'=> 'ParallaxFinalCTA',
                    'footer'  => 'ParallaxFooter',
                ],
            ],
            'ParallaxPullQuote'            => [
                'fields' => [
                    'text'        => 'String',
                    'attribution' => 'String',
                ],
            ],
            'ParallaxProject'              => [
                'fields' => [
                    'slug'        => 'String',
                    'title'       => 'String',
                    'tagline'     => 'String',
                    'description' => 'String',
                    'heroImage'   => 'ParallaxImage',
                    'client'      => 'String',
                    'location'    => 'String',
                    'year'        => 'String',
                    'duration'    => 'String',
                    'projectType' => 'String',
                    'deliverables'=> ['list_of' => 'String'],
                    'challenge'   => 'String',
                    'solution'    => 'String',
                    'results'     => ['list_of' => 'String'],
                    'gallery'     => ['list_of' => 'ParallaxImage'],
                    'testimonial' => 'ParallaxPullQuote',
                    'services'    => ['list_of' => 'String'],
                    'ctaLabel'    => 'String',
                    'ctaHref'     => 'String',
                ],
            ],
            'ParallaxProjectsPage'         => [
                'fields' => [
                    'hero'     => 'ParallaxHeroCta',
                    'projects' => ['list_of' => 'ParallaxProject'],
                    'process'  => 'ParallaxProcessSection',
                    'clients'  => 'ParallaxClientsSection',
                    'finalCta' => 'ParallaxFinalCTA',
                    'footer'   => 'ParallaxFooter',
                ],
            ],
            'ParallaxFounderSpotlight'     => [
                'fields' => [
                    'name'    => 'String',
                    'title'   => 'String',
                    'bio'     => 'String',
                    'quote'   => 'String',
                    'image'   => 'ParallaxImage',
                    'experienceHighlights' => ['list_of' => 'ParallaxExperienceHighlight'],
                ],
            ],
            'ParallaxExperienceHighlight'  => [
                'fields' => [
                    'id'    => 'String',
                    'label' => 'String',
                    'value' => 'String',
                ],
            ],
            'ParallaxTeamMember'           => [
                'fields' => [
                    'id'       => 'String',
                    'name'     => 'String',
                    'role'     => 'String',
                    'location' => 'String',
                    'image'    => 'ParallaxImage',
                ],
            ],
            'ParallaxTeamSection'          => [
                'fields' => [
                    'title'   => 'String',
                    'intro'   => 'String',
                    'members' => ['list_of' => 'ParallaxTeamMember'],
                ],
            ],
            'ParallaxContactChannel'       => [
                'fields' => [
                    'id'          => 'String',
                    'label'       => 'String',
                    'value'       => 'String',
                    'href'        => 'String',
                    'description' => 'String',
                ],
            ],
            'ParallaxContactOffice'        => [
                'fields' => [
                    'id'      => 'String',
                    'city'    => 'String',
                    'country' => 'String',
                    'address' => ['list_of' => 'String'],
                    'timezone'=> 'String',
                    'mapHref' => 'String',
                    'image'   => 'ParallaxImage',
                ],
            ],
            'ParallaxContactAvailability'  => [
                'fields' => [
                    'title'    => 'String',
                    'subtitle' => 'String',
                    'slots'    => ['list_of' => 'String'],
                    'note'     => 'String',
                ],
            ],
            'ParallaxContactPage'          => [
                'fields' => [
                    'hero'           => 'ParallaxHeroCta',
                    'intro'          => 'ParallaxContactIntro',
                    'channelsHeading'=> 'ParallaxHeroCta',
                    'channels'       => ['list_of' => 'ParallaxContactChannel'],
                    'officesHeading' => 'ParallaxHeroCta',
                    'offices'        => ['list_of' => 'ParallaxContactOffice'],
                    'availability'   => 'ParallaxContactAvailability',
                    'footer'         => 'ParallaxFooter',
                ],
            ],
            'ParallaxContactIntro'         => [
                'fields' => [
                    'title'  => 'String',
                    'body'   => 'String',
                    'bullets'=> ['list_of' => 'String'],
                ],
            ],
            'ParallaxCasesPage'            => [
                'fields' => [
                    'hero'        => 'ParallaxHeroCta',
                    'caseStudies' => 'ParallaxFeaturedProjects',
                    'process'     => 'ParallaxProcessSection',
                    'clients'     => 'ParallaxClientsSection',
                    'finalCta'    => 'ParallaxFinalCTA',
                    'footer'      => 'ParallaxFooter',
                ],
            ],
            'ParallaxStudioPage'           => [
                'fields' => [
                    'hero'           => 'ParallaxHeroCta',
                    'founder'        => 'ParallaxFounderSpotlight',
                    'about'          => 'ParallaxAboutSection',
                    'services'       => 'ParallaxServicesSection',
                    'team'           => 'ParallaxTeamSection',
                    'differentiators'=> 'ParallaxDifferentiators',
                    'clients'        => 'ParallaxClientsSection',
                    'finalCta'       => 'ParallaxFinalCTA',
                    'footer'         => 'ParallaxFooter',
                ],
            ],
            'ParallaxArticle'              => [
                'fields' => [
                    'id'       => 'String',
                    'slug'     => 'String',
                    'title'    => 'String',
                    'category' => 'String',
                    'published'=> 'String',
                    'readTime' => 'String',
                    'excerpt'  => 'String',
                    'href'     => 'String',
                    'image'    => 'ParallaxImage',
                ],
            ],
            'ParallaxArticlesSection'      => [
                'fields' => [
                    'title'          => 'String',
                    'intro'          => 'String',
                    'articles'       => ['list_of' => 'ParallaxArticle'],
                    'ctaLabel'       => 'String',
                    'ctaHref'        => 'String',
                    'articleCtaLabel'=> 'String',
                ],
            ],
            'ParallaxBlogPage'             => [
                'fields' => [
                    'hero'     => 'ParallaxHeroCta',
                    'articles' => 'ParallaxArticlesSection',
                    'faqs'     => 'ParallaxFAQSection',
                    'finalCta' => 'ParallaxFinalCTA',
                    'footer'   => 'ParallaxFooter',
                ],
            ],
            'ParallaxClientCategory'       => [
                'fields' => [
                    'id'          => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'benefits'    => ['list_of' => 'String'],
                ],
            ],
            'ParallaxVousEtesPage'         => [
                'fields' => [
                    'hero'       => 'ParallaxHeroCta',
                    'categories' => ['list_of' => 'ParallaxClientCategory'],
                    'finalCta'   => 'ParallaxFinalCTA',
                    'footer'     => 'ParallaxFooter',
                ],
            ],
            'ParallaxPricingPackage'       => [
                'fields' => [
                    'id'          => 'String',
                    'name'        => 'String',
                    'description' => 'String',
                    'price'       => 'Float',
                    'currency'    => 'String',
                    'popular'     => 'Boolean',
                    'features'    => ['list_of' => 'String'],
                    'ctaLabel'    => 'String',
                    'ctaHref'     => 'String',
                ],
            ],
            'ParallaxPricingEntry'         => [
                'fields' => [
                    'label' => 'String',
                    'price' => 'String',
                ],
            ],
            'ParallaxPricingFactor'        => [
                'fields' => [
                    'id'          => 'String',
                    'icon'        => 'String',
                    'title'       => 'String',
                    'description' => 'String',
                    'pricing'     => ['list_of' => 'ParallaxPricingEntry'],
                ],
            ],
            'ParallaxPricingTableItem'     => [
                'fields' => [
                    'service' => 'String',
                    'price'   => 'String',
                ],
            ],
            'ParallaxPricingTableRow'      => [
                'fields' => [
                    'category' => 'String',
                    'items'    => ['list_of' => 'ParallaxPricingTableItem'],
                ],
            ],
            'ParallaxVideoFactor'          => [
                'fields' => [
                    'icon'  => 'String',
                    'title' => 'String',
                    'items' => ['list_of' => 'String'],
                ],
            ],
            'ParallaxVideoPackage'         => [
                'fields' => [
                    'id'          => 'String',
                    'name'        => 'String',
                    'description' => 'String',
                    'price'       => 'Float',
                    'currency'    => 'String',
                    'popular'     => 'Boolean',
                ],
            ],
            'ParallaxSpecialOffer'         => [
                'fields' => [
                    'id'       => 'String',
                    'name'     => 'String',
                    'features' => ['list_of' => 'String'],
                    'price'    => 'Float',
                ],
            ],
            'ParallaxTarifsPage'           => [
                'fields' => [
                    'hero'         => 'ParallaxHeroCta',
                    'introduction' => 'ParallaxTarifsIntro',
                    'packagesTitle'=> 'String',
                    'packages'     => ['list_of' => 'ParallaxPricingPackage'],
                    'pricingFactors'=> 'ParallaxTarifsFactors',
                    'pricingTable' => 'ParallaxTarifsTable',
                    'videoPricing' => 'ParallaxTarifsVideo',
                    'process'      => 'ParallaxTarifsProcess',
                    'faq'          => 'ParallaxTarifsFaq',
                    'finalCta'     => 'ParallaxFinalCTA',
                    'footer'       => 'ParallaxFooter',
                ],
            ],
            'ParallaxTarifsIntro'          => [
                'fields' => [
                    'title'     => 'String',
                    'subtitle'  => 'String',
                    'disclaimer'=> 'String',
                ],
            ],
            'ParallaxTarifsFactors'        => [
                'fields' => [
                    'title'   => 'String',
                    'subtitle'=> 'String',
                    'factors' => ['list_of' => 'ParallaxPricingFactor'],
                ],
            ],
            'ParallaxTarifsTable'          => [
                'fields' => [
                    'title'  => 'String',
                    'warning'=> 'ParallaxTarifsWarning',
                    'rows'   => ['list_of' => 'ParallaxPricingTableRow'],
                ],
            ],
            'ParallaxTarifsWarning'        => [
                'fields' => [
                    'title'   => 'String',
                    'message' => 'String',
                ],
            ],
            'ParallaxTarifsVideo'          => [
                'fields' => [
                    'title'        => 'String',
                    'subtitle'     => 'String',
                    'factors'      => ['list_of' => 'ParallaxVideoFactor'],
                    'tiers'        => ['list_of' => 'ParallaxVideoPackage'],
                    'specialOffers'=> 'ParallaxTarifsSpecialOffers',
                ],
            ],
            'ParallaxTarifsSpecialOffers'  => [
                'fields' => [
                    'title'  => 'String',
                    'offers' => ['list_of' => 'ParallaxSpecialOffer'],
                ],
            ],
            'ParallaxTarifsProcess'        => [
                'fields' => [
                    'title'      => 'String',
                    'commitment' => 'String',
                    'content'    => ['list_of' => 'String'],
                    'tip'        => 'String',
                ],
            ],
            'ParallaxTarifsFaq'            => [
                'fields' => [
                    'title'     => 'String',
                    'questions' => ['list_of' => 'ParallaxTarifsFaqItem'],
                ],
            ],
            'ParallaxTarifsFaqItem'        => [
                'fields' => [
                    'question' => 'String',
                    'answer'   => 'String',
                ],
            ],
            'ParallaxBlogPostSection'      => [
                'fields' => [
                    'id'      => 'String',
                    'heading' => 'String',
                    'body'    => 'String',
                    'type'    => 'String',
                    'items'   => ['list_of' => 'String'],
                ],
            ],
            'ParallaxBlogPost'             => [
                'fields' => [
                    'slug'         => 'String',
                    'title'        => 'String',
                    'intro'        => 'String',
                    'category'     => 'String',
                    'published'    => 'String',
                    'readTime'     => 'String',
                    'heroImage'    => 'ParallaxImage',
                    'sections'     => ['list_of' => 'ParallaxBlogPostSection'],
                    'pullQuote'    => 'ParallaxPullQuote',
                    'conclusionCta'=> 'ParallaxCTA',
                ],
            ],
            'ParallaxClientLogo'           => [
                'fields' => [
                    'id'         => 'String',
                    'name'       => 'String',
                    'logo'       => 'ParallaxImage',
                    'websiteUrl' => 'String',
                    'order'      => 'Int',
                ],
            ],
            'ParallaxContentPayload'       => [
                'fields' => [
                    'settings' => 'ParallaxSiteSettings',
                    'homepage' => 'ParallaxHomepage',
                    'gallery'  => 'ParallaxGalleryPage',
                    'cases'    => 'ParallaxCasesPage',
                    'studio'   => 'ParallaxStudioPage',
                    'blog'     => 'ParallaxBlogPage',
                    'contact'  => 'ParallaxContactPage',
                    'vousEtes' => 'ParallaxVousEtesPage',
                    'tarifs'   => 'ParallaxTarifsPage',
                ],
            ],
        ];
    }
}
