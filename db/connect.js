import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDB = (url) =>{  //returns a promise therefore in the server we're gonna use async
    return mongoose.connect(url)
}
export default connectDB