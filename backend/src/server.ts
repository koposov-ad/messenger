import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import useSocketIO from "./socket/useSocketIO";

const app = express()
const server = createServer(app)
const io = useSocketIO(server)

app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(4000, () => {
    console.log('✅ Server running at http://localhost:4000');
})