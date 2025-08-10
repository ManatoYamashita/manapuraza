# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build production bundle with Vite
- `npm run preview` - Preview production build locally
- `npm run analyze` - Build with bundle analyzer (generates stats.html)

### Testing & Quality
No automated testing framework is configured. Manual testing involves running the development server and checking browser console/DevTools.

## Architecture Overview

This is a Vue.js 3 portfolio website using:
- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite** as build tool with optimized chunking strategy
- **Vue Router** for SPA navigation with lazy-loaded routes
- **Vue I18n** for internationalization (Japanese/English)
- **Three.js** for 3D background animations (MetaBall component)
- **GSAP** for advanced animations
- **Font Awesome** for icons

### Performance Optimizations
The codebase implements aggressive performance optimizations:
- **Progressive loading**: Logo images load low-quality first, then high-quality
- **Code splitting**: Manual chunks for vendors (Vue, Three.js, FontAwesome, GSAP)
- **Lazy loading**: Routes, components, and translations loaded on-demand
- **Asset optimization**: WebP images, lazy image loading
- **Bundle optimization**: Terser with console/debugger removal in production

### Project Structure
```
src/
├── components/     # Reusable Vue components
├── views/          # Page-level components (Home, About, Creatives, 404)
├── data/           # Static data (creatives portfolio items)
├── assets/         # Images, CSS, static assets
└── router/         # Vue Router configuration
```

## Key Components & Data Management

### Portfolio Data (`src/data/creatives.js`)
Portfolio items are centrally managed in this file with strict conventions:
- **Static imports required** for all images (no dynamic paths due to Vite bundling)
- **i18n keys** for titles/descriptions following pattern: `creatives.[category].[item].(title|description)`
- **Categories**: `programming`, `graphics`, `video`
- See `src/data/creatives-guide.md` for detailed data management procedures

### Core Architecture Components
- **MetaBall.vue**: Three.js background animations (lazy loaded)
- **App.vue**: Progressive logo loading, main layout management
- **Navbar.vue**: Separate Vue app instance mounted to `#navbar`
- **CreativesHero.vue + CreativeItem.vue**: Portfolio display system

### Internationalization
- Files: `locales/ja.json`, `locales/en.json`
- Default locale: Japanese (`ja`)
- Fallback: English (`en`)
- Translations lazy-loaded for performance

## Build Configuration

### Vite Configuration Highlights
- **Chunk splitting**: Vendors separated by library (Vue, Three.js, FontAwesome, GSAP)
- **Terser optimization**: Console/debugger removal in production
- **Alias**: `@` points to `src/`
- **Assets**: Supports robots.txt as included asset

### Deployment
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Target**: FTP server deployment to `/manapuraza/` directory
- **Node version**: 22.13.1 in CI environment

## Development Guidelines

### Adding Portfolio Items
1. Add WebP image to `src/assets/creatives-thumb/[category]/`
2. Import image statically in `creatives.js`
3. Add item object to appropriate category array
4. Add i18n keys to both `ja.json` and `en.json`
5. Test both languages and image display

### Component Development
- Use Composition API with `<script setup>`
- Follow existing patterns for Font Awesome icon usage
- Components requiring heavy libraries (Three.js) should be lazy-loaded
- Maintain responsive design principles (mobile-first)

### Performance Considerations
- New components should consider lazy loading for non-critical path
- Images must be WebP format for optimal loading
- Use `requestIdleCallback` for non-essential background loading
- Test with DevTools Performance tab to avoid regressions

## Critical Dependencies

### Runtime Dependencies
- **vue**: 3.3.2 - Core framework
- **vue-router**: 4.2.0 - SPA routing
- **vue-i18n**: 9.7.1 - Internationalization
- **three**: 0.169.0 - 3D graphics library
- **gsap**: 3.12.5 - Animation library
- **@fortawesome/***: Icon system with selective imports

### Build Dependencies
- **vite**: 6.2.3 - Build tool and dev server
- **@vitejs/plugin-vue**: 5.2.3 - Vue 3 support for Vite
- **rollup-plugin-visualizer**: 5.14.0 - Bundle analysis
- **terser**: 5.39.0 - JavaScript minification

## Important Notes

- **No testing framework**: Manual testing only
- **FTP deployment**: Uses GitHub Actions with FTP-Deploy-Action
- **Multiple Vue app instances**: Main app + Navbar + MetaBall (lazy)
- **Image optimization critical**: All portfolio images must be WebP and properly imported
- **i18n strict requirements**: All text must have translations in both languages