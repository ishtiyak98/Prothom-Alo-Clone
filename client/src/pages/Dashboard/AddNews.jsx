import React, { useRef, useState } from "react";
import "../../styles/Dashboard/AddNews.scss";
import { BsCheckCircle, BsCheckCircleFill, BsImage } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import JoditEditor from "jodit-react";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    images: [],
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesError, setImagesError] = useState("");

  const [dropdownDisplay, setDropDownDisplay] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  //!------------- Multiple Image Select -------------
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

  const handleSelectedCategories = (value) => {
    if (selectedCategories.find((item) => item === value)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== value)
      );
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  console.log(selectedCategories);

  return (
    <section className="add-news-container">
      <h2 className="heading-text">Add An Article</h2>
      <div>
        <form action="" className="form-container">
          <div className="double-input-container">
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
          <div className="double-input-container">
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
                      <img src={item} key={index} className="block border" />
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
          {/*--------- Multiple Select Container ---------*/}
          <div className="double-input-container">
            <div className="w-full multiSelect-container">
              <div
                className="select-btn"
                onClick={() => setDropDownDisplay(!dropdownDisplay)}
              >
                <div>Select Category</div>
                <div>
                  <IoIosArrowDropdown
                    className={`text-2xl ${
                      dropdownDisplay ? "rotate-180" : "rotate-0"
                    } transition-all duration-300 `}
                  ></IoIosArrowDropdown>
                </div>
              </div>
              <div
                className={`dropdown ${dropdownDisplay ? "block" : "hidden"}`}
              >
                <div
                  className="dropdown-list"
                  onClick={() => handleSelectedCategories("item1")}
                >
                  <div className="checkbox">
                    {selectedCategories.find((item) => item === "item1") ? (
                      <BsCheckCircleFill className="text-xl"></BsCheckCircleFill>
                    ) : (
                      <BsCheckCircle className="text-xl"></BsCheckCircle>
                    )}
                  </div>
                  <div className="select-text">Item 1</div>
                </div>
                <div
                  className="dropdown-list"
                  onClick={() => handleSelectedCategories("item2")}
                >
                  <div className="checkbox">
                    {selectedCategories.find((item) => item === "item2") ? (
                      <BsCheckCircleFill className="text-xl"></BsCheckCircleFill>
                    ) : (
                      <BsCheckCircle className="text-xl"></BsCheckCircle>
                    )}
                  </div>
                  <div className="select-text">Item 2</div>
                </div>
                <div
                  className="dropdown-list"
                  onClick={() => handleSelectedCategories("item3")}
                >
                  <div className="checkbox">
                    {selectedCategories.find((item) => item === "item3") ? (
                      <BsCheckCircleFill className="text-xl"></BsCheckCircleFill>
                    ) : (
                      <BsCheckCircle className="text-xl"></BsCheckCircle>
                    )}
                  </div>
                  <div className="select-text">Item 3</div>
                </div>
              </div>
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
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNews;
