import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      // No special event handling needed for mochawesome
      return config;
    },
    baseUrl: "http://localhost:8888", // or your app's URL
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
