export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Design Master 24",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Civil and Structural Engineering Consultants",
        content: ""
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content:
          "civil engineering, construction, zimbabwe, structural engineering, structural design"
      }
    ],
    link: [
      { rel: "icon", href: "/img/favicon.png" },
      { rel: "icon", href: "/img/apple-touch-icon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      },
      { rel: "stylesheet", href: "vendor/bootstrap/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "vendor/icofont/icofont.min.css" },
      { rel: "stylesheet", href: "vendor/boxicons/css/boxicons.min.css" },
      {
        rel: "stylesheet",
        href: "vendor/owl.carousel/assets/owl.carousel.min.css"
      },
      { rel: "stylesheet", href: "vendor/remixicon/remixicon.css" },
      { rel: "stylesheet", href: "vendor/venobox/venobox.css" },
      { rel: "stylesheet", href: "vendor/aos/aos.css" },
      { rel: "stylesheet", href: "css/main.css" }
    ],
    script: [
      { src: "vendor/jquery/jquery.min.js" },
      { src: "vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "vendor/jquery.easing/jquery.easing.min.js" },
      { src: "vendor/owl.carousel/owl.carousel.min.js" },
      { src: "vendor/waypoints/jquery.waypoints.min.js" },
      { src: "vendor/isotope-layout/isotope.pkgd.min.js" },
      { src: "vendor/venobox/venobox.min.js" },
      { src: "vendor/aos/aos.js" },
      { src: "js/main.js" },
      { src: "js/contact_form.js" },
      { src: "js/modal.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-scrollto/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
