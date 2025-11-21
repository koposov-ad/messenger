import { io } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const socket = io(runtimeConfig?.public?.ws?.url ?? 'http://localhost:3000')

  return {
    provide: { socket },
  }
})
