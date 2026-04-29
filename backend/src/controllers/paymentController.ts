import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });

    const options = {
      amount: req.body.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        return res.status(500).json({ message: "Something went wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
