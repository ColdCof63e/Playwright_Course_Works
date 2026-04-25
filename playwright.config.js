// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { use } from 'react';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  
  // The 2 time outs below are only to over-ride the default time out of 30 seconds for all the components and assertion or expect output
  // Time out for all the components
  timeout: 40 * 1000,

  // Expect timeout is exclusively for assertion or expect output timeout
  expect: {
    // Expect a condition to be met within 5 seconds.
    timeout: 50000},

  reporter: 'html',

  use: {
    // browserName: 'chromium'
    browserName: 'firefox',
    headless: false
  }
});

