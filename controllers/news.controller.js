const News = require("../model/newsModel");

//!----------- GET News -----------
module.exports.getNews = async (req, res) => {
  try {
    // const newNews = new News(req.body);
    // const result = await newNews.save();
    res.status(200).json({
      success: true,
      message: "get News",
      data: "",
    });


  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//!----------- POST a New News -----------
module.exports.addNews = async (req, res) => {
  try {
    const newNews = new News(req.body);
    const result = await newNews.save();
    res.status(200).json({
      success: true,
      message: "news created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
