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
- **Menu.vue**: Unified responsive navigation component (replaces Navbar.vue and SpNav.vue):
  - Desktop: Flexbox layout with responsive logo sizing
  - Mobile: Circular floating menu at screen bottom with 1-second delay fade-in
  - Language toggle with vertical reading text (日本語/Eng display)
- **CreativeItem.vue**: Unified portfolio component with 4 modes:
  - Animation mode: Full-section layout with YouTube iframe and metadata
  - Development/Illustration/Video modes: Card-based grid layouts
- **Single Vue instance architecture**: Main app + MetaBall (sharing router/i18n/head)

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

### CreativeItem Component Modes
**Animation Mode** (used in Creatives.vue):
```vue
<CreativeItem
  :mode="'Animation'"
  :url="'#'"
  :title="$t('creatives.animation.tcuAnimation.title')"
  :description="$t('creatives.animation.paragraph')"
  :thumbnail="'#'"
  :index="0"
  :animationData="animationData"
/>
```
- Renders as `<section>` element (full-width layout)
- Includes YouTube iframe, metadata, credits, and action buttons
- Responsive design with mobile optimizations

**Card Modes** (Development/Illustration/Video):
```vue
<CreativeItem
  v-for="(creative, index) in creativesData.development"
  :key="creative.id"
  :mode="'Development'"
  :url="creative.url"
  :title="$t(creative.title)"
  :description="$t(creative.description)"
  :thumbnail="creative.thumbnail"
  :index="index"
/>
```
- Renders as `<li>` elements in grid layout
- Standard card design with thumbnail, title, description, and external link icon

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
- **@fortawesome/***: Icon system with selective imports (faArrowUpRightFromSquare, faPlay, faGlobe, etc.)

### Build Dependencies
- **vite**: 6.2.3 - Build tool and dev server (upgraded from 6.2.3)
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
- **Single Vue instance with MetaBall**: Main app + MetaBall (sharing router/i18n/head)
- **Image optimization critical**: All portfolio images must be WebP and statically imported
- **i18n strict requirements**: All text must have translations in both `ja.json` and `en.json`
- **Three.js sphere deformation**: Use inverse coordinate correction method only (see above)
- **Console logging**: Partial console removal in production (see Console Management Policy)

## Console Management Policy

**Development vs Production:**
- Development: Console statements allowed for debugging
- Production: Selective console removal via Terser configuration
- **Rationale**: Balance between debugging capability and clean UX

**Implementation:**
```javascript
// vite.config.js - Terser configuration
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: false, // Console removal disabled
      drop_debugger: true, // Debugger statements removed
      pure_funcs: ['console.debug', 'console.trace'], // Only detailed logs removed
      dead_code: true,
      unused: true,
    }
  }
}
```

**Manual Removal Required:**
When adding new features, manually remove console statements from:
- Component lifecycle hooks (`onMounted`, `watch`)
- Event handlers
- Animation callbacks
- API responses

## SPA Fallback Configuration

**Apache .htaccess Configuration:**
The project requires a `.htaccess` file in the `public/` directory for proper SPA routing on Apache servers:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^.*$ /index.html [L]
</IfModule>
```

This ensures that direct URL access to routes like `/about` or `/creatives` works correctly by falling back to `index.html`, allowing Vue Router to handle client-side routing.

## Responsive Navigation System (Menu.vue)

### Architecture Overview
The unified Menu.vue component replaces the previous dual-component system (Navbar.vue + SpNav.vue) with a single responsive component that adapts to screen size.

### Desktop Navigation (>540px)
- **Flexbox Layout**: Uses `justify-content: space-between` with `gap: 1rem` for element spacing
- **Responsive Logo**: Implements sophisticated logo sizing system:
  ```css
  .desktop-nav .logo {
    flex: 1 1 auto; /* Allow shrinking/growing */
    max-width: clamp(180px, 40vw, 300px);
    min-width: 120px; /* Ensure minimum readability */
  }
  ```
- **Screen Size Breakpoints**: 
  - 720px: `clamp(100px, 25vw, 160px)` with gap: 0.25rem
  - 760px: `clamp(120px, 30vw, 180px)` with gap: 0.5rem  
  - 800px+: `clamp(180px, 38vw, 280px)` with gap: 1rem
  - 1201px+: `clamp(200px, 42vw, 320px)`

### Mobile Navigation (≤540px)
- **Circular Menu**: Fixed position at screen bottom with expansion animation
- **Position**: `bottom: 1rem; left: 50%; transform: translateX(-50%);`
- **Expansion Pattern**: Items animate to form triangle pattern above main button

### Language Toggle System
- **Desktop**: Vertical toggle switch with vertical reading text (日本語/Eng)
- **Mobile**: Horizontal layout in header area
- **Logic**: `locale.value === 'ja' ? 'en' : 'ja'` (corrected from previous bug)
- **Ultra-compact spacing**: `gap: 0.125rem` between switch and text

### Logo Responsiveness Solution
**Problem**: 760px width screens caused logo crushing due to Flexbox space competition.

**Solution**: Multi-layered approach:
1. **Flexible Container**: Logo uses `flex: 1 1 auto` to shrink when needed
2. **Fixed Elements**: Navigation links and language toggle use `flex: 0 0 auto`
3. **Responsive Images**: `width: 100%; height: auto; object-fit: contain;`
4. **Staged Breakpoints**: Progressive size reduction with minimum guarantees

## SEO & Meta Management

### Dynamic SEO Implementation
All main pages (About, Creatives, Contact) implement dynamic SEO using @vueuse/head:

```javascript
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

useHead({
  title: computed(() => 
    locale.value === 'ja' 
      ? '日本語タイトル | MANAPURAZA.COM'
      : 'English Title | MANAPURAZA.COM'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() => locale.value === 'ja' ? '日本語説明' : 'English description')
    }
  ]
});
```

### Structured Data
- **Home**: Person + Organization schema
- **About**: Person schema with detailed profile information
- **Creatives**: CollectionPage schema for portfolio
- **Contact**: ContactPage schema with contact information