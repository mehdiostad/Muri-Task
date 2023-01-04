import bodyParser from "body-parser";
import express from "express"
import mongoose from "mongoose"
import productRoute from './Routes/ProductRoute.js'
import cors from "cors"

//create an express server;
const app = express()
const PORT = 8000;

//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//connect server to mongodb
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/Muri", { useNewUrlParser: true, useUnifiedTopology: true }).then(
   
    app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
   
);


//routes
app.use('/products', productRoute)
