// src/lib/db.js
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });

const prismaClientSingleton = () =>
  new PrismaClient({
    adapter, // 👈 this fixes PrismaClientConstructorValidationError
    log: ["query", "info", "warn", "error"],
  });

const db = globalThis.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default db;
