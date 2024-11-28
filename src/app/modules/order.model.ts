import { Schema, model } from 'mongoose';
import { IOrder } from './order/order.interface';

export const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
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
