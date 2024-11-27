import { Schema, model } from 'mongoose';
import { IProduct } from './product/product.interface';

// * Product Schema for defining the structure of a product in the inventory *

export const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    maxLength: [20, 'Name cannot exceed 20 characters.'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
    min: [0, 'Price must be a positive value.'],
  },
  category: {
    type: String,
    enum: {
      values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
      message: 'Category must be one of: Mountain, Road, Hybrid, Electric.',
    },
    required: [true, 'Category is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    maxLength: [500, 'Description cannot exceed 500 characters.'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required.'],
    min: [0, 'Quantity cannot be negative.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock status is required.'],
    default: true,
  },
});

/**
 * Product Model
 *
 * This model allows interaction with the products collection in MongoDB,
 * providing methods to create, read, update, and delete products.
 */
const Product = model<IProduct>('Product', productSchema);

export default Product;
