const router = require("express").Router();
const userController = require("../controllers/user.controller");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser)
  .put(userController.userToDB);
router.route("/:email").get(userController.findUser);

module.exports = router;
