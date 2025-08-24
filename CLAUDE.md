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
- **CreativeItem modes**: Animation (section), Development/Illustration/Video (card li elements)
- See `src/data/creatives-guide.md` for detailed data management procedures

### Core Architecture Components
- **MetaBall.vue**: Three.js background animations (lazy loaded using `requestIdleCallback`)
- **App.vue**: Progressive logo loading, main layout management
- **Navbar.vue**: Desktop navigation component with initial load animations and z-index layering
- **SpNav.vue**: Mobile circular floating menu with transform animations
- **CreativeItem.vue**: Unified portfolio component with 4 modes (Animation/Development/Illustration/Video)
- **Multiple Vue instances**: Main app + Navbar + MetaBall (each with shared router/i18n)

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
- **Primary**: Use Composition API with `<script setup>` syntax
- **DOM manipulation**: Prefer reactive values over direct `document.querySelector()` for new code
- **Icons**: Global `fa` and `font-awesome-icon` registered, use `<fa :icon="['fas','arrow-right']" />`
- **Heavy dependencies**: Lazy-load with `requestIdleCallback` (Three.js pattern)
- **Responsive design**: Mobile-first approach with proper breakpoints

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

## Three.js MarchingCubes Development Guidelines

### MetaBall Perfect Sphere Maintenance (Critical Knowledge)

**Problem**: Three.js MarchingCubes algorithm has fundamental limitations that cause sphere deformation during window resizing.

**Root Cause**: 
- MarchingCubes uses fixed cubic voxel grid (e.g., 30×30×30)
- External scale adjustments create elliptical distortion
- Coordinate space: Internal 0.0-1.0 cubic space vs. rectangular screen space

**NEVER attempt these approaches (proven ineffective):**
- External scale compensation (e.g., `scale.set(300 * aspectRatio, 300, 300)`)
- Voxel grid rectangularization
- Multiple correction layers
- MarchingCubes reinitialization on resize

**ALWAYS use Inverse Coordinate Correction Method:**
```javascript
// In updateCubes() function
const aspectRatio = window.innerWidth / window.innerHeight;

// For horizontal screens (aspectRatio > 1.0)
correctedX = (rawX - 0.5) / aspectRatio + 0.5;

// For vertical screens (aspectRatio < 1.0)  
correctedY = (rawY - 0.5) * aspectRatio + 0.5;

effect.value.addBall(correctedX, correctedY, rawZ, strength, subtract);
```

**Mathematical Principle:**
- Create intentional ellipse in voxel space
- Scale transformation results in perfect circle on screen
- Formula: `voxel_ellipse + uniform_scale = screen_circle`

**System Requirements:**
- Uniform scale: `effect.value.scale.set(300, 300, 300)`
- No resize reinitialization needed
- Coordinate correction applies every frame
- Maintains performance and stability

**Verification Method:**
Test on multiple aspect ratios (4:3, 16:9, 21:9, portrait modes) - MetaBalls must remain perfectly circular during real-time window resizing.

### Vue Router Navigation Optimization

**Progressive Loading Feedback System:**
- Implement `beforeEach` and `afterEach` navigation guards
- Use progressive progress bar with staged completion (25% → 60% → 85% → 100%)
- Apply `cursor: wait` during component loading
- Preload components using `requestIdleCallback` for instant navigation

**Component Preloading Pattern:**
```javascript
const AboutComponent = () => import('../views/About.vue');
const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
schedule(() => { AboutComponent(); });
```

## Development Rules and Patterns

### Cursor Rules Integration
This codebase follows comprehensive development rules defined in `.cursor/rules/`:
- **Architecture**: Component separation, SPA structure, multiple Vue instances
- **Vue conventions**: `<script setup>`, Composition API, scoped styles
- **Performance**: Lazy loading strategies, code splitting, requestIdleCallback usage
- **Assets**: WebP optimization, static imports for Vite bundling
- **i18n**: Lazy locale loading, fallback strategies
- **Three.js**: Specific MetaBall sphere deformation solutions

### PDCA Development Workflow
- **PLAN**: Review relevant rules before changes, check deployment checklist
- **DO**: Implement following rules, make small commits
- **CHECK**: Test both build/preview environments, validate against checklist  
- **ACTION**: Update rules with learnings, document in appropriate rule files

## Important Notes

- **No testing framework**: Manual testing only via dev server and DevTools
- **FTP deployment**: GitHub Actions with FTP-Deploy-Action to `/manapuraza/` directory
- **Multiple Vue instances**: Main app + Navbar + MetaBall (each sharing router/i18n)
- **Image optimization critical**: All portfolio images must be WebP and statically imported
- **i18n strict requirements**: All text must have translations in both `ja.json` and `en.json`
- **Three.js sphere deformation**: Use inverse coordinate correction method only (see above)