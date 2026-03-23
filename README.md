# Poorm-Source

A custom [Ghost](https://ghost.org/) theme based on [Source](https://github.com/TryGhost/Source). Tailored for a clean, content-focused blog with portfolio and series support.

## Features

### Custom Page Templates
- **Portfolio** (`page-portfolio.hbs`) — Grid-style project showcase filtered by `portfolio` tag
- **Series** (`page-series.hbs`) — Grouped post series organized by tag

### Floating Table of Contents
- Auto-generated from `h2`/`h3` headings in post content
- Sticky sidebar that follows scroll on the right side
- Active section highlight as you read
- Hidden on screens below 1200px for mobile readability
![Floating Table of Contents screenshot](assets/screenshots/toc.gif)

### Tags Section on Homepage
- Pill-style tag buttons ordered by post count (up to 50)
- Toggleable via Ghost Admin: **Settings > Design > Homepage > Show tags section**
![Tags Section screenshot](assets/screenshots/tags-section.gif)

### Image enhancements
![Image enhancements screenshot](assets/screenshots/image-enhancements.gif)
#### Tag Image Fallback
- Post cards without a feature image automatically display the primary tag's image
- Falls back gracefully to no image if neither exists

#### Post Card Images
- Images displayed fully (no cropping) with white background fill
- Works well with SVG/PNG assets

#### Feature Image Sizing
- Resized to 80% of content width, centered
- Small images scale up to fit the container

### Customizable Logo Color
- Adjustable via Ghost Admin: **Settings > Design > Site-wide > Logo color**
- Default: `#888888`

### Other Changes
- Removed subscribe CTA banner from homepage
- Updated `author.hbs` to use `primary_author` helper
- Portfolio posts excluded from related articles

## File Structure

| File | Description |
|------|-------------|
| `default.hbs` | Base template with global header/footer |
| `home.hbs` | Homepage with header, tags section, and post list |
| `index.hbs` | Paginated post list |
| `post.hbs` | Individual post with floating TOC |
| `page.hbs` | Individual pages |
| `page-portfolio.hbs` | Portfolio page template |
| `page-series.hbs` | Series page template |
| `tag.hbs` | Tag archive |
| `author.hbs` | Author archive |

Custom one-off templates can be created by slug:
- `page-about.hbs` → `/about/`
- `tag-news.hbs` → `/tag/news/`
- `author-ali.hbs` → `/author/ali/`

## Development

Requires [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).

```bash
# Install dependencies
yarn install

# Run development server with live reload
yarn dev

# Build assets
yarn zip
```

Edit files in `/assets/css/` — they compile to `/assets/built/` automatically via Gulp/PostCSS.

### Docker

A Docker Compose file is included for local Ghost development:

```bash
cd docker
docker compose up -d
```

This mounts the theme into a Ghost container at `http://localhost:2368`.

## Icons

Inline SVG icons are in `/partials/icons/`. Use them via Handlebars partials:

```handlebars
{{> "icons/tag"}}
```

## Translations

See [@TryGhost/Themes/theme-translations](https://github.com/TryGhost/Themes/blob/main/packages/theme-translations/README.md) for translation instructions.

## License

Based on [Ghost Source](https://github.com/TryGhost/Source) — Copyright (c) 2013-2026 Ghost Foundation.
Released under the [MIT license](LICENSE).
