const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addUser);
router.post("/login", userController.loginUser);

module.exports = router;
