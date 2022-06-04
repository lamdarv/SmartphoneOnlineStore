import mongoose from "mongoose";

//Create table into DB
const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      isAdmin: { type: Boolean, default: false, required: true },
    },
    {
      timestamps: true, //add date
    }
  );
  
  const User = mongoose.model('User', userSchema);
  export default User;