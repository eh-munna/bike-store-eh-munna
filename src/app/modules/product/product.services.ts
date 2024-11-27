// * Create a new product in the database *

import Product from '../product.model';
import { IProduct } from './product.interface';

// * Fetch all products from the database *

const findAllProducts = async () => {
  const products = await Product.find();
  return products;
};

// * Create a new product record in the database *
const createProductInDB = async (product: IProduct) => {
  const createdProduct = await Product.create(product);
  return createdProduct;
};

// * Find a product in the database *

const findProductById = async (productId: string) => {
  const product = await Product.findOne({ id: productId });
  return product;
};

// * Update an existing product in the database *

const updateProductInDB = async (productId: string) => {
  const updatedProduct = await Product.findOne(
    { id: productId },
    { $set: { status: 'sold' } }
  );
  return updatedProduct;
};

// * Delete an existing product in the database *

const deleteProductInDB = async (productId: string) => {
  const deletedProduct = await Product.findOne({ id: productId });
  return deletedProduct;
};

const productServices = {
  findAllProducts,
  createProductInDB,
  findProductById,
  updateProductInDB,
  deleteProductInDB,
};

export default productServices;
