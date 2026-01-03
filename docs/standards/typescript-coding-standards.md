# TypeScript Coding Standards

## Overview

This document defines TypeScript coding standards for the manapuraza portfolio project. All new code must follow these standards to maintain type safety and code quality.

**TypeScript Version**: 5.3.3
**Strict Mode**: Enabled
**Last Updated**: January 2, 2025

## Table of Contents

1. [General Principles](#general-principles)
2. [Type Annotations](#type-annotations)
3. [Interfaces and Types](#interfaces-and-types)
4. [Functions and Parameters](#functions-and-parameters)
5. [Vue Component Patterns](#vue-component-patterns)
6. [Import Conventions](#import-conventions)
7. [Error Handling](#error-handling)
8. [Null Safety](#null-safety)
9. [Generic Types](#generic-types)
10. [Anti-Patterns](#anti-patterns)

## General Principles

### 1. Strict Mode Compliance

All TypeScript code must compile without errors under Strict Mode settings:

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### 2. Explicit Over Implicit

❌ **Bad** - Implicit any:
```typescript
function processData(data) {
  return data.map(item => item.value);
}
```

✅ **Good** - Explicit types:
```typescript
function processData<T extends { value: string }>(data: T[]): string[] {
  return data.map(item => item.value);
}
```

### 3. Type Safety Over Convenience

Prefer compile-time type checking over runtime assertions:

❌ **Bad** - Runtime type assertion:
```typescript
const category = route.params.category as CreativeCategory;
```

✅ **Good** - Type guard function:
```typescript
function isValidCategory(category: string): category is CreativeCategory {
  return ['animation', 'development', 'illustration', 'video'].includes(category);
}

const category = route.params.category;
if (typeof category === 'string' && isValidCategory(category)) {
  // category is now CreativeCategory type
}
```

## Type Annotations

### 1. Variable Declarations

Always annotate complex types, infer simple types:

❌ **Bad** - Unnecessary annotation:
```typescript
const count: number = 0;
const message: string = "hello";
```

✅ **Good** - Inferred simple types:
```typescript
const count = 0;
const message = "hello";
```

✅ **Good** - Annotated complex types:
```typescript
const camera: ShallowRef<PerspectiveCamera | null> = shallowRef(null);
const creative: Ref<Creative | null> = ref(null);
```

### 2. Return Types

Annotate return types for public functions:

❌ **Bad** - No return type:
```typescript
function getCreative(id: string) {
  return creativesData.find(item => item.id === id);
}
```

✅ **Good** - Explicit return type:
```typescript
function getCreative(id: string): Creative | undefined {
  return creativesData.find(item => item.id === id);
}
```

**Exception**: Let TypeScript infer when type is obvious:
```typescript
// Acceptable - return type is obvious
const isVisible = computed(() => props.visible && !isHidden.value);
```

### 3. Ref/Reactive Types

Always annotate Vue reactive types:

✅ **Good** - Explicit Ref types:
```typescript
import { ref, type Ref } from 'vue';

const count: Ref<number> = ref(0);
const data: Ref<Creative | null> = ref(null);
const items: Ref<Creative[]> = ref([]);
```

✅ **Good** - ShallowRef for non-reactive objects:
```typescript
import { shallowRef, type ShallowRef } from 'vue';

const camera: ShallowRef<PerspectiveCamera | null> = shallowRef(null);
const renderer: ShallowRef<WebGLRenderer | null> = shallowRef(null);
```

## Interfaces and Types

### 1. Interface vs Type Alias

**Use `interface` for**:
- Object shapes
- Extendable structures
- Public API contracts

```typescript
interface Creative {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface CreativeWithDetail extends Creative {
  detail: CreativeDetail;
}
```

**Use `type` for**:
- Union types
- Intersection types
- Mapped types
- Simple aliases

```typescript
type CreativeCategory = 'animation' | 'development' | 'illustration' | 'video';
type Locale = 'ja' | 'en';
type ID = string;
```

### 2. Naming Conventions

- **Interfaces**: PascalCase, descriptive names
- **Type aliases**: PascalCase
- **Generic parameters**: Single capital letter or descriptive PascalCase

```typescript
// ✅ Good
interface CreativeDetail { }
type CreativeCategory = '...';
function map<T>(items: T[]): T[] { }

// ❌ Bad
interface creative_detail { }
type creativecategory = '...';
function map<Type>(items: Type[]): Type[] { }
```

### 3. Optional vs Required Properties

Be explicit about optionality:

```typescript
interface CreativeDetail {
  images: string[];                    // Required
  descriptionMarkdown: string;         // Required
  youtube?: {                          // Optional
    mobile: string;
    desktop: string;
  };
  productionYear?: string;             // Optional
}
```

### 4. Union Types for Limited Values

Use union types instead of enums for string constants:

❌ **Bad** - Enum overhead:
```typescript
enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Simple = 'simple'
}
```

✅ **Good** - Union type:
```typescript
type Variant = 'primary' | 'secondary' | 'simple';
```

## Functions and Parameters

### 1. Function Signatures

Always type parameters, annotate return types for complex functions:

```typescript
// Simple function - return type inferred
const add = (a: number, b: number) => a + b;

// Complex function - explicit return type
function getCreativeById(
  category: keyof CreativesData,
  id: string
): Creative | undefined {
  return creativesData[category].find((item) => item.id === id);
}
```

### 2. Unused Parameters

Prefix unused parameters with `_`:

```typescript
// ✅ Good
router.beforeEach((to, _from, next) => {
  // 'from' is unused but required by signature
  next();
});

// ✅ Better - Omit entirely if possible (TypeScript 5.0+)
try {
  // ...
} catch {
  // No error parameter
}
```

### 3. Default Parameters

Use default parameters with proper typing:

```typescript
// ✅ Good
function createButton(
  text: string,
  variant: Variant = 'primary'
): ButtonConfig {
  return { text, variant };
}
```

### 4. Rest Parameters

Type rest parameters appropriately:

```typescript
function mergeCreatives(...creatives: Creative[]): Creative[] {
  return creatives.flat();
}
```

## Vue Component Patterns

### 1. Component Props

Use `<script setup lang="ts">` with typed props:

```typescript
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  tags?: string[];
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  variant: 'primary'
});
</script>
```

### 2. Event Handlers

Type event parameters explicitly:

```typescript
const handleClick = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  console.log(target);
};

const handleInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  console.log(target.value);
};
```

### 3. Computed Properties

Let TypeScript infer computed types when possible:

```typescript
// Inferred type
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

// Explicit type when complex
const filteredItems = computed<Creative[]>(() => {
  return items.value.filter(item => item.category === selectedCategory.value);
});
```

### 4. Watch and WatchEffect

Type watched values:

```typescript
watch(() => route.path, (newPath: string, oldPath: string) => {
  console.log(`Navigated from ${oldPath} to ${newPath}`);
});
```

## Import Conventions

### 1. Type-Only Imports

Use `import type` for type-only imports:

```typescript
// ✅ Good - Type-only import
import type { Creative, CreativeCategory } from '@/types';

// ✅ Good - Mixed import
import { creativesData, type CreativesData } from '@/data/creatives';

// ❌ Bad - Importing types as values
import { Creative } from '@/types';
```

### 2. Import Organization

Organize imports in the following order:

1. Vue core imports
2. Third-party library imports
3. Local type imports
4. Local component/utility imports

```typescript
// 1. Vue core
import { ref, computed, onMounted, type Ref } from 'vue';

// 2. Third-party
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

// 3. Local types
import type { Creative, CreativeCategory, Locale } from '@/types';

// 4. Local components/utilities
import CreativeItem from '@/components/CreativeItem.vue';
import { creativesData } from '@/data/creatives';
```

## Error Handling

### 1. Try-Catch Blocks

Omit error parameter when unused (TypeScript 5.0+):

```typescript
// ✅ Good - No parameter when unused
try {
  const data = JSON.parse(input);
} catch {
  return null;
}

// ✅ Good - Typed parameter when used
try {
  const data = JSON.parse(input);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('Invalid JSON:', error.message);
  }
  return null;
}
```

### 2. Error Type Guards

Use type guards for error handling:

```typescript
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

try {
  // ...
} catch (error) {
  if (isError(error)) {
    console.error(error.message);
  }
}
```

## Null Safety

### 1. Optional Chaining

Use optional chaining for nullable properties:

```typescript
// ✅ Good
const firstImage = creative.value?.detail?.images?.[0];
const youtubeUrl = creative.value?.detail?.youtube?.desktop;
```

### 2. Nullish Coalescing

Use nullish coalescing for default values:

```typescript
// ✅ Good
const title = creative.value?.title ?? 'Untitled';
const tags = creative.value?.tags ?? [];
```

### 3. Non-Null Assertions

Use sparingly and only when certainty exists:

```typescript
// ✅ Acceptable - Array swap (indices guaranteed valid)
[shuffled[i]!, shuffled[j]!] = [shuffled[j]!, shuffled[i]!];

// ❌ Bad - Unsafe assumption
const title = creative.value!.title;  // Could be null!
```

### 4. Template Null Checks

Add null checks in Vue templates:

```vue
<!-- ✅ Good -->
<iframe
  v-if="detailData.youtube"
  :src="detailData.youtube.desktop"
/>

<!-- ❌ Bad - Potential runtime error -->
<iframe :src="detailData.youtube.desktop" />
```

## Generic Types

### 1. Generic Functions

Use generics for reusable functions:

```typescript
// ✅ Good - Generic array shuffle
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i]!, shuffled[j]!] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
};
```

### 2. Generic Constraints

Constrain generics when needed:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### 3. Partial and Required Utility Types

Use built-in utility types:

```typescript
// Partial for optional updates
function updateCreative(id: string, updates: Partial<Creative>): void {
  // ...
}

// Required for mandatory fields
function createCreative(data: Required<CreativeDetail>): Creative {
  // ...
}
```

## Anti-Patterns

### ❌ 1. Any Type Usage

Avoid `any` except in type definitions:

```typescript
// ❌ Bad
function processData(data: any): any {
  return data;
}

// ✅ Good - Use unknown for truly unknown types
function processData(data: unknown): unknown {
  if (typeof data === 'object' && data !== null) {
    return data;
  }
  return null;
}
```

**Exception**: Type definitions (`vite-env.d.ts`) may use `any` when required:
```typescript
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;  // Acceptable
  export default component;
}
```

### ❌ 2. Type Assertions Without Validation

Don't assert types without runtime checks:

```typescript
// ❌ Bad
const category = route.params.category as CreativeCategory;

// ✅ Good
const category = route.params.category;
if (typeof category === 'string' && isValidCategory(category)) {
  // Use category as CreativeCategory
}
```

### ❌ 3. Ignoring Strict Null Checks

Don't bypass null checks:

```typescript
// ❌ Bad
const title = creative.value!.title;

// ✅ Good
const title = creative.value?.title ?? 'Untitled';
```

### ❌ 4. Excessive Non-Null Assertions

Use optional chaining instead:

```typescript
// ❌ Bad
const url = creative.value!.detail!.youtube!.desktop;

// ✅ Good
const url = creative.value?.detail?.youtube?.desktop;
```

## Code Review Checklist

Before submitting code for review, verify:

- [ ] `npm run typecheck` passes with zero errors
- [ ] `npm run lint` passes with zero errors
- [ ] All function parameters are typed
- [ ] Complex return types are annotated
- [ ] `import type` used for type-only imports
- [ ] No unnecessary `any` types
- [ ] Null safety handled with optional chaining
- [ ] Event handlers have typed parameters
- [ ] Generic types used where appropriate
- [ ] Unused parameters prefixed with `_` or omitted
- [ ] Vue components use `<script setup lang="ts">`
- [ ] Props are typed with interfaces

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vue 3 TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [TypeScript Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Project Migration Guide](../typescript-migration.md)

## Updates

This document will be updated as new TypeScript patterns emerge in the project. Last updated: January 2, 2025.
