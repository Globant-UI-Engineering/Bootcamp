import express from "express";

import Product from "../models/product.js";

const router = express.Router();

router.get('/:category', async (req, res) => {
    const products = await Product.find({categories: req.params.category});
    res.json(products);
});

export default router;
