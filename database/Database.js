export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Ferrari - Jacket',
    productPrice: 1799,
    description:
      'Experience the thrill of speed and luxury with this sleek Ferrari jacket. ' +
      'Crafted for both style and performance, it offers a dynamic blend of comfort and sophistication.',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/f10.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/f10.png'),
      require('../database/images/products/f6.png'),
      require('../database/images/products/f8.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'Redbull - Jacket',
    productPrice: 1499,
    description:
      'Embrace the spirit of adventure with the Redbull jacket. Designed for the bold and adventurous, ' +
      'it provides the perfect blend of style and functionality for your active lifestyle.',
    isOff: false,
    productImage: require('../database/images/products/r1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/r1.png'),
      require('../database/images/products/r3.png'),
      require('../database/images/products/f7.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'Ferrari - Jacket',
    productPrice: 1999,
    description:
      'Elevate your style with the iconic Ferrari jacket. Featuring cutting-edge Bluetooth technology and ' +
      'premium craftsmanship, it offers unparalleled convenience and sophistication.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/products/f1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/f1.png'),
      require('../database/images/products/f3.png'),
      require('../database/images/products/f4.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'Marlboro - Jacket',
    productPrice: 399,
    description:
      'Ignite your passion for style with the Marlboro jacket. Crafted with precision and attention to detail, ' +
      'it exudes confidence and elegance with every wear.',
    isOff: false,
    productImage: require('../database/images/products/f9.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/f9.png'),
      require('../database/images/products/f9.png'),
      require('../database/images/products/f9.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'JackDaniels - Jacket',
    productPrice: 1499,
    description:
      'Make a statement with the JackDaniels jacket. Inspired by the timeless appeal of the iconic brand, ' +
      'it captures the essence of authenticity and craftsmanship.',
    isOff: false,
    productImage: require('../database/images/products/f5.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/products/f5.png'),
      require('../database/images/products/f5.png'),
      require('../database/images/products/f5.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Mercedes- Jacket',
    productPrice: 1299,
    description:
      'Experience luxury redefined with the Mercedes jacket. Designed for the discerning individual, ' +
      'it combines effortless style with unparalleled performance for a truly exceptional experience.',
    isOff: false,
    productImage: require('../database/images/products/j11.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/j11.png'),
      require('../database/images/products/j11.png'),
      require('../database/images/products/j11.png'),
    ],
  },
];
