import type Keycloak from 'keycloak-js'

export function useAuth() {
  const keycloak = inject('keycloak') as Keycloak

  const isAuthenticated = computed(() => keycloak?.authenticated)
  const userProfile = computed(() => keycloak?.tokenParsed)

  return {
    keycloak,
    isAuthenticated,
    userProfile,
  }
}
