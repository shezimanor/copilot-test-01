import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    // enable the Nuxt environment for all tests.
    environment: 'nuxt' // If you have other tests, DON'T SET THIS.
  }
});
