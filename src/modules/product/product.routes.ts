import express from 'express';
import productControllers from './product.controllers';

const router = express.Router();

// * Endpoint to fetch all products from the inventory *
router.get('/', productControllers.getAllProducts);

// * Endpoint to create a new product *
router.post('/', productControllers.createProduct);

// * Endpoint to update an existing product *
router.put('/:productId', productControllers.updateProduct);

// * Endpoint to get a specific product *
router.get('/:productId', productControllers.getProductById);

// * Endpoint to delete a product *
router.delete('/:productId', productControllers.deleteProduct);

const productRoutes = router;
export default productRoutes;
