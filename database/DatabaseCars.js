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
      productName: 'Mustang',
      productPrice: 122799,
      description:
        'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/products/c15.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/c16.png'),
        require('../database/images/products/c15.png'),
        require('../database/images/products/c17.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Mercedes',
      productPrice: 122499,
      description:
        'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
      isOff: false,
      productImage: require('../database/images/products/c20.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/c20.png'),
        require('../database/images/products/c10.png'),
        require('../database/images/products/c20.png'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'Mustang',
      productPrice: 192299,
      description:
        'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/products/c13.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/c13.png'),
        require('../database/images/products/c12.png'),
        require('../database/images/products/c14.png'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Mercedes',
      productPrice: 322299,
      description:
        'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
      isOff: false,
      productImage: require('../database/images/products/c5.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/c5.png'),
        require('../database/images/products/c5.png'),
        require('../database/images/products/c5.png'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Mercedes',
      productPrice: 122499,
      description:
        'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
      isOff: false,
      productImage: require('../database/images/products/c11.png'),
      isAvailable: false,
      productImageList: [
        require('../database/images/products/c11.png'),
        require('../database/images/products/c11.png'),
        require('../database/images/products/c11.png'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Porsche',
      productPrice: 122299,
      description:
        'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
      isOff: false,
      productImage: require('../database/images/products/c2.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/c2.png'),
        require('../database/images/products/c2.png'),
        require('../database/images/products/c2.png'),
      ],
    },
  ];
  