const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://ctbookstore.azurewebsites.net/",
    baseUrl: "http://localhost:5500",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/results/TEST-[hash].xml",
    },
  },
});


require('@applitools/eyes-cypress')(module);
