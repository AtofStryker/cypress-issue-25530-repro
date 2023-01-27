import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    defaultCommandTimeout: 90000,
    responseTimeout: 90000,
    recoverFromRendererCrashes: true,
  },
});
