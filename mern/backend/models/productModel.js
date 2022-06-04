import mongoose from "mongoose";

//Create table into DB
const productSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, unique: true },
      slug: { type: String, required: true, unique: true },
      OS: { type: String, required: true},
      CPU: { type: String, required: true},
      RAM: { type: String, required: true},
      Memori: { type: String, required: true},
      Dimensi: { type: String, required: true},
      Layar: { type: String, required: true},
      Kamera_utama: { type: String, required: true},
      Kamera_depan: { type: String, required: true},
      Baterai: { type: String, required: true},
      Warna: { type: String, required: true},
      category: { type: String, required: true },
      image: { type: String, required: true },
      image1: { type: String, required: true },
      image2: { type: String, required: true },
      image3: { type: String, required: true },
      countInStock: { type: Number, required: true },
      price: { type: Number, required: true },
    },
    {
      timestamps: true, //add date
    }
  );
  
  const Product = mongoose.model('Product', productSchema);

  //Samsung
  var product1 = new Product(
    { 
      title: "Samsung Galaxy M53 5G",
      slug: 'product1',
      OS: "OS: Android 12, One UI 4.1",
      CPU: "CPU: Octa-core (2x2.4 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)",
      RAM: "RAM: 8 GB",
      Memori: "Memori: 128 GB",
      Dimensi: "Dimensi: 164.7 x 77 x 7.4 mm (6.48 x 3.03 x 0.29 in), 176 g",
      Layar: "Layar: 6.7 inches, 1080 x 2408 pixels, 20:9 ratio",
      Kamera_utama: "Kamera utama: 108 MP (wide), 8 MP (ultrawide), 2 MP (macro), 2 MP (depth)",
      Kamera_depan: "Kamera depan: 32 MP, f/2.2, 26mm (wide)",
      Baterai: "Baterai: Li-Ion 5000 mAh",
      Warna: "Warna: Green, Blue, Brown",
      category: "Samsung",
      image: "/images/products/Samsung_Galaxy_M53_5G/Samsung_Galaxy_5G_1.png",
      image1: "/images/products/Samsung_Galaxy_M53_5G/Samsung_Galaxy_5G_2.png",
      image2: "/images/products/Samsung_Galaxy_M53_5G/Samsung_Galaxy_5G_3.png",
      image3: "/images/products/Samsung_Galaxy_M53_5G/Samsung_Galaxy_5G_4.png",
      countInStock: 1,
      price: "6399000", 
    }
  );
 
  // save model to database
  product1.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  var product2 = new Product(
    { 
      title: "Samsung Galaxy M52 5G",
      slug: 'product2',
      OS: "OS: Android 12, One UI 4.1",
      CPU: "CPU: Octa-core (4x2.4 GHz Kryo 670 & 4x1.8 GHz Kryo 670)",
      RAM: "RAM: 8 GB",
      Memori: "Memori: 128 GB",
      Dimensi: "Dimensi: 164.2 x 76.4 x 7.4 mm (6.46 x 3.01 x 0.29 in), 173 g",
      Layar: "Layar: 6.7 inches, 1080 x 2400 pixels, 20:9 ratio",
      Kamera_utama: "Kamera utama: 64 MP (wide), 12 MP (ultrawide), 5 MP (macro)",
      Kamera_depan: "Kamera depan: 32 MP, f/2.2, (wide)",
      Baterai: "Baterai: Li-Ion 5000 mAh",
      Warna: "Warna: Icy Blue, Blazing Black, White",      
      category: "Samsung",
      image: "/images/products/Samsung_Galaxy_M52_5G/Samsung_Galaxy_M52_5G_1.jpg",
      image1: "/images/products/Samsung_Galaxy_M52_5G/Samsung_Galaxy_M52_5G_2.jpg",
      image2: "/images/products/Samsung_Galaxy_M52_5G/Samsung_Galaxy_M52_5G_3.jpg",
      image3: "/images/products/Samsung_Galaxy_M52_5G/Samsung_Galaxy_M52_5G_4.jpg",
      countInStock: 5,
      price: "5490000", 
    }
  );
 
  // save model to database
  product2.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  }); 

  //Apple
  var product3 = new Product(
    { 
      title: "Apple iPhone SE",
      slug: 'product3',
      OS: "OS: iOS 15.4",
      CPU: "CPU: Hexa-core (2xX.XX GHz Avalanche + 4xX.XX GHz Blizzard)",
      RAM: "RAM: 4 GB",
      Memori: "Memori: 128 GB",
      Dimensi: "Dimensi: 138.4 x 67.3 x 7.3 mm (5.45 x 2.65 x 0.29 in), 144 g",
      Layar: "Layar: 4.7 inches, 750 x 1334 pixels, 16:9 ratio",
      Kamera_utama: "Kamera utama: 12 MP (wide)",
      Kamera_depan: "Kamera depan: 7 MP, f/2.2",
      Baterai: "Baterai: Li-Ion 2018 mAh",
      Warna: "Warna: Black, White, Red",        
      category: "Apple",
      image: "/images/products/Iphone_SE/Iphone_SE_1.jpg",
      image1: "/images/products/Iphone_SE/Iphone_SE_2.jpg",
      image2: "/images/products/Iphone_SE/Iphone_SE_3.jpg",
      image3: "/images/products/Iphone_SE/Iphone_SE_4.jpg",
      countInStock: 5,
      price: "7399000", 
    }
  );
 
  // save model to database
  product3.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  var product4 = new Product(
    { 
      title: "Apple iPhone XR",
      slug: 'product4',
      OS: "OS: iOS 12, upgradable to iOS 15.4.1",
      CPU: "CPU: Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)",
      RAM: "RAM: 3 GB",
      Memori: "Memori: 64 GB",
      Dimensi: "Dimensi: 150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in), 194 g",
      Layar: "Layar: 6.1 inches, 828 x 1792 pixels, 19.5:9 ratio",
      Kamera_utama: "Kamera utama: 12 MP (wide)",
      Kamera_depan: "Kamera depan: 7 MP, f/2.2",
      Baterai: "Baterai: Li-Ion 2942 mAh",
      Warna: "Warna: Black, Red, Yellow, Blue, Coral, White",
      category: "Apple",
      image: "/images/products/Iphone_XR/Iphone_XR_1.jpg",
      image1: "/images/products/Iphone_XR/Iphone_XR_2.jpg",
      image2: "/images/products/Iphone_XR/Iphone_XR_3.jpg",
      image3: "/images/products/Iphone_XR/Iphone_XR_4.jpg",
      countInStock: 5,
      price: "7599000", 
    }
  );
 
  // save model to database
  product4.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  //Oppo
  var product5 = new Product(
    { 
      title: "Oppo Find X3 Pro",
      slug: 'product5',
      OS: "OS: Android 11, upgradable to Android 12, ColorOS 12",
      CPU: "CPU: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
      RAM: "RAM: 12 GB",
      Memori: "Memori: 256 GB",
      Dimensi: "Dimensi: 163.6 x 74 x 8.3 mm (6.44 x 2.91 x 0.33 in), 193 g",
      Layar: "Layar: 6.7 inches, 1440 x 3216 pixels, 20:9 ratio",
      Kamera_utama: "Kamera utama: 50 MP (wide), 13 MP (telephoto), 50 (ultrawide), 3 MP (microscope)",
      Kamera_depan: "Kamera depan: 32 MP, f/2.4",
      Baterai: "Baterai: Li-Po 4500 mAh",
      Warna: "Warna: Gloss Black, Blue, White, Cosmic Mocha, Mars Edition, Photographer Edition",
      category: "Oppo",
      image: "/images/products/Oppo_Find_X3_Pro/Oppo_Find_X3_Pro_1.jpg",
      image1: "/images/products/Oppo_Find_X3_Pro/Oppo_Find_X3_Pro_2.jpg",
      image2: "/images/products/Oppo_Find_X3_Pro/Oppo_Find_X3_Pro_3.jpg",
      image3: "/images/products/Oppo_Find_X3_Pro/Oppo_Find_X3_Pro_4.jpg",
      countInStock: 5,
      price: "16099000", 
    }
  );
 
  // save model to database
  product5.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  var product6 = new Product(
    { 
      title: "Oppo A16e",
      slug: 'product6',
      OS: "OS: Android 11, upgradable to Android 12, ColorOS 12",
      CPU: "CPU: Octa-core (1x3.0 GHz Cortex-A78 & 3x2.6 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
      RAM: "RAM: 3 GB",
      Memori: "Memori: 32 GB",
      Dimensi: "Dimensi: 160 x 73.1 x 7.6 mm (6.30 x 2.88 x 0.30 in), 177 g",
      Layar: "Layar: 6.55 inches, 1080 x 2400 pixels, 20:9 ratio",
      Kamera_utama: "Kamera utama: 64 MP (wide), 8 MP (ultrawide), 2 MP (macro), 2 MP (depth)",
      Kamera_depan: "Kamera depan: 32 MP, f/2.4",
      Baterai: "Baterai: Li-Po 4500 mAh",
      Warna: "Warna: Black, Blue, Aurora",
      category: "Oppo",
      image: "/images/products/Oppo_A16e/Oppo_A16e_1.jpg",
      image1: "/images/products/Oppo_A16e/Oppo_A16e_2.jpg",
      image2: "/images/products/Oppo_A16e/Oppo_A16e_3.jpg",
      image3: "/images/products/Oppo_A16e/Oppo_A16e_4.jpg",
      countInStock: 5,
      price: "16099000", 
    }
  );
 
  // save model to database
  product6.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  //Vivo
  var product7 = new Product(
    { 
      title: "Vivo T1 5G",
      slug: 'product7',
      OS: "OS: Android 11, Funtouch 12",
      CPU: "CPU: Octa-core (2x2.2 GHz Kryo 660 Gold & 6x1.7 GHz Kryo 660 Silver)",
      RAM: "RAM: 8 GB",
      Memori: "Memori: 128 GB",
      Dimensi: "Dimensi: 164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in), 187 g",
      Layar: "Layar: 6.58 inches, 1080 x 2408 pixels, 20:9 ratio",
      Kamera_utama: "Kamera utama: 50 MP (wide), 2 MP (macro), 2 MP (depth)",
      Kamera_depan: "Kamera depan: 16 MP, f/2.0",
      Baterai: "Baterai: Li-Po 5000 mAh",
      Warna: "Warna: Starlight Black, Rainbow Fantasy",
      category: "Vivo",
      image: "/images/products/Vivo_T1_5G/Vivo_T1_5G_1.jpg",
      image1: "/images/products/Vivo_T1_5G/Vivo_T1_5G_2.jpg",
      image2: "/images/products/Vivo_T1_5G/Vivo_T1_5G_3.jpg",
      image3: "/images/products/Vivo_T1_5G/Vivo_T1_5G_4.jpg",
      countInStock: 5,
      price: "3499000", 
    }
  );
 
  // save model to database
  product7.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  var product8 = new Product(
    { 
      title: "Vivo V15",
      slug: 'product8',
      OS: "OS: Android 9.0 (Pie), Funtouch 9",
      CPU: "CPU: Octa-core (4x2.1 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53)",
      RAM: "RAM: 6 GB",
      Memori: "Memori: 64 GB",
      Dimensi: "Dimensi: 161.2 x 75.9 x 8.5 mm (6.35 x 2.99 x 0.33 in), 189.5 g",
      Layar: "Layar: 6.53 inches, 1080 x 2340 pixels, 19.5:9 ratio",
      Kamera_utama: "Kamera utama: 24 MP (wide), 8 MP (ultrawide), 5 MP (depth)",
      Kamera_depan: "Kamera depan: 32 MP, f/2.0",
      Baterai: "Baterai: Li-Po 4000 mAh",
      Warna: "Warna: Topaz Blue, Glamour Red, Frozen Black, Royal Blue",
      category: "Vivo",
      image: "/images/products/Vivo_V15/Vivo_V15_1.jpg",
      image1: "/images/products/Vivo_V15/Vivo_V15_2.jpg",
      image2: "/images/products/Vivo_V15/Vivo_V15_3.jpg",
      image3: "/images/products/Vivo_V15/Vivo_V15_4.jpg",
      countInStock: 5,
      price: "3499000", 
    }
  );
 
  // save model to database
  product8.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to products collection.");
  });

  export default Product;