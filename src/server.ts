import Fastify from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient() // instantiating the prisma ORM
const PORT = 3333 || process.env.PORT

app.register(cors) // Applying access policies to app

// GET ROUTE
app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Concluir'
      }
    }
  })

  return habits
})

// Making the Server listen the 3333 (or server) port
app.listen({
  port: PORT,
}).then(()=> {
  console.log("HTTP server running in " + PORT)
})
