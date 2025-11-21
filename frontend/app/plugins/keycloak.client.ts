import Keycloak from 'keycloak-js'

// TODO: Без конфига выдать ошибку

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public.keycloak

  const keycloak = new Keycloak({
    url: config?.url,
    realm: config?.realm,
    clientId: config?.clientId,
  })

  keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (!authenticated)
      keycloak.login()
  })

  return {
    provide: {
      keycloak,
    },
  }
})
