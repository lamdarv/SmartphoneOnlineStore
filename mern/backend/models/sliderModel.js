import mongoose from "mongoose";

//Create table into DB
const sliderSchema = new mongoose.Schema(
    {
      image: { type: String, required: true },
    },
    {
      timestamps: true, //add date
    }
  );
  
  const Slider = mongoose.model('Slider', sliderSchema);

  var slider1 = new Slider({ image: "/images/slider/1.jpg" });
 
  // save model to database
  slider1.save(function (err, slider) {
    if (err) return console.error(err);
    console.log(slider.name + " saved to slider collection.");
  });

  var slider2 = new Slider({ image: "/images/slider/2.jpg" });
 
  // save model to database
  slider2.save(function (err, slider) {
    if (err) return console.error(err);
    console.log(slider.name + " saved to slider collection.");
  });

  var slider3 = new Slider({ image: "/images/slider/3.jpg" });
 
  // save model to database
  slider3.save(function (err, slider) {
    if (err) return console.error(err);
    console.log(slider.name + " saved to slider collection.");
  });

  export default Slider;