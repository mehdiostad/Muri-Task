import axios from "axios";
import cheerio from "cheerio";
import productModel from "../Models/ProductModel.js";

export const saveProductsToDb = (req, res) => {
  const products = [];

// send a http request to the target website to crawl
  axios("https://www.digistyle.com/category-women-clothing/").then((res) => {
    const html = res.data; //get the html of target website
    const $ = cheerio.load(html); //parse html with cheerio
    //get properties with cheerio
    $(".c-product-grid .cp-card").each(function () {
      const img = $(this)
        .find(".c-product-card__image-container img")
        .attr("src");
      const link = $(this)
        .find(".c-product-card__image-container")
        .attr("href");
      const title = $(this).find(".c-product-card__title-row a").text().trim();
      const rate = $(this)
        .find(".c-product-card__title-row span")
        .text()
        .trim();
      const price = $(this)
        .find(".c-product-card__price .c-product-card__selling-price")
        .text()
        .trim();
      //push objects to an array
      products.push({
        img,
        link,
        title,
        rate,
        price,
      });
    });
    //insert array objects to database
    products.forEach(async (product) => {
      const newProduct = new productModel(product);
      await newProduct.save();
    });
});
res.status(200).json("products added to database successfully!");
};

//get all products from database

export const getAllProducts = async (req , res) => {
try {
  let products = await productModel.find();
  res.status(200).json(products)
} catch (error) {
  res.status(500).json({message: error.message})
}
}
