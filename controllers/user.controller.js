const User = require("../model/userModel");

//!----------- GET All Users -----------
module.exports.getAllUsers = async (req, res) => {
  try {
    // const newNews = new News(req.body);
    // const result = await newNews.save();
    res.status(200).json({
      success: true,
      message: "get all users",
      data: "",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//!----------- POST a New User -----------
module.exports.addUser = async (req, res) => {
  try {
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      res.status(406).json({
        success: false,
        message: "email already exist",
      });
    } else {
      const newUser = new User(req.body);
      const result = await newUser.save();
      res.status(200).json({
        success: true,
        message: "user added successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
