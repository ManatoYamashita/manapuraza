# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build production bundle with Vite
- `npm run preview` - Preview production build locally
- `npm run analyze` - Build with bundle analyzer (generates stats.html)
- `npm run typecheck` - Run TypeScript type checking (vue-tsc)

### Testing & Quality
- **Type Checking**: `npm run typecheck` - TypeScript compilation check (zero errors required)
- **Linting**: `npm run lint` - ESLint validation (zero errors required)
- **Manual Testing**: Run development server and check browser console/DevTools
- No automated testing framework is configured

## Architecture Overview

This is a Vue.js 3 portfolio website using:
- **Vue 3** with Composition API and `<script setup lang="ts">` syntax
- **TypeScript 5.3.3** with Strict Mode enabled (100% TypeScript coverage)
- **Vite 6.2.3** as build tool with TypeScript configuration and optimized chunking strategy
- **Vue Router 4** for SPA navigation with type-safe lazy-loaded routes and dynamic routing (`/creatives/:category/:id`)
- **Vue I18n 9** for internationalization (Japanese/English) with typed locale support
- **Three.js 0.169.0** for 3D background animations (MetaBall component with typed Three.js objects)
- **GSAP 3.12.5** for advanced animations
- **Font Awesome** for icons (selective imports with tree-shaking)
- **marked** for Markdown rendering in creative detail pages

### TypeScript Configuration

**Strict Mode Enabled** (`tsconfig.json`):
- `strict: true` - All strict type-checking options enabled
- `noUnusedLocals: true` - Report errors on unused local variables
- `noUnusedParameters: true` - Report errors on unused parameters
- `noImplicitReturns: true` - Ensure all code paths return a value
- `noUncheckedIndexedAccess: true` - Add undefined to index signature results
- `noFallthroughCasesInSwitch: true` - Report errors for fallthrough cases

