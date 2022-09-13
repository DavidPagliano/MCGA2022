const router = require("express").Router();
const products = require("../controllers/products");

router.get("/", products.getAll);
router.post("/create", products.create);
router.put("/update:id", products.update);
router.put("/remove:id", products.remove);
module.exports = router;