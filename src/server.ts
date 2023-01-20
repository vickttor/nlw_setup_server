import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./routes";

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.register(cors) // Applying access policies to app

app.register(appRoutes) // Consuming Routes

// Making the Server listen the 3333 (or server) port
app.listen({
  port: PORT,
  host: '192.168.1.108'
}).then(()=> {
  console.log("HTTP server running in http://192.168.1.108:" + PORT)
})
