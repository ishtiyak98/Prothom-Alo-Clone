const router = require("express").Router();
const newsController = require("../controllers/news.controller");

router.route("/").get(newsController.getNews).post(newsController.addNews);

module.exports = router;
