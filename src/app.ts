import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import orderRoutes from './modules/order/order.routes';
import productRoutes from './modules/product/product.routes';

const app: Application = express();

// * Middleware to parse incoming JSON request bodies *
app.use(express.json());

// * Middleware to enable Cross-Origin Resource Sharing (CORS) *
app.use(cors());

// * Middleware to define the endpoints *
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// * Define the root route to send a "Hello World!" response *
app.get('/', (req: Request, res: Response) => {
  res.send(`Hello! Welcome to your "Bike Store"`);
});

export default app;
