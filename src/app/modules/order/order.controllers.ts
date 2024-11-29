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
      status: true,
      data: createdOrder,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'An error occurred while creating the order',
      status: false,
      error: err.message || err,
      stack: err.stack,
    });
  }
};

const getRevenues = async (req: Request, res: Response) => {
  try {
    const revenues = await orderServices.ordersRevenues();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: revenues,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'An error occurred while fetching revenue data',
      status: false,
      error: err.message || err,
      stack: err.stack,
    });
  }
};

const orderControllers = {
  createOrder,
  getRevenues,
};
export default orderControllers;
