import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://demo.guru99.com/insurance/v1/index.php",
    },
    // chromeWebSecurity: false,
  },
});
