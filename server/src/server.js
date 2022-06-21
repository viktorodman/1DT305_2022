import express from 'express'
import {Server as SocketServer} from 'socket.io'
import http from 'http'

import { mqtt, socket } from './socket.js'

export default class Server {
    
    constructor() {
        
        this.app = undefined
        this.server = undefined
    }

    run() {
        console.log("first")
        this.setUpSocket()
        this.listen()
    }
    
    async setUpSocket() {
        this.app = express()
        this.server = http.createServer(this.app)

        const io = new SocketServer(this.server)

        socket(io)
        await mqtt(io)

        this.app.use((req, res, next) => {
            res.io = io

            next()
        })
    }

    listen() {
        console.log("hej")
        this.server.listen(process.env.PORT, () => { console.log(`Server running at http://localhost:${process.env.PORT}`) })
    }
}