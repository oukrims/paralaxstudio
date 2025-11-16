## Parallax Stud.io — Next.js + Headless WordPress

This repository pairs a Next.js frontend with a self-hosted headless WordPress instance exposed through GraphQL. A Docker-based workflow keeps the stack reproducible locally while remaining compatible with the [WordPress on Vercel guide](https://vercel.com/guides/wordpress-with-vercel).

---

### Requirements

- Docker Desktop 4.0+ (or recent Docker Engine + Compose v2)
- Node.js 20+ (only if you plan to run the Next.js app outside Docker)
- Internet access the first time you build the containers (to install npm packages and WordPress plugins)

---

### 1. Configure Environment Variables

1. Copy the example environment file and adjust it as needed (the helper script below will auto-copy `.env.example` the first time if `.env` is missing):

   ```bash
   cp .env.example .env
   ```

2. When running inside Docker the `WORDPRESS_GRAPHQL_ENDPOINT` is automatically set to `http://wordpress/graphql`. For local development in a browser, the public endpoint is available at `http://localhost:8080/graphql`.

3. If your WordPress install requires authentication for GraphQL requests, add a header token in `WORDPRESS_AUTH_HEADER`.

---

### 2. Boot the Stack with Docker Compose

The repo ships with a small helper to manage both environments:

```bash
# Start / stop / restart the development stack (docker-compose.yml)
./scripts/compose.sh start
./scripts/compose.sh stop
./scripts/compose.sh restart
```

Under the hood the script targets `docker-compose.yml`. You can run the raw command if you prefer:

```bash
docker compose -f docker-compose.yml up --build
```

Services launched by the dev stack:

- `db` — MySQL 8 database for WordPress
- `wordpress` — WordPress (PHP 8.2) served on http://localhost:8080
- `wp-cli` — Utility container for running WP-CLI commands (`docker compose run --rm wp-cli ...`)
- `next` — Next.js dev server on http://localhost:3000 (hot reload enabled via bind mounts)

To stop everything run `./scripts/compose.sh stop` (or `docker compose -f docker-compose.yml down`).

#### Production-oriented stack

When you want to run the site in production mode (Next.js `next start`), use the production compose file which targets the `runner` stage of the Dockerfile:

```bash
./scripts/compose.sh start prod
# or
docker compose -f docker-compose.prod.yml up --build
```

This variant drops development bind mounts and serves the pre-built Next.js application. Tear it down with `./scripts/compose.sh stop prod`.

> Tip: set `WORDPRESS_HOME=https://your-domain.example` in your environment (or a `.env` file) before starting the production stack so that WordPress generates absolute URLs correctly.

---

### 3. Finalise WordPress

1. Open http://localhost:8080 and follow the WordPress installer.
2. Install and activate the required plugins:

   ```bash
   docker compose run --rm wp-cli plugin install wp-graphql --activate
   docker compose run --rm wp-cli plugin install wp-graphql-gutenberg --activate # optional helper
   docker compose run --rm wp-cli plugin activate parallax-headless
   ```

3. The repository ships with a starter plugin (`Parallax Headless Toolkit`) located in `docker/wordpress/plugins/parallax-headless`. It registers the `parallaxContent` and `parallaxBlogPost` GraphQL fields and now exposes an **Admin → Parallax Headless** screen with locale tabs, section forms, and media pickers so you can manage the default copy and imagery without touching code.

4. Blog content is sourced from native WordPress posts. Create or import your articles as usual (optionally tag them with categories matching your locale slugs such as `fr`/`en` to localise the feed) and the frontend will pull them automatically.

5. The plugin automatically keeps the `/graphql` endpoint working (it adds the rewrite rule and flushes permalinks on activation). No manual `.htaccess` edits are needed.

6. (Optional) If you manage additional logic inside WordPress, drop bespoke plugins into `docker/wordpress/plugins/` — they are mounted into `wp-content/plugins` automatically.

7. Create your content model following the Vercel guide. When you are ready, replace the sample arrays returned by the toolkit plugin with real ACF/WP data so that the queries in `src/lib/wordpressClient.ts` resolve successfully.

---

### 4. Populate Content

The Next.js layer first attempts to read from WordPress. If a query fails it falls back to the local structured defaults in `src/lib/defaultContent.ts`, so the site stays functional while you model data in WordPress.

Key GraphQL expectations:

- Root query field `parallaxContent(locale: String!)` returning `homepage`, `gallery`, `cases`, `studio`, `blog`, and `contact` payloads.
- Query `parallaxBlogPost(locale: String!, slug: String!)` returning a single blog article.

The bundled plugin already implements those entry points with sample content. You can progressively replace the hard-coded arrays by querying real posts and ACF fields as your data model evolves.

---

### 5. Useful Commands

```bash
# Tail WordPress logs
docker compose logs -f wordpress

# Run WordPress CLI command (wrapper defaults to dev stack)
./scripts/compose.sh wp plugin list
./scripts/compose.sh wp plugin activate wp-graphql
./scripts/compose.sh wp rewrite flush --hard

# Execute Next.js linting/tests inside the container
docker compose exec next npm run lint
```

---

### 6. Deployment Notes

- The Next.js app uses server components that rely on the same GraphQL queries you model locally. Point the production build at your hosted WordPress GraphQL endpoint via environment variables.
- When deploying WordPress to a separate host, update `.env` to reference the public GraphQL URL. For Vercel, set `NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT` and `WORDPRESS_GRAPHQL_ENDPOINT` in the project settings.

---

### 7. Next Steps

- Replace the fallback data once WordPress exposes the full schema.
- Add authentication (e.g. application passwords or JWT) if your GraphQL endpoint is secured.
- Implement the remaining client requirements (services page, tariffs, legal pages, forms, analytics) using structured content in WordPress.

Enjoy building!
