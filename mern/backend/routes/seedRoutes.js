import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import Category from '../models/categoryModel.js';
import Slider from '../models/sliderModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  await Category.remove({});
  const createdCategory = await Category.insertMany(data.category);

  await Slider.remove({});
  const createdSlider = await Slider.insertMany(data.sliderItems);

  await User.remove({});
  const createdUser = await User.insertMany(data.users);


  res.send({ createdProducts, createdCategory, createdSlider, createdUser });
});

export default seedRouter;