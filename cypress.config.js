const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.base_url,
    specPattern: 'cypress/UI_testing/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout : 5000,
    pageLoadTimeout: 60000,
    testTimeout:90000,
    specTimeout: 240000,
  },
  retries: {
    runMode: 2,      // Number of retries for the entire test run
    openMode: 1,     // Number of retries for each individual test
  }
});
