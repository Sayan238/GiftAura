import express from 'express';
import { getVendorProducts, getVendorOrders } from '../controllers/vendorController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/products').get(protect, getVendorProducts);
router.route('/orders').get(protect, getVendorOrders);

export default router;
