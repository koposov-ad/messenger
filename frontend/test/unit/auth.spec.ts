import { describe, expect, it } from 'vitest'
import { useAuth } from '@/app/composables/useAuth'

describe('useAuth', () => {
  it('returns keycloak instance', () => {
    const { keycloak } = useAuth()
    expect(keycloak).toBeDefined()
  })
})
