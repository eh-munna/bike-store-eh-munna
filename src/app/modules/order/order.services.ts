import Order from '../order.model';
import Product from '../product.model';
import { IOrder } from './order.interface';

const createOrderInDB = async (order: IOrder) => {
  const productId = order.product;

  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product does not exist');
  }

  if (!product.inStock) {
    throw new Error('Product is out of stock');
  }

  if (product.quantity < order.quantity) {
    throw new Error('Order quantity exceeds the product quantity');
  }

  await Product.findByIdAndUpdate(
    productId,
    {
      $inc: { quantity: -order.quantity }, // Decrement the quantity
      $set: { inStock: product.quantity - order.quantity > 0 }, // Update inStock dynamically
    },
    { new: true }
  );

  const createdOrder = await Order.create(order);
  return createdOrder;
};

export default {
  createOrderInDB,
};
