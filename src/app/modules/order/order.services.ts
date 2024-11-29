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

// const ordersRevenues = async () => {
//   const revenues = await Order.aggregate([
//     {
//       $project: {
//         totalRevenue: { $multiply: ['$quantity', '$totalPrice'] },
//       },
//     },
//   ]);
//   if (revenues.length === 0) {
//     return 0;
//   }
//   const totalRevenue = revenues.reduce(
//     (acc, curr) => acc + curr.totalRevenue,
//     0
//   );
//   return totalRevenue;

//   // const orders = await Order.find();
//   // const revenues = orders.reduce((total, order) => total + order.totalPrice, 0);
//   // return revenues;
// };

const ordersRevenues = async () => {
  const result = await Order.aggregate([
    {
      $project: {
        totalRevenue: { $multiply: ['$quantity', '$totalPrice'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalRevenue' },
      },
    },
  ]);

  if (result.length === 0) {
    return 0;
  }

  return result[0].totalRevenue;
};

export default {
  createOrderInDB,
  ordersRevenues,
};
