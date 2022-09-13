const express = require("express");

const router = express.Router();
const productsRoutes = require("./products");
const providersRoutes = require("./providers");

router.use("/api/products", productsRoutes);
router.use("/api/providers", providersRoutes);

module.exports = router;