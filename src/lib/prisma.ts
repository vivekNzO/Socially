// lib/prisma.ts (Standard Next.js example)
import { PrismaClient } from '@prisma/client';

// Define a type for the global object to hold the prisma instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Create or retrieve the existing prisma instance
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: logs queries to console
  });

// In development, set the global prisma instance
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
