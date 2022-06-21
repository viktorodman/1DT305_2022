import { Server, Socket } from "socket.io";
import MQTT from 'async-mqtt'


const topic = 'moist_moist/temp_moist'


export const socket = async (io) => {
   /*  io.on('connect',  (socket) => {

        console.log('User connected')
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    }) */

    
    console.log("from socket")
}

export const mqtt = async (io) => {
    const client = await MQTT.connect(process.env.TTN_MQTT)


    const test = async () => {
        await client.on('message', async (topic, message, packet) => {
            console.log(`message is: ${message}`)
            console.log(`topic is: ${topic}`)
            await socketController.publishData(io, JSON.parse(message))
        })

        await client.subscribe(topic)
    }

    client.on('connect', test)
}
