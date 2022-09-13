const router = require("express").Router();
const providers = require("../controllers/providers");

router.post("/create",  providers.create);
router.get("/", providers.getAll);
router.put("/update:id", providers.update);
router.put("/remove:id", providers.remove);
module.exports = router; 