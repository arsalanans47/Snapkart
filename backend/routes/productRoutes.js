import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
} from "../controllers/productController.js";

router.route("/").get(getProducts); // Fetch all products
router.route("/:id").get(getProductsById); // Fetch a product by ID

export default router;
