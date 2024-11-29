import express from 'express';
import orderControllers from './order.controllers';

const router = express.Router();

// * Endpoint to create a new product *
router.post('/', orderControllers.createOrder);

// * Endpoint to get the revenues of the orders *
router.get('/revenue', orderControllers.getRevenues);

const orderRoutes = router;
export default orderRoutes;
