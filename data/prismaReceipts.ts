//import { NextApiRequest, NextApiResponse } from 'next';

//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();

// export async function saveReceipt(req: any, res: any){
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const receipt = JSON.parse(req.body);
//     const savedReceipt = await prisma.receipt.create({ data: receipt });
//     res.status(200).json(savedReceipt);
//   } catch (err) {
//     res.status(400).json({ message: 'Something went wrong' });
//   }
// };

// export async function getReceipts() {
//   const receipts = await prisma.receipt.findMany();
//   console.info(receipts);
//   return {
//       receipts: receipts
//   };
// }
// async function main () {
//   const newPost = prisma.receipt.create({ data: { name: "beaf"} });
//   console.log(newPost);
// }

// main();

//import { PrismaClient } from '@prisma/client'
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })