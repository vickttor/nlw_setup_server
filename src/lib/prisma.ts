import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
  log: ['query']
}) // instantiating the prisma ORM