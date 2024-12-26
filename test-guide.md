# Testing Guide

## Installation

```shell
npm i --save-dev @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core
```

nuxt.config.ts:

```typescript
modules: ['@nuxt/test-utils/module'];
```

vitest.config.ts:

```typescript
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    // If you have other tests, DON'T SET THIS.
    environment: 'nuxt'
  }
});
```

package.json:

```json
"scripts": {
  "test": "vitest"
}
```

And write your tests, or let Github Copilot write it.

Then run test `npm run test`.
