import { Schema, model } from 'mongoose';
import validator from 'validator';
import { IOrder } from './order/order.interface';

export const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Please provide a valid email address',
      },
    },
    product: {
      type: String,
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1.'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive value.'],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields to the schema
  }
);

const Order = model<IOrder>('Order', orderSchema);

export default Order;
