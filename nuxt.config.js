export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'Gabinet kosmetologiczny Białystok TBS. Angelika Apanowicz-Kozicka',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'salon kosmetyczny, kosmetolog, kosmetolog białystok, TBS'
      },
      {
        name: 'description',
        hid: 'description',
        content:
          'Gabinet kosmetologiczny Białystok. Makijaż permanentny brwi, mikrodermabrazja, peeling kawitacyjny, stylizacja i przedłużanie rzęs.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=EB+Garamond:400,700|Lato:300,700&display=swap&subset=latin-ext'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://unpkg.com/aos@next/dist/aos.js',
        defer: true
      },
      {
        type: 'text/javascript',
        hid: 'fb-customer-chat',
        body: true,
        innerHTML: `
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "121109382622565");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v13.0'
          });
        };


        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `
      }
    ],
    __dangerouslyDisableSanitizersByTagID: { 'fb-customer-chat': ['innerHTML'] }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['assets/style/main.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  static: {
    prefix: false
  }
}
