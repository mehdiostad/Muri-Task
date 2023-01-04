import express from "express"
import { getAllProducts, saveProductsToDb } from "../Controllers/ProductController.js";

const router = express.Router();

router.post('/save' , saveProductsToDb)
router.get('/', getAllProducts)

export default router;