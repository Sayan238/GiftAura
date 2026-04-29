import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  image: { type: String, required: true },
  images: [String],
  description: { type: String, required: true },
  category: { type: String, required: true },
  occasion: { type: String },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  isFeatured: { type: Boolean, default: false },
  reviews: [reviewSchema],
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
