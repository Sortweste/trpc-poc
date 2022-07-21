import { PrismaClient } from '@prisma/client';
import products from '../data/products.json';

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    console.log('Adding Products...');
    await prisma.product.createMany({
      data: products,
    });
  }catch(error){
    console.error(error);
    throw new Error(JSON.stringify(error));
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();