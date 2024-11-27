import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// * Middleware to parse incoming JSON request bodies *
app.use(express.json());

// * Middleware to enable Cross-Origin Resource Sharing (CORS) *
app.use(cors());

// * Define the root route to send a "Hello World!" response *
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
