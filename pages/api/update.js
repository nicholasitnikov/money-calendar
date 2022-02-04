import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const { id, checked } = req.body;

    const prisma = new PrismaClient();
    const updatedPayment = await prisma.payment.update({
      data: {
        checked: !checked
      },
      where: {
        id
      }
    })
    res.status(200).json(updatedPayment)
    prisma.$disconnect();
  }
  