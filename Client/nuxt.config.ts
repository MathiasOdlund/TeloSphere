// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules :['@nuxtjs/tailwindcss' ,'@nuxtjs/strapi', '@nuxtjs/apollo'],
    strapi:{
      url: process.env.STRAPI_URL || 'http://localhost:1337',
      prefix: '/api',
      version: 'v4',
      cookie: {},
      cookieName: 'strapi_jwt'
    },
    apollo: {
     clients:{
      default: {
        httpEndpoint:  'http://localhost:1337/graphql',
      }
     }
    },
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
        }
      }
})
