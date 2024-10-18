import { createApp } from 'vue';
import App from './App.vue';
import { Browser } from '@capacitor/browser';
import { SplashScreen } from '@capacitor/splash-screen';

const openWebView = async () => {
  await Browser.open({ url: 'https://mercadomi.com.ec/' });
};

const app = createApp(App);
app.mount('#app');

// Cuando el DOM esté listo y el splash haya terminado
document.addEventListener('DOMContentLoaded', async () => {
  await SplashScreen.hide();  // Cierra el splash screen
  openWebView();              // Abre el WebView
});
