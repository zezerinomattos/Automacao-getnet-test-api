module.exports = {
  e2e: {
    baseUrl: 'https://reqres.in/api/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Atualize o padrão para incluir .spec.js
    setupNodeEvents(on, config) {
      // Implementar event listeners, se necessário
    },
  },
};
