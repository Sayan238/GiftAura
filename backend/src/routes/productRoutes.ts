import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);

export default router;
