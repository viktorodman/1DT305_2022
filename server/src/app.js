import Server from "./server.js"
import dotenv from 'dotenv'

dotenv.config()

const main = async() => {
    const server = new Server()

    server.run()
}

main()