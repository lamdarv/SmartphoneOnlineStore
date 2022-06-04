import express from 'express'
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

export default categoryRouter;