<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Provides lightweight default payloads so editors have baseline content to edit.
 */
class Parallax_Headless_Defaults
{
    /**
    * Supported locales.
    */
    public static function locales(): array
    {
        return ['en', 'fr'];
    }

    /**
     * All page keys managed by the toolkit.
     */
    public static function page_keys(): array
    {
        return [
            'settings'   => 'Site Settings',
            'homepage'   => 'Homepage',
            'gallery'    => 'Gallery',
            'cases'      => 'Cases',
            'studio'     => 'Studio',
            'blog'       => 'Blog',
            'contact'    => 'Contact',
            'vousEtes'   => 'Vous êtes / Who you are',
            'tarifs'     => 'Tarifs / Pricing',
            'services'   => 'Services Listing',
            'projects'   => 'Projects Listing',
            'blogPosts'  => 'Blog posts (JSON list)',
            'clients'    => 'Client logos (JSON list)',
        ];
    }

    /**
     * Base footer used when no custom data exists.
     */
    private static function base_footer(): array
    {
        return [
            'tagline'     => 'Parallax Stud.io',
            'description' => '3D visualisation studio operating headlessly with Next.js + WordPress.',
            'contact'     => [
                [
                    'label' => 'Email',
                    'value' => 'hello@parallax.studio',
                    'href'  => 'mailto:hello@parallax.studio',
                ],
            ],
            'linkGroups'  => [],
            'copyright'   => '© ' . gmdate('Y') . ' Parallax Stud.io',
            'socials'     => [],
        ];
    }

    /**
     * Shared final CTA block.
     */
    private static function base_final_cta(): array
    {
        return [
            'title'       => 'Ready to launch your project?',
            'subtitle'    => 'Let us know what you are working on and we will reply quickly.',
            'quote'       => 'Architecture meets art when the right team collaborates.',
            'primaryCta'  => [
                'label' => 'Start a project',
                'href'  => '/contact',
            ],
            'secondaryCta'=> [
                'label' => 'View services',
                'href'  => '/services',
            ],
        ];
    }

    /**
     * A placeholder hero image used across sections.
     */
    private static function placeholder_image(string $id): array
    {
        return [
            'id'  => $id,
            'src' => 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
            'alt' => 'Placeholder visual for Parallax Stud.io',
        ];
    }

    /**
     * Simple hero model with CTA support.
     */
    private static function hero(string $title, string $subtitle = '', string $eyebrow = ''): array
    {
        return [
            'title'   => $title,
            'subtitle'=> $subtitle,
            'eyebrow' => $eyebrow,
            'cta'     => [
                'label' => 'Talk to the team',
                'href'  => '/contact',
            ],
            'secondaryCta' => [
                'label' => 'View gallery',
                'href'  => '/gallery',
            ],
        ];
    }

    /**
     * Default services list used on listing and homepage sections.
     */
    private static function starter_services(): array
    {
        return [
            [
                'slug'        => 'exteriors',
                'title'       => 'Exterior renders',
                'description' => 'Photorealistic exterior stills.',
                'tagline'     => 'Sell the vision before it is built.',
                'benefits'    => [
                    ['id' => 'b1', 'title' => 'Lighting', 'description' => 'Balanced atmosphere for any hour.'],
                    ['id' => 'b2', 'title' => 'Materiality', 'description' => 'Crisp materials and believable weathering.'],
                ],
                'process'     => [],
                'images'      => [self::placeholder_image('service-exteriors')],
                'relatedProjects' => [],
            ],
            [
                'slug'        => 'interiors',
                'title'       => 'Interior renders',
                'description' => 'Warm, inviting interiors for residential and commercial projects.',
                'tagline'     => 'Spaces with soul.',
                'benefits'    => [
                    ['id' => 'b3', 'title' => 'Styling', 'description' => 'Hand-picked props and moods.'],
                    ['id' => 'b4', 'title' => 'Camera moves', 'description' => 'Angles that tell the right story.'],
                ],
                'process'     => [],
                'images'      => [self::placeholder_image('service-interiors')],
                'relatedProjects' => [],
            ],
        ];
    }

    /**
     * Default navigation labels.
     */
    private static function navigation_en(): array
    {
        return [
            'contact'  => 'Contact',
            'instagram'=> 'Instagram',
            'services' => 'Services',
            'gallery'  => 'Gallery',
            'cases'    => 'Cases',
            'studio'   => 'Studio',
            'blog'     => 'Blog',
            'vousEtes' => 'Who you are',
            'tarifs'   => 'Pricing',
            'cta'      => 'Start a project',
        ];
    }

