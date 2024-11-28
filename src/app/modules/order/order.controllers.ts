import { Request, Response } from 'express';
import orderServices from './order.services';

// * Create a new order controller *
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // Save the order into the database

    const createdOrder = await orderServices.createOrderInDB(order);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: createdOrder,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'An error occurred while creating the order',
      success: false,
      error: err.message || err,
      stack: err.stack,
    });
  }
};

// const getAllOrders = () => {};

// const getRevenues = () => {};

const orderControllers = {
  createOrder,
  //   getAllOrders,
  //   getRevenues,
};
export default orderControllers;
