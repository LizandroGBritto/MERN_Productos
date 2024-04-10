const express = require("express");

const ProductController = require("../controllers/product.controller");
const ProductRouter = express.Router();

ProductRouter.get("/", ProductController.getAllProducts);

ProductRouter.get("/:id", ProductController.getOneProduct);

ProductRouter.post("/new", ProductController.createProduct);

ProductRouter.put("/:id", ProductController.updateOneProductById);

ProductRouter.delete("/:id", ProductController.deleteOneProductById);

module.exports = ProductRouter;