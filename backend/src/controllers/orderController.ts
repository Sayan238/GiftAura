import { Request, Response } from 'express';
import Order from '../models/Order';

export const addOrderItems = async (req: any, res: Response): Promise<void> => {
  try {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, deliveryDate } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' });
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        deliveryDate
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req: any, res: Response): Promise<void> => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
