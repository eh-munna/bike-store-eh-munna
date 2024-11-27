import { Request, Response } from 'express';
import productServices from './product.services';

// * Get all the products *

const getAllProducts = async (req: Request, res: Response) => {
  try {
    // Call service to fetch all products from the database
    const products = await productServices.findAllProducts();

    // Send success response with the products data
    res.status(200).json({
      message: 'Products fetched successfully',
      success: true,
      data: products,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while fetching products',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

// * Create a new product controller *
const createProduct = async (req: Request, res: Response) => {
  try {
    // Extract product details from the request body
    const { product } = req.body;

    // Call service to create the product in the database
    const createdProduct = await productServices.createProductInDB(product);

    // Send success response with the created product data
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: createdProduct,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while creating the bike',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

// * Get a specific product controller *
const getProductById = async (req: Request, res: Response) => {
  try {
    // Extract product ID from the request parameters
    const { productId } = req.params;

    // Call service to fetch the product from the database
    const product = await productServices.findProductById(productId);

    // Send success response with the product data
    res.status(200).json({
      message: 'Bike fetched successfully',
      success: true,
      data: product,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while fetching the bike',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

// * Update an existing product controller *
const updateProduct = async (req: Request, res: Response) => {
  try {
    // Extract product ID from the request parameters
    const { productId } = req.params;

    // Call service to update the product in the database
    const product = await productServices.updateProductInDB(productId);

    // Send success response with the updated product data
    res.status(200).json({
      message: 'Bike updated successfully',
      success: true,
      data: product,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while updating the bike',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

// * Delete an existing product in the database *
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await productServices.deleteProductInDB(productId);
    // Send success response with the deleted product data
    res.status(200).json({
      message: 'Bike deleted successfully',
      success: true,
      data: product,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while deleting the bike',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

// * Export the product controllers *
const productControllers = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default productControllers;
