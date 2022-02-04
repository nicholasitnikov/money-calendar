import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient();
    const payments = await prisma.payment.findMany();
    res.status(200).json(payments)
    prisma.$disconnect();
  }
  