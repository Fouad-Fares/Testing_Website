export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Classics' | 'Specials' | 'Veg';
  image: string;
  isBestseller?: boolean;
  dietary?: string[];
}

export const PIZZAS: Pizza[] = [
  {
    id: '1',
    name: 'Margherita Royale',
    description: 'San Marzano tomatoes, fresh buffalo mozzarella, basil, extra virgin olive oil.',
    price: 18,
    category: 'Classics',
    image: 'https://picsum.photos/seed/margherita/800/600',
    isBestseller: true,
    dietary: ['Veg']
  },
  {
    id: '2',
    name: 'Double Pepperoni',
    description: 'Loaded with crispy pepperoni, mozzarella, and our signature spicy honey drizzle.',
    price: 22,
    category: 'Classics',
    image: 'https://picsum.photos/seed/pepperoni/800/600',
    isBestseller: true
  },
  {
    id: '3',
    name: 'Truffle Mushroom',
    description: 'Wild mushrooms, truffle oil, roasted garlic, and creamy ricotta base.',
    price: 24,
    category: 'Veg',
    image: 'https://picsum.photos/seed/mushroom/800/600',
    dietary: ['Veg']
  },
  {
    id: '4',
    name: 'The Inferno',
    description: 'Spicy salami, nduja, jalapeños, and chili flakes. Not for the faint-hearted.',
    price: 23,
    category: 'Specials',
    image: 'https://picsum.photos/seed/spicy/800/600'
  },
  {
    id: '5',
    name: 'Garden Harvest',
    description: 'Bell peppers, red onion, black olives, spinach, and feta cheese.',
    price: 20,
    category: 'Veg',
    image: 'https://picsum.photos/seed/veggie/800/600',
    dietary: ['Veg']
  },
  {
    id: '6',
    name: 'BBQ Smokehouse',
    description: 'Smoked brisket, red onions, BBQ sauce, and aged cheddar.',
    price: 26,
    category: 'Specials',
    image: 'https://picsum.photos/seed/bbq/800/600'
  }
];

export const REVIEWS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    rating: 5,
    comment: 'Best pizza I have had in years. The crust is absolutely perfect!',
    date: '2 days ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Fast delivery and the pizza was still piping hot. The Inferno is a must-try.',
    date: '1 week ago'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    rating: 4,
    comment: 'Great vegetarian options. Love the Truffle Mushroom pizza.',
    date: '2 weeks ago'
  }
];

export const SHOP_INFO = {
  phone: '(555) 123-4567',
  address: '123 Pizza Lane, Foodville, FV 90210',
  hours: [
    { day: 'Monday', open: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', open: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', open: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', open: '11:00 AM - 11:00 PM' },
    { day: 'Friday', open: '11:00 AM - 12:00 AM' },
    { day: 'Saturday', open: '12:00 PM - 12:00 AM' },
    { day: 'Sunday', open: '12:00 PM - 10:00 PM' }
  ]
};
