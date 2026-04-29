import { Request, Response } from 'express';
import Product from '../models/Product';
import Order from '../models/Order';

export const getVendorProducts = async (req: any, res: Response) => {
  try {
    const products = await Product.find({ vendor: req.user._id });
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getVendorOrders = async (req: any, res: Response) => {
  try {
    const orders = await Order.find({ 'orderItems.vendor': req.user._id });
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
