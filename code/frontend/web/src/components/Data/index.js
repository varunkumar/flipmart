const products = [
  {
    name: "Brown Shirt",
    description: "Brown T-Shirt for Women",
    price: 2400,
    gender: "women",
    imageUrl: "/images/img1.jpg",
    categoryId: 1
  },
  {
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 1000,
    gender: "women",
    imageUrl: "/images/img2.jpg",
    categoryId: 1
  },
  {
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 1800,
    gender: "women",
    imageUrl: "/images/img3.jpg",
    categoryId: 1
  },
  {
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 1350,
    gender: "women",
    imageUrl: "/images/img4.jpg",
    categoryId: 1
  },
  {
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 1000,
    gender: "women",
    imageUrl: "/images/img5.jpg",
    categoryId: 1
  },
  {
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 2200,
    gender: "women",
    imageUrl: "/images/img6.jpg",
    categoryId: 1
  },
  {
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 1000,
    gender: "women",
    imageUrl: "/images/img7.jpg",
    categoryId: 1
  },
  {
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 1350,
    gender: "women",
    imageUrl: "/images/img8.jpg",
    categoryId: 1
  },
  {
    name: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 3000,
    gender: "women",
    imageUrl: "/images/img10.jpg",
    categoryId: 1
  },
  {
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 1000,
    gender: "women",
    imageUrl: "/images/img9.jpg",
    categoryId: 1
  },
  {
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 6000,
    gender: "women",
    imageUrl: "/images/watch-wrist-watch-packshot-time-69046.jpeg",
    categoryId: 2
  },
  {
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 1350,
    gender: "women",
    imageUrl: "/images/pexels-photo-221550.jpeg",
    categoryId: 2
  },
  {
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 1300,
    gender: "men",
    imageUrl: "/images/464946525.jpg",
    categoryId: 1
  },
  {
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 1350,
    gender: "men",
    imageUrl: "/images/465207699.jpg",
    categoryId: 1
  },
  {
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 2000,
    gender: "men",
    imageUrl: "/images/465331977.jpg",
    categoryId: 1
  },
  {
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 1350,
    gender: "men",
    imageUrl: "/images/184616842.jpg",
    categoryId: 1
  },
  {
    name: "Man Blue Tie",
    description: "Blue Tie for Men",
    price: 800,
    gender: "men",
    imageUrl: '/images/pexels-photo-45055.jpeg',
    categoryId: 2
  },
  {
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 1200,
    gender: "men",
    imageUrl: "/images/520883622.jpg",
    categoryId: 1
  },
  {
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 2000,
    gender: "men",
    imageUrl: "/images/3035404_orig.png",
    categoryId: 2
  },
  {
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 1450,
    gender: "men",
    imageUrl: "/images/what_does_your_mans_tie_tell_about_his_personality_.jpg",
    categoryId: 2
  }, {
    name: "OnePlus Six",
    description: "The Speed You Need",
    price: 34500,
    imageUrl: "/images/op6.jpg",
    categoryId: 3
  }, {
    name: "Moto G6",
    description: "hello you",
    price: 20000,
    imageUrl: "/images/moto6.jpg",
    categoryId: 3
  }, {
    name: "Nokia 6.1",
    description: "Nokia 6.1 (2018) (4GB + 64GB, Blue-Gold)",
    price: 18999,
    imageUrl: "/images/nokia.jpg",
    categoryId: 3
  }, {
    name: "Realme 1",
    description: "Break boundaries, enjoy more",
    price: 13990,
    imageUrl: "/images/realme1.jpg",
    categoryId: 3
  }, {
    name: "Apple iPhone X",
    description: "Apple iPhone X (Space Grey, 64GB)",
    price: 85999,
    imageUrl: "/images/iphone.png",
    categoryId: 3
  }, {
    name: "Redmi 5",
    description: "Break boundaries, enjoy more",
    price: 8999,
    imageUrl: "/images/redmi.jpeg",
    categoryId: 3
  }, {
    name: "Pixel 2",
    description: "Google Pixel 2 Black",
    price: 45000,
    imageUrl: "/images/pixel.jpg",
    categoryId: 3
  }, {
    name: "Canon Eos 1300D",
    description: "18 MP DSLR Camera",
    price: 22990,
    imageUrl: "/images/canon1.jpg",
    categoryId: 3
  }, {
    name: "Nikon D5300",
    description: "Nikon Digital Camera",
    price: 38990,
    imageUrl: "/images/nikon2.jpg",
    categoryId: 3
  }, {
    name: "Nikon D3400",
    description: "Nikon Digital Camera",
    price: 35990,
    imageUrl: "/images/nikon1.jpg",
    categoryId: 3
  }, {
    name: "Sony Cyber-shot DSC-H300",
    description: "Sony Cyber-shot DSC-H300",
    price: 13990,
    imageUrl: "/images/sony.jpg",
    categoryId: 3
  }, {
    name: "Canon Eos 5D",
    description: "Mark IV 30.4 MP MP DSLR Camera",
    price: 249990,
    imageUrl: "/images/canon2.jpg",
    categoryId: 3
  }, {
    name: "DJI Mavic Pro",
    description: "DJI Mavic Pro with FlyMore",
    price: 95000,
    imageUrl: "/images/mavic.jpg",
    categoryId: 3
  }, {
    name: "DJI Tello Drone",
    description: "DJI Tello Drone",
    price: 13500,
    imageUrl: "/images/tello.jpg",
    categoryId: 3
  }, {
    name: "DJI Spark",
    description: "DJI Spark with FlyMore",
    price: 58490,
    imageUrl: "/images/spark.jpg",
    categoryId: 3
  },
];

export default products;
