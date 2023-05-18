const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/").get(userController.getAllUsers).post(userController.addUser);

module.exports = router;
