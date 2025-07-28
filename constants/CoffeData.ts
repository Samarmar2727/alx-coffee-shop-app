import { CoffeeItem } from '../types';

export const coffeeData: CoffeeItem[] = [
  {
    id: '1',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: '$4.53',
    rating: 4.8,
    image: require('../assets/images/coffe1.png'),
    description: 'A rich and creamy blend of espresso, steamed milk, and chocolate, topped with whipped cream. Perfect for chocolate lovers.',
  },
  {
    id: '2',
    name: 'Flat White',
    type: 'Espresso',
    price: '$3.53',
    rating: 4.8,
    image: require('../assets/images/coffe2.png'),
    description: 'Smooth and velvety, this espresso-based drink is made with steamed milk and a thin layer of microfoam for a balanced taste.',
  },
  {
    id: '3',
    name: 'Latte',
    type: 'Espresso',
    price: '$5.53',
    rating: 4.8,
    image: require('../assets/images/coffe3.png'),
    description: 'A classic espresso drink with a generous amount of steamed milk and a light layer of foam. Ideal for those who enjoy a mellow coffee.',
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    type: 'Milk Based',
    price: '$4.25',
    rating: 4.7,
    image: require('../assets/images/coffe4.png'),
    description: 'Espresso layered with steamed milk and topped with a rich caramel drizzle. A sweet treat for caramel lovers.',
  },
  {
    id: '5',
    name: 'Cold Brew',
    type: 'Cold',
    price: '$3.75',
    rating: 4.6,
    image: require('../assets/images/coffe5.png'),
    description: 'Brewed slowly with cold water for a smooth, bold flavor. Served chilled and refreshing – perfect for hot days.',
  },
];
