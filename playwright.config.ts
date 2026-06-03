import { defineConfig, devices } from "@playwright/test";

// Environment resolution and per-test landing-page navigation happen inside
// the bvt fixture's beforeEach hook configured in support/bvt.ts. Keep this
// config focused on Playwright runner concerns only.
export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  reporter: "list",
  use: {
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