    private static function navigation_fr(): array
    {
        return [
            'contact'  => 'Contact',
            'instagram'=> 'Instagram',
            'services' => 'Services',
            'gallery'  => 'Galerie',
            'cases'    => 'Réalisations',
            'studio'   => 'Studio',
            'blog'     => 'Journal',
            'vousEtes' => 'Vous êtes',
            'tarifs'   => 'Tarifs',
            'cta'      => 'Lancer un projet',
        ];
    }

    /**
     * Full default payload per locale.
     */
    public static function content(): array
    {
        $footer = self::base_footer();
        $finalCta = self::base_final_cta();
        $services = self::starter_services();

        $baseHomepage = [
            'hero'             => [
                'title'    => 'We craft photoreal 3D visuals that sell your projects.',
                'subtitle' => 'Headless WordPress powers the content, Next.js renders the experience.',
                'quote'    => 'The key to memorable 3D scenes is giving them a soul.',
                'gallery'  => [
                    self::placeholder_image('hero-1'),
                    self::placeholder_image('hero-2'),
                ],
            ],
            'quoteSection'     => [
                'scrollPrompt' => 'Scroll to explore',
                'texts'        => [
                    [
                        'text'       => 'Architecture meets art.',
                        'alignment'  => 'center',
                        'letterAnime'=> true,
                    ],
                ],
                'images'       => [
                    self::placeholder_image('quote-1'),
                ],
            ],
            'featuredProjects' => [
                'title'     => 'Featured work',
                'intro'     => 'A short selection of exterior and interior renders.',
                'ctaLabel'  => 'View all projects',
                'ctaHref'   => '/cases',
                'projects'  => [
                    [
                        'id'    => 'villa-horizon',
                        'name'  => 'Villa Horizon',
                        'type'  => 'Residential',
                        'location'=> 'Biarritz, FR',
                        'year'  => '2024',
                        'image' => self::placeholder_image('proj-1'),
                    ],
                ],
            ],
            'services'         => [
                'title'    => 'What we deliver',
                'intro'    => 'Pick the right media for your next presentation.',
                'ctaLabel' => 'See services',
                'ctaHref'  => '/services',
                'videoUrl' => '',
                'items'    => array_map(static function ($service) {
                    return [
                        'id'      => $service['slug'],
                        'title'   => $service['title'],
                        'bullets' => [
                            $service['description'],
                        ],
                    ];
                }, $services),
            ],
            'process'          => [
                'title' => 'Process',
                'intro' => 'A clear rhythm from brief to delivery.',
                'steps' => [
                    [
                        'id'          => 'brief',
                        'title'       => 'Brief',
                        'description' => 'Share your plans and references.',
                        'icon'        => 'circle',
                        'details'     => ['We review files and confirm milestones.'],
                    ],
                    [
                        'id'          => 'iterate',
                        'title'       => 'Iterations',
                        'description' => 'Preview renders with structured feedback.',
                        'icon'        => 'square',
                        'details'     => ['Two feedback rounds included.'],
                    ],
                    [
                        'id'          => 'deliver',
                        'title'       => 'Delivery',
                        'description' => 'High-res renders and raw files on request.',
                        'icon'        => 'triangle',
                        'details'     => ['Formats tailored to your channel.'],
                    ],
                ],
            ],
            'about'            => [
                'title'    => 'Parallax Stud.io',
                'body'     => 'A headless-first studio pairing architecture and narrative.',
                'dnaTitle' => 'Our DNA',
                'dnaBody'  => 'French-Moroccan roots, operating worldwide.',
                'ctaLabel' => 'Meet the team',
                'ctaHref'  => '/studio',
            ],
            'differentiators'  => [
                'title' => 'Why clients choose us',
                'items' => [
                    ['id' => 'speed', 'title' => 'Speed', 'description' => 'Tight feedback loops.'],
                    ['id' => 'quality', 'title' => 'Quality', 'description' => 'Photoreal outputs with consistent art direction.'],
                ],
            ],
            'clients'          => [
                'title'    => 'Clients',
                'intro'    => 'Brands and builders we have supported.',
                'ctaLabel' => 'Get the deck',
                'ctaHref'  => '/contact',
                'items'    => [
                    ['id' => 'c1', 'title' => 'Developers', 'description' => 'Mixed-use and residential programs.', 'logo' => self::placeholder_image('logo-1')],
                ],
            ],
            'faqs'             => [
                'title' => 'Questions',
                'items' => [
                    ['id' => 'timeline', 'question' => 'How fast can you start?', 'answer' => 'We can onboard within one week depending on scope.'],
                ],
            ],
            'finalCta'         => $finalCta,
            'footer'           => $footer,
        ];

        $galleryPage = [
            'hero'            => self::hero('Gallery', 'Browse hero shots and interiors', 'Work samples'),
            'showcase'        => [
                'title'      => 'Albums',
                'intro'      => 'Group renders by typology.',
                'ctaLabel'   => 'View services',
                'ctaHref'    => '/services',
                'categories' => [
                    ['id' => 'ext', 'slug' => 'exteriors', 'label' => 'Exteriors'],
                    ['id' => 'int', 'slug' => 'interiors', 'label' => 'Interiors'],
                ],
                'albums'     => [
                    [
                        'id'          => 'al1',
                        'slug'        => 'la-dune',
                        'title'       => 'La Dune',
                        'description' => 'Coastal residence renders.',
                        'category'    => 'exteriors',
                        'location'    => 'Essaouira',
                        'year'        => '2024',
                        'coverImage'  => self::placeholder_image('album-cover'),
                        'images'      => [self::placeholder_image('album-shot')],
                    ],
                ],
            ],
            'services'        => $baseHomepage['services'],
            'differentiators' => $baseHomepage['differentiators'],
            'finalCta'        => $finalCta,
            'footer'          => $footer,
        ];

        $casesPage = [
            'hero'        => self::hero('Case studies', 'A few deep-dives', 'Projects'),
            'caseStudies' => $baseHomepage['featuredProjects'],
            'process'     => $baseHomepage['process'],
            'clients'     => $baseHomepage['clients'],
            'finalCta'    => $finalCta,
            'footer'      => $footer,
        ];

        $studioPage = [
            'hero'           => self::hero('Studio', 'Architecture meets art', 'Team'),
            'founder'        => [
                'name'                => 'Hassan El-Karim',
                'title'               => 'Founder',
                'bio'                 => 'Architect turned visualisation director.',
                'quote'               => 'Craft visuals that move people.',
                'image'               => self::placeholder_image('founder'),
                'experienceHighlights'=> [
                    ['id' => 'xp1', 'label' => 'Years', 'value' => '10+'],
                    ['id' => 'xp2', 'label' => 'Projects', 'value' => '200'],
                ],
            ],
            'about'         => $baseHomepage['about'],
            'services'      => $baseHomepage['services'],
            'team'          => [
                'title'   => 'Team',
                'intro'   => 'A lean, distributed crew.',
                'members' => [
                    [
                        'id'    => 'tm1',
                        'name'  => 'Sophia Laurent',
                        'role'  => 'Art Director',
                        'location'=> 'Paris',
                        'image' => self::placeholder_image('team-1'),
                    ],
                ],
            ],
            'differentiators'=> $baseHomepage['differentiators'],
            'clients'       => $baseHomepage['clients'],
            'finalCta'      => $finalCta,
            'footer'        => $footer,
        ];

        $blogPage = [
            'hero'     => self::hero('Journal', 'Notes from the studio', 'Blog'),
            'articles' => [
                'title'          => 'Latest articles',
                'intro'          => 'Stories on process, tools, and launches.',
                'articles'       => [
                    [
                        'id'       => 'article-1',
                        'slug'     => 'working-headless',
                        'title'    => 'Working headless with WordPress + Next.js',
                        'category' => 'engineering',
                        'published'=> gmdate('Y-m-d'),
                        'readTime' => '6 min read',
                        'excerpt'  => 'How we pair structured content with React Server Components.',
                        'href'     => '/blog/working-headless',
                        'image'    => self::placeholder_image('article-1'),
                    ],
                ],
                'ctaLabel'       => 'Read all articles',
                'ctaHref'        => '/blog',
                'articleCtaLabel'=> 'Read',
            ],
            'faqs'     => [
                'title' => 'Publishing',
                'items' => [
                    [
                        'id'       => 'workflow',
                        'question' => 'How do posts sync to the frontend?',
                        'answer'   => 'Content lives in this plugin and is fetched via GraphQL.',
                    ],
                ],
            ],
            'finalCta' => $finalCta,
            'footer'   => $footer,
        ];

        $contactPage = [
            'hero'           => self::hero('Contact', 'Tell us about your project', 'Contact'),
            'intro'          => [
                'title'  => 'Share your brief',
                'body'   => 'Send us plans, references, and your ideal timeline.',
                'bullets'=> [
                    'Sketches or CAD exports',
                    'Mood boards welcomed',
                    'Timelines and budgets help us scope fast',
                ],
            ],
            'channelsHeading'=> ['eyebrow' => 'Channels', 'title' => 'Reach out'],
            'channels'       => [
                [
                    'id'    => 'email',
                    'label' => 'Email',
                    'value' => 'hello@parallax.studio',
                    'href'  => 'mailto:hello@parallax.studio',
                    'description' => 'Fastest response.',
                ],
                [
                    'id'    => 'phone',
                    'label' => 'Phone',
                    'value' => '+212 6 00 00 00 00',
                    'href'  => 'tel:+212600000000',
                    'description' => 'For urgent matters.',
                ],
            ],
            'officesHeading' => ['eyebrow' => 'Studios', 'title' => 'Where we collaborate'],
            'offices'        => [
                [
                    'id'      => 'paris',
                    'city'    => 'Paris',
                    'country' => 'France',
                    'address' => ['10 Rue du Faubourg Saint-Denis', '75010 Paris'],
                    'timezone'=> 'UTC+1',
                    'mapHref' => 'https://maps.google.com/?q=Paris',
                    'image'   => self::placeholder_image('office-paris'),
                ],
            ],
            'availability'   => [
                'title' => 'Availability',
                'subtitle' => 'Production slots open twice a month.',
                'slots' => [
                    'Next slot opens soon',
                ],
                'note'  => 'Rush work is possible depending on scope.',
            ],
            'footer'         => $footer,
        ];

        $vousEtesPage = [
            'hero'       => self::hero('Who you are', 'Pick the path that fits', 'Clients'),
            'categories' => [
                [
                    'id'          => 'developers',
                    'title'       => 'Developers',
                    'description' => 'Sales suites, competitions, marketing visuals.',
                    'benefits'    => ['High-end renders', 'Fast delivery'],
                ],
                [
                    'id'          => 'architects',
                    'title'       => 'Architects',
                    'description' => 'Narratives that respect your intent.',
                    'benefits'    => ['Faithful materials', 'Iterative previews'],
                ],
            ],
            'finalCta'   => $finalCta,
            'footer'     => $footer,
        ];

        $tarifsPage = [
            'hero'         => self::hero('Pricing', 'Transparent packages', 'Tarifs'),
            'introduction' => [
                'title'     => 'How we price',
                'subtitle'  => 'Simple packages for predictable outcomes.',
                'disclaimer'=> 'Custom quotes are available for complex scopes.',
            ],
            'packagesTitle'=> 'Packages',
            'packages'     => [
                [
                    'id'          => 'starter',
                    'name'        => 'Starter',
                    'description' => 'One hero render',
                    'price'       => 1200,
                    'currency'    => 'EUR',
                    'popular'     => false,
                    'features'    => ['1 exterior or interior', '1 feedback round'],
                    'ctaLabel'    => 'Book starter',
                    'ctaHref'     => '/contact',
                ],
            ],
            'pricingFactors'=> [
                'title'   => 'Factors',
                'subtitle'=> 'What influences pricing',
                'factors' => [
                    [
                        'id'          => 'area',
                        'icon'        => 'area',
                        'title'       => 'Scope',
                        'description' => 'Number of views and complexity.',
                        'pricing'     => [
                            ['label' => 'Entry', 'price' => '€1,200+'],
                        ],
                    ],
                ],
            ],
            'pricingTable' => [
                'title'  => 'Standard prices',
                'warning'=> [
                    'title'   => 'Indicative',
                    'message' => 'Final quotes depend on files provided.',
                ],
                'rows'   => [
                    [
                        'category' => 'Images',
                        'items'    => [
                            ['service' => 'Exterior 4K', 'price' => '€1,900'],
                        ],
                    ],
                ],
            ],
            'videoPricing' => [
                'title'   => 'Video',
                'subtitle'=> 'Cinematic fly-throughs and walkthroughs.',
                'factors' => [
                    ['icon' => 'length', 'title' => 'Duration', 'items' => ['15-90 seconds']],
                ],
                'tiers'   => [
                    [
                        'id'          => 'teaser',
                        'name'        => 'Teaser',
                        'description' => '15-30 second reels',
                        'price'       => 1500,
                        'currency'    => 'EUR',
                        'popular'     => false,
                    ],
                ],
                'specialOffers'=> [
                    'title'  => 'Bundles',
                    'offers' => [
                        [
                            'id'       => 'launch',
                            'name'     => 'Launch pack',
                            'features' => ['3 stills + 1 short video'],
                            'price'    => 3200,
                        ],
                    ],
                ],
            ],
            'process'      => [
                'title'      => 'Working together',
                'commitment' => 'Transparent pricing, reliable delivery.',
                'content'    => ['Kick-off call', 'Look-dev previews', 'Final renders'],
                'tip'        => 'Provide CAD exports for faster modeling.',
            ],
            'faq'          => [
                'title'     => 'Billing FAQ',
                'questions' => [
                    ['question' => 'Do you offer rush fees?', 'answer' => 'Yes, when capacity allows.'],
                ],
            ],
            'finalCta'     => $finalCta,
            'footer'       => $footer,
        ];

        $servicesPage = [
            'hero'    => self::hero('Services', 'Pick a path', 'Services'),
            'services'=> $services,
            'finalCta'=> $finalCta,
            'footer'  => $footer,
        ];

        $projectsPage = [
            'hero'     => self::hero('Projects', 'Selected builds and concepts', 'Projects'),
            'projects' => $baseHomepage['featuredProjects']['projects'],
            'process'  => $baseHomepage['process'],
            'clients'  => $baseHomepage['clients'],
            'finalCta' => $finalCta,
            'footer'   => $footer,
        ];

        $blogPosts = [
            [
                'slug'      => 'working-headless',
                'title'     => 'Working headless with WordPress + Next.js',
                'intro'     => 'A quick primer on our stack and why we like it.',
                'category'  => 'engineering',
                'published' => gmdate('Y-m-d'),
                'readTime'  => '6 min read',
                'heroImage' => self::placeholder_image('blog-hero'),
                'sections'  => [
                    [
                        'id'   => 's1',
                        'heading' => 'Why headless',
                        'body' => 'Editors keep WordPress, engineers keep React.',
                        'type' => 'text',
                    ],
                ],
                'pullQuote' => [
                    'text'        => 'Structured content decouples teams.',
                    'attribution' => 'Parallax team',
                ],
                'conclusionCta' => [
                    'label' => 'Start a project',
                    'href'  => '/contact',
                ],
            ],
        ];

        $clientsList = [
            [
                'id'    => 'client-1',
                'name'  => 'Nova Developments',
                'logo'  => self::placeholder_image('client-logo'),
                'websiteUrl' => 'https://example.com',
                'order' => 1,
            ],
        ];

        return [
            'en' => [
                'settings'   => [
                    'servicesNav' => [
                        ['slug' => 'exteriors', 'title' => 'Exteriors'],
                        ['slug' => 'interiors', 'title' => 'Interiors'],
                    ],
                    'navigation'  => self::navigation_en(),
                ],
                'homepage'   => $baseHomepage,
                'gallery'    => $galleryPage,
                'cases'      => $casesPage,
                'studio'     => $studioPage,
                'blog'       => $blogPage,
                'contact'    => $contactPage,
                'vousEtes'   => $vousEtesPage,
                'tarifs'     => $tarifsPage,
                'services'   => $servicesPage,
                'projects'   => $projectsPage,
                'blogPosts'  => $blogPosts,
                'clients'    => $clientsList,
            ],
            'fr' => [
                'settings'   => [
                    'servicesNav' => [
                        ['slug' => 'exterieurs', 'title' => 'Extérieurs'],
                        ['slug' => 'interieurs', 'title' => 'Intérieurs'],
                    ],
                    'navigation'  => self::navigation_fr(),
                ],
                'homepage'   => $baseHomepage,
                'gallery'    => $galleryPage,
                'cases'      => $casesPage,
                'studio'     => $studioPage,
                'blog'       => $blogPage,
                'contact'    => $contactPage,
                'vousEtes'   => $vousEtesPage,
                'tarifs'     => $tarifsPage,
                'services'   => $servicesPage,
                'projects'   => $projectsPage,
                'blogPosts'  => $blogPosts,
                'clients'    => $clientsList,
            ],
        ];
    }
}
