import { Request, Response } from 'express';
import productServices from './product.services';

// * Get all the products *

// Controller: Fetch all products or filter by category, brand, or name
const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    // Extract query parameters: category, brand, name
    const filter = req.query;

    // If no filters are provided, return all products
    if (!filter) {
      const products = await productServices.findAllProducts();
      return res.status(200).json({
        message: 'All products fetched successfully.',
        status: true,
        data: products,
      });
    }

    // Fetch filtered products from service
    const products = await productServices.findProductsByFilter(filter);

    if (products.length === 0) {
      return res.status(404).json({
        message: 'No products found for the given search criteria.',
        status: false,
        data: [],
      });
    }

    return res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: products,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: 'An error occurred while fetching bikes.',
      status: false,
      error: err.message || err,
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
      status: true,
      data: createdProduct,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while creating the bike',
      status: false,
      error: err.message || err,
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
      status: true,
      data: product,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while fetching the bike',
      status: false,
      error: err.message || err,
      stack: err.stack,
    });
  }
};

// * Update an existing product controller *
const updateProduct = async (req: Request, res: Response) => {
  try {
    // Extract product ID from the request parameters
    const { productId } = req.params;
    const updateData = req.body;

    // Call service to update the product in the database
    const product = await productServices.updateProductInDB(
      productId,
      updateData
    );

    // Send success response with the updated product data
    res.status(200).json({
      message: 'Bike updated successfully',
      status: true,
      data: product,
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while updating the bike',
      status: false,
      error: err.message || err,
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
      status: true,
      data: {},
    });
  } catch (err: any) {
    // Send error response if something goes wrong
    res.status(500).json({
      message: 'An error occurred while deleting the bike',
      status: false,
      error: err.message || err,
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
