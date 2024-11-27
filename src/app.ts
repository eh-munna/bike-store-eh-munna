import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import ProductRoutes from './app/modules/product/product.routes';

const app: Application = express();

// * Middleware to parse incoming JSON request bodies *
app.use(express.json());

// * Middleware to enable Cross-Origin Resource Sharing (CORS) *
app.use(cors());

// * Middleware to define the "/api/products" endpoint *
app.use('/api/products', ProductRoutes);

// * Define the root route to send a "Hello World!" response *
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
