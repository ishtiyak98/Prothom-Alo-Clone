const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: [true, "news text is required"],
    },
    editor: {
      type: String,
      required: [true, "editor name is required"],
    },
    featureImg: {
      type: String,
      required: [true, "editor name is required"],
    },
    images: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
      required: [true, "minimum one tag is required"],
    },
    tags: {
      type: [String],
      required: [true, "minimum one tag is required"],
    },
    category: {
      type: [String],
      required: [true, "minimum one category is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("news", newsSchema);
