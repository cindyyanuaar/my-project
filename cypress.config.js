const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mirroring-staging.transtrack.id', // Tambahkan baseUrl di sini
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,  // Menambahkan default viewport jika dibutuhkan
    viewportHeight: 1080, // Menambahkan default viewport jika dibutuhkan
    retries: {
      runMode: 2, // Konfigurasi untuk retry saat mode run
      openMode: 0, // Tidak retry saat mode open
    },
    defaultCommandTimeout: 10000, // Tambahkan timeout jika perlu
  },
});
