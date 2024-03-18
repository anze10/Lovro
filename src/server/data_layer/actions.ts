"use server"

import { db } from "../db"

export async function getProducts() {

  const products = await db.product.findMany();
  return products;
}