**Type Coverage**: 100% TypeScript across all components, utilities, and configuration files
- Zero type errors required for commits
- Zero ESLint errors required for commits
- See `docs/typescript-migration.md` for migration details
- See `docs/standards/typescript-coding-standards.md` for coding standards

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
├── components/     # Reusable Vue components (CreativeItem, Menu, Btn, etc.) - TypeScript
├── views/          # Page-level components (Home, About, Creatives, CreativeDetail, 404) - TypeScript
├── composables/    # Vue composables (useCreativesAPI.ts for microCMS integration) - TypeScript
├── types/          # TypeScript type definitions (centralized)
│   ├── index.ts              # Export aggregation
│   ├── creatives.ts          # Creative/portfolio types
│   ├── microcms.ts           # microCMS API types
│   ├── router.ts             # Router parameter types
│   ├── i18n.ts               # Internationalization types
│   └── components.ts         # Component props types
├── assets/         # Images, CSS, static assets
├── router/         # Vue Router configuration (index.ts with type-safe dynamic routing)
└── main.ts         # Application entry point (TypeScript)
```

## Key Components & Data Management

### microCMS Integration

**Overview:**
Portfolio creative works are managed through microCMS headless CMS instead of static TypeScript files. Data is fetched dynamically from microCMS API and cached locally.

**Architecture:**
- **API Client**: `src/composables/useCreativesAPI.ts` - Composable for microCMS data fetching
- **Type Definitions**: `src/types/microcms.ts` - microCMS API response types
- **Caching Strategy**: LocalStorage with 30-minute TTL for performance
- **Data Adapter**: `adaptCreativeData()` transforms `CreativeData` → `CMSCreative` with locale support

**Data Flow:**
```
microCMS API → useCreativesAPI composable → LocalStorage cache → Vue components
```

**Key Files:**
- `src/composables/useCreativesAPI.ts` - Data fetching, caching, and adaptation logic
- `src/types/microcms.ts` - Type definitions for categories and creatives APIs
- `.env` - Environment variables (`VITE_MICROCMS_API_ENDPOINT`, `VITE_MICROCMS_API_KEY`)

**Categories:**
- 5 major categories: `animation`, `development`, `illustration`, `video`, `design`
- Minor categories (tags): Managed as CMS content, referenced by creatives

**Setup Guide:**
See `docs/ops/microcms-setup.md` for complete setup instructions including:
- Account creation and API configuration
- Schema definitions for categories and creatives APIs
- Environment variable setup
- Initial data registration
- Troubleshooting

**Data Management:**
See `docs/ops/creatives-guide.md` for operational procedures:
- Adding new creative works via microCMS interface
- Image upload and management
- Content publishing workflow
- Common issues and solutions

### Core Architecture Components
- **MetaBall.vue**: Three.js background animations (lazy loaded using `requestIdleCallback`)
- **App.vue**: Progressive logo loading, main layout management
- **Menu.vue**: Unified responsive navigation component (replaces Navbar.vue and SpNav.vue):
  - Desktop: Flexbox layout with responsive logo sizing, `white-space: nowrap` on nav links
  - Mobile: Circular floating menu at screen bottom with 1-second delay fade-in
  - Language toggle with vertical reading text (日本語/Eng display)
- **CreativeItem.vue**: Unified portfolio card component
  - All modes (Animation/Development/Illustration/Video) use consistent card layout
  - Renders as `<li>` elements with router-link to detail pages
  - Displays thumbnail, title, description, and tags
- **CreativeDetail.vue**: Individual creative work detail page
  - URL pattern: `/creatives/:category/:id`
  - **Layout**: 2-column Grid on desktop (≥769px): left column (images/videos), right column (description/metadata)
  - **Responsive**: Single column on tablet/mobile (≤768px)
  - **Structure**: Back link with arrow-left icon → Title → Tags (directly below title) → 2-column content → Fixed CTA footer
  - Markdown rendering for descriptions
  - Image gallery (single column in left panel), YouTube embed (Animation only), credits, and CTA buttons
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

**microCMS Workflow:**
1. **Upload images**: Go to microCMS Media management and upload WebP images
2. **Create content**: In microCMS creatives API, click "New Content"
3. **Fill required fields**:
   - `majorCategory`: Select from dropdown (animation/development/illustration/video/design)
   - `title`: Japanese title
   - `thumbnail`: Select uploaded image from Media
4. **Fill optional fields**:
   - `titleEn`: English title
   - `description`/`descriptionEn`: SEO descriptions
   - `detail`/`detailEn`: Markdown-formatted detailed descriptions
   - `images`: Select multiple images for gallery
   - `youtubeUrl`: YouTube embed URL (Animation only)
   - `year`: Production year
   - `url`: External project URL
   - `minorCategory`: Select tags (multiple selection)
5. **Publish**: Click "Save and Publish"
6. **Verify**: Check `/creatives` page and detail page at `/creatives/:category/:microCMS-ID`

**Note**: Content IDs are auto-generated by microCMS (e.g., `abc123def`), not kebab-case slugs.

See `docs/ops/creatives-guide.md` for detailed workflow and examples

### CreativeItem Component Usage
All creative items use a consistent card layout with router-link to detail pages:

```vue
<script setup lang="ts">
import { useCreativesAPI } from '@/composables/useCreativesAPI';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const { getCreativesByCategory } = useCreativesAPI();

const animationCreatives = computed(() =>
  getCreativesByCategory('animation', locale.value as 'ja' | 'en').value
);
</script>

<template>
  <CreativeItem
    v-for="(creative, index) in animationCreatives"
    :key="creative.id"
    :mode="'Animation'"
    :category="'animation'"
    :id="creative.id"
    :title="creative.title"
    :description="creative.description"
    :thumbnail="creative.thumbnail"
    :index="index"
    :tags="creative.tags"
  />
