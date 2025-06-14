# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally
- `npm run astro -- --help` - Get help with Astro CLI commands

## Architecture

This is an Astro-based UAP (Unidentified Aerial Phenomena) database application that displays sighting reports organized by geographic location.

### Data Flow
- Uses Supabase as the backend database with tables for countries, states, cities, and clean report data
- Content collections defined in `src/content.config.js` fetch data from Supabase views (`Lookup Country`, `Lookup State`, `states_by_country`, `cities_by_state`)
- Data is fetched at build time via Astro's content collection loaders
- Dynamic routing structure: `/` → `/[country]` → `/[country]/[state]` → `/[country]/[state]/[city]`
- Static paths are generated from collection data using `getStaticPaths()`

### Key Components
- **LocationList.astro** - Renders lists of geographic locations with counts
- **LocationChip.astro** - Individual location items with navigation
- **ReportCard.astro** - Display individual UAP reports
- **Header.astro** - Site navigation

### Layout System
- **layoutMaster.astro** - Base HTML structure
- **layoutApp.astro** - Application-specific layout wrapper

### Styling
- CSS organized into separate files: base.css, color.css, spacing.css, typography.css
- Uses CSS custom properties for spacing (`--space-3xs`) and design tokens
- PP Supply Sans font family loaded via WOFF files

### Media Storage with Cloudflare R2
- Media files (images/videos) are stored in Cloudflare R2 buckets
- `src/lib/r2-queries.js` provides utilities for signed URL generation and metadata retrieval
- `scripts/localize-media.js` downloads external media URLs from Supabase and uploads to R2
- Media is organized by record ID: `{record_id}/{filename}`
- Signed URLs expire after 7 days by default (`expiresIn = 604800`)

### Environment Variables
Requires Supabase configuration:
- `SUPABASE_URL`
- `SUPABASE_PUBLIC_ANON_KEY`

Requires Cloudflare R2 configuration:
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_ACCESS_KEY_ID`
- `CLOUDFLARE_SECRET_ACCESS_KEY`
- `CLOUDFLARE_BUCKET`