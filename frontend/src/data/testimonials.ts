export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  avatar: string; // emoji
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    review: 'Absolutely stunning roses! They arrived so fresh and beautifully arranged. My wife loved them. The presentation was premium and the delivery was on time. Highly recommended!',
    product: 'Red Roses Bouquet',
    avatar: '👩‍🦰',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    review: 'The chocolate truffle cake was absolutely delicious! So moist and rich. It was the perfect gift for my mom\'s birthday. She couldn\'t stop talking about it!',
    product: 'Chocolate Truffle Cake',
    avatar: '👨‍💼',
  },
  {
    id: '3',
    name: 'Neha Patel',
    location: 'Bangalore',
    rating: 5,
    review: 'Love the personalized necklace! The quality is amazing and it arrived in beautiful packaging. The customization was perfect. Worth every penny!',
    product: 'Personalized Name Necklace',
    avatar: '👩‍🎨',
  },
  {
    id: '4',
    name: 'Amit Singh',
    location: 'Pune',
    rating: 4.5,
    review: 'Great quality products and excellent service. The Zen Bliss Retreat Kit was exactly what I needed after a stressful week. All products feel premium and soulful.',
    product: 'Zen Bliss Personal Retreat Kit',
    avatar: '👨‍⚕️',
  },
  {
    id: '5',
    name: 'Ananya Desai',
    location: 'Hyderabad',
    rating: 5,
    review: 'The photo mug arrived in perfect condition. The print quality is excellent and very clear. My dad uses it every morning and loves it!',
    product: 'Photo Printed Mug',
    avatar: '👩‍🏫',
  },
  {
    id: '6',
    name: 'Vikram Reddy',
    location: 'Chennai',
    rating: 4.5,
    review: 'Same-day delivery in my area! Very impressed with the speed and professionalism. The flowers were premium quality and arrangement was artistic.',
    product: 'Mixed Flower Bouquet',
    avatar: '👨‍🎭',
  },
  {
    id: '7',
    name: 'Deepika Kadam',
    location: 'Kolkata',
    rating: 5,
    review: 'Exceptional service! The earrings are beautiful and comfortable. Perfect gift for my sister. The packaging was so elegant and thoughtful!',
    product: 'Silver Hoop Earrings',
    avatar: '👩‍⚖️',
  },
  {
    id: '8',
    name: 'Sanjay Gupta',
    location: 'Lucknow',
    rating: 4,
    review: 'Great coffee set! All the beans are fresh and aromatic. My mornings have become so much better. Would definitely order again!',
    product: 'Coffee Lover\'s Gift Set',
    avatar: '☕',
  },
  {
    id: '9',
    name: 'Riya Nair',
    location: 'Kochi',
    rating: 5,
    review: 'The scrapbook album is absolutely beautiful! The customization was done perfectly with all my favorite photos. A treasure to keep forever!',
    product: 'Custom Scrapbook Album',
    avatar: '📷',
  },
  {
    id: '10',
    name: 'Aditya Verma',
    location: 'Jaipur',
    rating: 5,
    review: 'Best purchase ever! The orchid arrangement looks so elegant on my desk. It adds so much beauty to my workspace. Highly recommend!',
    product: 'Exotic Orchid Arrangement',
    avatar: '🌸',
  },
];
