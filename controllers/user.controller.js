const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

//!----------- GET All Users -----------
module.exports.getAllUsers = async (req, res) => {
  try {
    // const newNews = new News(req.body);
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "get all users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//!----------- GET User by Email -----------
module.exports.findUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(200).json({
        success: false,
        message: "user data fetched successfully",
        data: user,
      });
    } else {
      res.status(400).json({
        success: true,
        message: "user doesn't exist",
      });
    }
  } catch (error) {}
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
      const token = jwt.sign(
        { email: result.email, id: result._id },
        process.env.TOKEN_SECRET
      );

      res.status(200).json({
        success: true,
        message: "user added successfully",
        data: { result, token },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//!-------- Login DB check ---------
module.exports.userToDB = async (req, res) => {
  try {
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      const token = jwt.sign(
        { email: result.email, id: result._id },
        process.env.TOKEN_SECRET
      );
      res.status(200).json({
        success: true,
        message: "user added successfully",
        data: { existingEmail, token },
      });
    }
  } catch (error) {}
};

//!-------- Google Login DB check ---------
module.exports.userToDB = async (req, res) => {
  try {
    const user = req.body;
    const result = await User.findOneAndUpdate(
      { email: req.body.email },
      { email: user.email, name: user.name },
      {
        new: true,
        upsert: true,
      }
    );

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.TOKEN_SECRET
    );

    res.status(200).json({
      success: true,
      message: "Google user added successfully",
      data: { result, token },
    });
  } catch (error) {}
};


//!-------- EDIT User Profile ---------
// module.exports.editUserInfo = async (req, res) => {
//   try {
//     const result = await User.findOneAndUpdate(
//       { email: req.body.email },
//       { email: user.email, name: user.name },
//       {
//         new: true,
//         upsert: true,
//       }
//     );
//   } catch (error) {}
// };