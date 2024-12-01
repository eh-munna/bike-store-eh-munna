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
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

// * Fetch products based on a filter *

const findProductsByFilter = async (filter: any) => {
  const { category, brand, name } = filter;

  if (category) {
    filter.category = { $regex: category, $options: 'i' };
  }

  if (brand) {
    filter.brand = { $regex: brand, $options: 'i' };
  }

  if (name) {
    filter.name = { $regex: name, $options: 'i' };
  }

  const products = await Product.find(filter);
  return products;
};

// * Update an existing product in the database *

const updateProductInDB = async (productId: string, product: any) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: product },
    { new: true }
  );
  return updatedProduct;
};

// * Delete an existing product in the database *

const deleteProductInDB = async (productId: string) => {
  const deletedProduct = await Product.deleteOne({ _id: productId });
  if (!deletedProduct.deletedCount) {
    throw new Error('Product not found');
  }
  return deletedProduct;
};

const productServices = {
  findAllProducts,
  createProductInDB,
  findProductById,
  findProductsByFilter,
  updateProductInDB,
  deleteProductInDB,
};

export default productServices;
