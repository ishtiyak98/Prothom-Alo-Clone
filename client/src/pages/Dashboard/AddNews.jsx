import React, { useState } from "react";
import "../../styles/Dashboard/AddNews.scss";
import { BsImage } from "react-icons/bs";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    images: [],
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesError, setImagesError] = useState("");

  const onSelectFiles = (e) => {
    const imageList = Array.from(e.target.files);
    if (imageList.length > 4) {
      setImagesError("More than 4 image is not allowed!");
    } else {
      setImagesError("");
      setFormData({ ...formData, images: imageList });
      const imageArray = imageList.map((item) => {
        return URL.createObjectURL(item);
      });
      setSelectedImages(imageArray);
      console.log(imageArray);
    }
  };

  console.log(formData);

  return (
    <section className="add-news-container">
      <h2 className="heading-text">Add A Article</h2>
      <div>
        <form action="" className="form-container">
          <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-4 lg:space-y-0">
            <div className="w-full">
              <input
                type="text"
                placeholder="Title"
                name="email"
                id="email"
                className="input-field"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Sub-Title"
                name="email"
                id="email"
                className="input-field"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-4 lg:space-y-0">
            <div className="images-selection-input">
              <label htmlFor="images">
                <div className="text-center space-y-4">
                  <p>Add Images Not more than 4 images</p>
                  {selectedImages.length === 0 && (
                    <BsImage className="mx-auto text-4xl"></BsImage>
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/webp"
                  name="images"
                  id="images"
                  onChange={onSelectFiles}
                />
                {selectedImages.length !== 0 && (
                  <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedImages.map((item, index) => (
                      <img src={item} key={index} className="block" />
                    ))}
                  </div>
                )}
              </label>
              {imagesError && <p className="input-error">{imagesError}</p>}
            </div>

            <div className="featured-img-container">
              <div className="featured-img-selection ">
                <p className="mb-2">Select a featured image:</p>
                <div className="featured-img-grid">
                  {selectedImages.length > 0 &&
                    selectedImages.map((item, index) => (
                      <label key={index}>
                        <input
                          type="radio"
                          name="featuredImg"
                          value={index}
                          id=""
                        />
                        <img src={item} className="featured-images" />
                      </label>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNews;
