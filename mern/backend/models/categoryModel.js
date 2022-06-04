import mongoose from "mongoose";

//Create table into DB
const categorySchema = new mongoose.Schema(
    {
      title: { type: String, required: true, unique: true },
      image: { type: String, required: true },
    },
    {
      timestamps: true, //add date
    }
  );
  
  const Category = mongoose.model('Category', categorySchema);

  var category1 = new Category({ title: "Apple", image: "/images/merk/iphone.png" });
 
  // save model to database
  category1.save(function (err, category) {
    if (err) return console.error(err);
    console.log(category.name + " saved to category collection.");
  });

  var category2 = new Category({ title: "Oppo", image: "/images/merk/oppo.png" });
 
  // save model to database
  category2.save(function (err, category) {
    if (err) return console.error(err);
    console.log(category.name + " saved to category collection.");
  });

  var category3 = new Category({ title: "Samsung", image: "/images/merk/samsung.png" });
 
  // save model to database
  category3.save(function (err, category) {
    if (err) return console.error(err);
    console.log(category.name + " saved to category collection.");
  });

  var category4 = new Category({ title: "Vivo", image: "/images/merk/vivo.png" });
 
  // save model to database
  category4.save(function (err, category) {
    if (err) return console.error(err);
    console.log(category.name + " saved to category collection.");
  });

  export default Category;