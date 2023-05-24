import { PrismaClient } from '@prisma/client'

//nextjs hot reloading. On every change code re runs
//for prisma that creates multiple prisma instances
//so we make sure its a global var because globals aint affected

const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismadb = client

export default client
