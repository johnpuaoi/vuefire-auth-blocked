// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-vuefire', '@nuxthq/ui'],
  ssr: false,
  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyDXN6_nYZOjFoggLO1cZAhl35XvB2Sqagg",
      authDomain: "john-puaoi-tech-ea13e.firebaseapp.com",
      projectId: "john-puaoi-tech-ea13e",
      storageBucket: "john-puaoi-tech-ea13e.appspot.com",
      messagingSenderId: "41660803733",
      appId: "1:41660803733:web:25eda5e5e18489c280c99c",
      measurementId: "G-7PDVTKWBVE"
    },
    appCheck: {
      // Allows you to use a debug token in development
      debug: false,
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      // Find the instructions in the Firebase documentation, link above
      key: '6Lc3EJsmAAAAAJTZyBLXlh-JwCmt8ISfFOUYIvcw',
    },
    emulators: false
  }
})
