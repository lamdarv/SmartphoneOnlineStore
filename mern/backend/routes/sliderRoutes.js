import express from 'express'
import Slider from '../models/sliderModel.js';

const sliderRouter = express.Router();

sliderRouter.get('/', async (req, res) => {
  const slider = await Slider.find();
  res.send(slider);
});

export default sliderRouter;