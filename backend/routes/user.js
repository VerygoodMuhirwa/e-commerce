const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addUser);
router.post("/login", userController.loginUser);
router.get("/user/:id", userController.getOneUser);
router.put("/user/update/image/:id", userController.updateImage);

module.exports = router;
