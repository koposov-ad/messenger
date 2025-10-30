import Keycloak from 'keycloak-js'

export default defineNuxtPlugin((nuxtApp) => {
  const keycloak = new Keycloak({
    url: 'https://sso.keyid.rt.ru/',
    realm: 'se',
    clientId: 'se_web',
  })

  keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: false,
  }).then((authenticated) => {
    if (!authenticated) {
      keycloak.login()
    }
  })

  nuxtApp.provide('keycloak', keycloak)
})
