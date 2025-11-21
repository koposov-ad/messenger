import type { Server as HttpServer } from 'node:http'
import {Server as ServerSocketIO} from "socket.io";

// https://socket.io/docs/v4/tutorial
export default (server: HttpServer) => {
    const io = new ServerSocketIO(server, {
        cors: { origin: '*' }
    })

    io.on('connection', socket => {
        console.log('🔌 Socket подключён:', socket.id)

        socket.on('joinChannel', ({ channelId }) => {
            socket.join(channelId)
        })

        socket.on('sendMessage', ({ channelId, message }) => {
            io.to(channelId).emit('newMessage', { message })
        })

        socket.on('disconnect', () => {
            console.log('❌ Socket отключён:', socket.id)
        })
    })

    return io
}