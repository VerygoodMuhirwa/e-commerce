const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addUser);
router.get("/",userController.getUser);
router.get("/user/:id", userController.loginUser);