</template>
```

**Props**:
- `category`: Category name (`animation`, `development`, `illustration`, `video`, `design`)
- `id`: microCMS content ID (auto-generated, e.g., `abc123def`)
- `mode`: Display mode (affects styling only)
- `title`, `description`: Direct text strings (not i18n keys)
- `thumbnail`: microCMS image URL
- `tags`: Array of tag strings (localized by adapter)

**Behavior**:
- Renders as `<li>` elements in grid layout
- Uses `<router-link>` to navigate to `/creatives/:category/:microCMS-ID`
- Displays thumbnail, title, description, and tags
- Icon changes from `arrow-up-right-from-square` to `arrow-right` for internal navigation

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
- **vue-router**: 4.2.0 - SPA routing with dynamic routes
- **vue-i18n**: 9.7.1 - Internationalization
- **three**: 0.169.0 - 3D graphics library
- **gsap**: 3.12.5 - Animation library
- **marked**: Latest - Markdown rendering for creative detail pages
- **@fortawesome/***: Icon system with selective imports (faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faPlay, faGlobe, etc.)

### Build Dependencies
- **vite**: 6.2.3 - Build tool and dev server with TypeScript support
- **@vitejs/plugin-vue**: 5.2.3 - Vue 3 support for Vite
- **typescript**: 5.3.3 - TypeScript compiler
- **vue-tsc**: 2.0.6 - Vue TypeScript type checker
- **@types/node**: 20.11.0 - Node.js type definitions
- **@types/three**: 0.169.0 - Three.js type definitions
- **@typescript-eslint/eslint-plugin**: 7.0.0 - TypeScript ESLint rules
- **@typescript-eslint/parser**: 7.0.0 - TypeScript ESLint parser
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
- **microCMS Integration**: Portfolio data managed via microCMS API, not static files
- **Image optimization**: All portfolio images hosted on microCMS, must be WebP format
- **LocalStorage caching**: 30-minute TTL for microCMS API responses
- **i18n requirements**: AnimationSection.vue uses static i18n keys, other content from microCMS
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
- **Flexbox Layout**: Uses `justify-content: flex-start` with compact spacing between menu links and language toggle
- **Responsive Logo**: Fixed-size logo with sophisticated sizing system:
  ```css
  .desktop-nav .logo {
    flex: 0 0 auto; /* Fixed size */
    max-width: clamp(180px, 40vw, 300px);
    min-width: 120px; /* Ensure minimum readability */
    margin-right: auto; /* Logo stays left-aligned */
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
1. **Fixed Logo Container**: Logo uses `flex: 0 0 auto` with `margin-right: auto` for left alignment
2. **Compact Right Section**: Navigation links and language toggle use minimal spacing (`margin-right: 0.5rem`)
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

## Home Menu Architecture (App.vue)

### Home-Specific Menu Implementation
The home page features a unique menu layout where navigation items appear below the central logo:

```vue
<!-- In App.vue -->
<transition name="home-menu-fade">
  <nav class="home-nav-links" v-show="isHomePage">
    <RouterLink to="/about" class="home-nav-link">About</RouterLink>
    <RouterLink to="/creatives" class="home-nav-link">Creatives</RouterLink>
    <RouterLink to="/contact" class="home-nav-link">Contact</RouterLink>
  </nav>
</transition>
```

### Key Implementation Details
- **Position**: `top: 55%` (positioned below center logo at 43%)
- **Z-index Priority**: `z-index: 15` (higher than Menu.vue components)
- **Vertical Dividers**: Implemented using `::after` pseudo-elements with absolute positioning
- **Animation Timing**: Synchronized with logo animation (`animation-delay: 1s`)
- **Exit Animation**: Uses `filter: blur(2rem)` matching logo exit behavior

### Styling Specifications
```css
.home-nav-link {
  color: #000;           /* Black links for readability */
  font-size: 1.3rem;     /* Smaller, refined size */
  font-weight: bold;
}

.home-nav-link:not(:last-child)::after {
  content: "|";
  position: absolute;
  right: -1.5rem;        /* Precisely centered between links */
  color: #666;           /* Dark gray dividers */
}
```

### Responsive Behavior
- **Desktop**: Visible with full styling
- **Tablet (≤768px)**: Adjusted positioning (`top: 58%`) with smaller font
- **Mobile (≤540px)**: Hidden (mobile uses circular menu instead)