const {
  defineConfig
} = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
    

module.exports = defineConfig({
  projectId: 'teste123',
  e2e: {
    supportFile: false,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      })

      on('file:preprocessor', bundler)
      await addCucumberPreprocessorPlugin(on, config)

      return config
    },
    retries: {
      runMode: 0,
      openMode:04
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    video: false,
    screenshotsFolder: 'cypress/screenshots'
  },
  env: {
    url: 'https://practice.automationtesting.in/'
  },
})