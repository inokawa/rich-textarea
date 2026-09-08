import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    clearMocks: true,
    projects: [
      {
        test: {
          name: "unit",
          root: "src",
          environment: "jsdom",
        },
      },
      {
        extends: true,
        plugins: [react()],
        test: {
          name: "e2e",
          include: ["e2e/**/*.spec.tsx"],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            // same as playwright's devices["Desktop Chrome"]
            viewport: { width: 1280, height: 720 },
            instances: [
              { browser: "chromium" },
              { browser: "firefox" },
              { browser: "webkit" },
            ],
          },
        },
      },
    ],
  },
});
