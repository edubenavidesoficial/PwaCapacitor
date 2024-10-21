const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist'  // Asegúrate de que los archivos se generen en el directorio "dist"
});
