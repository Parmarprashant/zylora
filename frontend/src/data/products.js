export const products = [
  {
    id: 1,
    name: "Samsung Galaxy M34 5G (Prism Blue, 128 GB)",
    brand: "Samsung",
    category: "Mobiles",
    rating: 4.5,
    reviewsCount: 12400,
    totalReviews: 1200,
    price: 18999,
    oldPrice: 24999,
    discount: "24% OFF",
    stockStatus: "In Stock & Ready to Ship",
    deliveryInfo: "Tomorrow, 11 AM",
    pincode: "400001",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Prism Blue", class: "bg-blue-900" },
      { name: "Midnight Black", class: "bg-gray-900" },
      { name: "Waterfall Blue", class: "bg-teal-700" }
    ],
    storageOptions: ["6GB / 128GB", "8GB / 128GB"],
    bulkDeals: [
      { range: "1 - 11 Units", price: "₹18,999", savings: "Retail" },
      { range: "12 - 49 Units", price: "₹17,859", savings: "6% OFF", highlight: true },
      { range: "50 - 99 Units", price: "₹17,100", savings: "10% OFF" },
      { range: "100+ Units", price: "Negotiable", savings: "VIP Link" }
    ],
    description: "The Samsung Galaxy M34 5G features a stunning 6.5-inch Super AMOLED display with a 120Hz refresh rate, bringing every frame to life with vibrant colors and fluid motion. Whether you're streaming professional agriculture training videos or managing your auction listings, the Vision Booster ensures visibility even under direct sunlight.",
    features: [
      {
        title: "Monster 6000mAh Battery",
        desc: "Go up to 2 days on a single charge. Perfect for field operations and long negotiation cycles."
      },
      {
        title: "50MP No Shake Cam",
        desc: "Capture crystal clear inventory photos even in low light with OIS technology."
      }
    ],
    specs: [
      { label: "Network", value: "5G (21 Bands Support)" },
      { label: "Processor", value: "Exynos 1280 Octa-Core 2.4GHz" },
      { label: "Camera", value: "50MP + 8MP + 2MP | 13MP Front" },
      { label: "Display", value: "16.42cm (6.5\") Super AMOLED" }
    ],
    seller: {
      name: "ZyLora Enterprises",
      initials: "ZE",
      isCertified: true,
      platformRating: 4.8
    },
    frequentlyBought: [
      { id: 101, name: "Galaxy Buds2 Pro", price: "₹8,999", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=200" },
      { id: 102, name: "25W Fast Charger", price: "₹1,299", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400" }
    ],
    similarModels: [
      { id: 4, name: "Redmi Note 13 Pro", price: "23,999", discount: "17% OFF", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400" },
      { id: 2, name: "Apple iPhone 15", price: "69,999", discount: "12% OFF", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: 2,
    name: "Apple iPhone 15 (Blue, 128 GB)",
    brand: "Apple",
    category: "Mobiles",
    rating: 4.8,
    reviewsCount: 45000,
    totalReviews: 5200,
    price: 69999,
    oldPrice: 79900,
    discount: "12% OFF",
    stockStatus: "In Stock",
    deliveryInfo: "Delivery by 7 PM today",
    pincode: "400001",
    images: [
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1696446701510-c17205d0f4d3?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Blue", class: "bg-blue-200" },
      { name: "Black", class: "bg-black" },
      { name: "Pink", class: "bg-pink-200" }
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    bulkDeals: [
      { range: "1 - 5 Units", price: "₹69,999", savings: "Retail" },
      { range: "6 - 20 Units", price: "₹67,500", savings: "4% OFF", highlight: true },
      { range: "21+ Units", price: "Negotiable", savings: "VIP" }
    ],
    description: "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.",
    features: [
      { title: "48MP Main Camera", desc: "For super-high-resolution photos." },
      { title: "A16 Bionic chip", desc: "The powerhouse behind advanced features." }
    ],
    specs: [
      { label: "Processor", value: "A16 Bionic Chip" },
      { label: "Camera", value: "48MP + 12MP | 12MP Front" },
      { label: "Display", value: "15.5 cm (6.1 inch) Super Retina XDR" }
    ],
    seller: {
      name: "Apple Store India",
      initials: "AS",
      isCertified: true,
      platformRating: 5.0
    },
    frequentlyBought: [
      { id: 201, name: "Apple MagSafe Case", price: "₹4,900", img: "https://images.unsplash.com/photo-1603313011101-31c23a4a5b2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similarModels: [
      { id: 1, name: "Samsung Galaxy M34 5G", price: "18,999", discount: "24% OFF", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: 11,
    name: "Wireless Bluetooth Headphones",
    brand: "Electronics",
    category: "Electronics",
    rating: 4.7,
    reviewsCount: 230,
    totalReviews: 45,
    price: 6639,
    oldPrice: 7999,
    discount: "17% OFF",
    stockStatus: "Available",
    deliveryInfo: "2-3 business days",
    pincode: "400001",
    images: ["https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/wireless-headphones.jpg"],
    colors: [{ name: "Black", class: "bg-black" }],
    storageOptions: ["One Size"],
    bulkDeals: [
      { range: "1-5 Units", price: "₹6,639", savings: "Retail" },
      { range: "6-20 Units", price: "₹5,975", savings: "10% OFF", highlight: true }
    ],
    description: "Experience superior sound quality with these wireless Bluetooth headphones, designed for comfort and portability for everyday use.",
    features: [
      { title: "Bluetooth 5.0", desc: "Stable and fast connection." },
      { title: "Long Battery Life", desc: "Up to 20 hours of playback." }
    ],
    specs: [
      { label: "Type", value: "Over-Ear" },
      { label: "Connectivity", value: "Bluetooth" }
    ],
    seller: { name: "Audio Hub", initials: "AH", isCertified: true, platformRating: 4.6 },
    frequentlyBought: [],
    similarModels: []
  },
  {
    id: 21,
    name: "Men's Denim Jacket",
    brand: "Fashion",
    category: "Fashion",
    rating: 4.5,
    reviewsCount: 150,
    totalReviews: 30,
    price: 2905,
    oldPrice: 3500,
    discount: "17% OFF",
    stockStatus: "In Stock",
    deliveryInfo: "Ships tomorrow",
    pincode: "400001",
    images: ["https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/denim-jacket.jpg"],
    colors: [{ name: "Denim Blue", class: "bg-blue-800" }],
    storageOptions: ["S", "M", "L", "XL"],
    bulkDeals: [
      { range: "1-10 Units", price: "₹2,905", savings: "Retail" },
      { range: "11-50 Units", price: "₹2,615", savings: "10% OFF", highlight: true }
    ],
    description: "This stylish Men's Denim Jacket is perfect for any casual occasion. Crafted from high-quality denim, it features a classic fit.",
    features: [
      { title: "High-Quality Denim", desc: "Durable and comfortable fabric." },
      { title: "Classic Fit", desc: "Timeless design for various outfits." }
    ],
    specs: [
      { label: "Material", value: "Denim" },
      { label: "Closure", value: "Button" }
    ],
    seller: { name: "Fashion Outlet", initials: "FO", isCertified: true, platformRating: 4.4 },
    frequentlyBought: [],
    similarModels: []
  },
  {
    id: 31,
    name: "Modern Leather Sofa",
    brand: "Home",
    category: "Home",
    rating: 4.8,
    reviewsCount: 220,
    totalReviews: 40,
    price: 99600,
    oldPrice: 120000,
    discount: "17% OFF",
    stockStatus: "Available",
    deliveryInfo: "Delivery in 7-10 days",
    pincode: "400001",
    images: ["https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/sofa.jpg"],
    colors: [{ name: "Brown", class: "bg-amber-900" }],
    storageOptions: ["3-Seater"],
    bulkDeals: [
      { range: "1-2 Units", price: "₹99,600", savings: "Retail" },
      { range: "3+ Units", price: "₹89,640", savings: "10% OFF", highlight: true }
    ],
    description: "A stylish modern leather sofa that enhances the elegance of your living room while providing utmost comfort.",
    features: [
      { title: "Premium Leather", desc: "Soft and durable top-grain leather." },
      { title: "Solid Wood Frame", desc: "Ensures long-lasting durability." }
    ],
    specs: [
      { label: "Material", value: "Leather" },
      { label: "Seating Capacity", value: "3" }
    ],
    seller: { name: "Home Furniture Co.", initials: "HF", isCertified: true, platformRating: 4.7 },
    frequentlyBought: [],
    similarModels: []
  },
  {
    id: 41,
    name: "Foldable Electric Treadmill",
    brand: "Fitness",
    category: "Health",
    rating: 4.7,
    reviewsCount: 320,
    totalReviews: 60,
    price: 290500,
    oldPrice: 350000,
    discount: "17% OFF",
    stockStatus: "In Stock",
    deliveryInfo: "Delivery in 5 days",
    pincode: "400001",
    images: ["https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/treadmill.jpg"],
    colors: [{ name: "Black", class: "bg-black" }],
    storageOptions: ["Standard"],
    bulkDeals: [
      { range: "1-5 Units", price: "₹290,500", savings: "Retail" },
      { range: "6+ Units", price: "₹261,450", savings: "10% OFF", highlight: true }
    ],
    description: "This Foldable Electric Treadmill offers a convenient way to maintain fitness at home. Compact design perfect for home gyms.",
    features: [
      { title: "Foldable Design", desc: "Saves space when not in use." },
      { title: "Digital Display", desc: "Tracks speed, time, and calories." }
    ],
    specs: [
      { label: "Motor", value: "2.5 HP" },
      { label: "Max Speed", value: "16 km/h" }
    ],
    seller: { name: "Fit Gear", initials: "FG", isCertified: true, platformRating: 4.8 },
    frequentlyBought: [],
    similarModels: []
  },
  {
    id: 3,
    name: "boAt Airdopes 131 Wireless Earbuds",
    brand: "boAt",
    category: "Electronics",
    rating: 4.2,
    reviewsCount: 85000,
    totalReviews: 12000,
    price: 1299,
    oldPrice: 2999,
    discount: "56% OFF",
    stockStatus: "Fast Selling",
    deliveryInfo: "Delivery in 2 Days",
    pincode: "400001",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Active Black", class: "bg-gray-800" },
      { name: "Cherry Blossom", class: "bg-pink-300" }
    ],
    storageOptions: ["Standard"],
    bulkDeals: [
      { range: "1 - 50 Units", price: "₹1,299", savings: "Retail" },
      { range: "51 - 200 Units", price: "₹1,150", savings: "12% OFF", highlight: true },
      { range: "201+ Units", price: "Negotiable", savings: "Bulk Link" }
    ],
    description: "Sleek, lightweight, and powerful. The boAt Airdopes 131 offers non-stop music for 12 hours with Type-C charging and IWP technology.",
    features: [
      { title: "IWP Technology", desc: "Instant Wake 'N' Pair as soon as you open the case." },
      { title: "Type-C Charging", desc: "Universal and fast charging support." }
    ],
    specs: [
      { label: "Bluetooth", value: "V5.0" },
      { label: "Battery", value: "Up to 12 Hours" },
      { label: "Driver", value: "13mm Drivers" }
    ],
    seller: {
      name: "boAt Lifestyle",
      initials: "BL",
      isCertified: true,
      platformRating: 4.5
    },
    frequentlyBought: [],
    similarModels: []
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro (Fusion White, 256 GB)",
    brand: "Redmi",
    category: "Mobiles",
    rating: 4.4,
    reviewsCount: 25000,
    totalReviews: 3200,
    price: 23999,
    oldPrice: 28999,
    discount: "17% OFF",
    stockStatus: "Limited Stock",
    deliveryInfo: "Delivery by Monday",
    pincode: "400001",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    colors: [
      { name: "Fusion White", class: "bg-gray-50" },
      { name: "Stealth Black", class: "bg-gray-900" }
    ],
    storageOptions: ["8GB / 256GB", "12GB / 256GB"],
    bulkDeals: [
      { range: "1 - 10 Units", price: "₹23,999", savings: "Retail" },
      { range: "11 - 50 Units", price: "₹22,500", savings: "6% OFF", highlight: true },
      { range: "51+ Units", price: "Negotiable", savings: "VIP" }
    ],
    description: "The Redmi Note 13 Pro features a 200MP camera with OIS and a 1.5K AMOLED curved display, setting a new benchmark for mid-range flagships.",
    features: [
      { title: "200MP Camera", desc: "Ultra-high resolution camera with OIS." },
      { title: "120W HyperCharge", desc: "Charge to 100% in just 19 minutes." }
    ],
    specs: [
      { label: "Processor", value: "Snapdragon 7s Gen 2" },
      { label: "Camera", value: "200MP + 8MP + 2MP | 16MP Front" },
      { label: "Display", value: "6.67 inch 1.5K AMOLED" }
    ],
    seller: {
      name: "Mi Retail India",
      initials: "MI",
      isCertified: true,
      platformRating: 4.7
    },
    frequentlyBought: [],
    similarModels: [
      { id: 1, name: "Samsung Galaxy M34 5G", price: "18,999", discount: "24% OFF", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];
