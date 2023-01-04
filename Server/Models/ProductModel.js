import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:String, 
    link:String, 
    img:String, 
    price:String,
    rate:String
})

const productModel = mongoose.model('products' , productSchema)
export default productModel;