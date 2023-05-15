import React, { useEffect, useRef, useState } from "react";
import "../../styles/Dashboard/AddNews.scss";
import { BsCheckCircle, BsCheckCircleFill, BsImage } from "react-icons/bs";
import { IoIosArrowDropdown, IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle, AiOutlineSync } from "react-icons/ai";
import JoditEditor from "jodit-react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase.init";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    text: "",
    time: "",
    author: "",
    featureImg: null,
    images: [],
    tags: [],
    category: [],
  });

  let formError = {
    titleError: false,
    featureImgError: false,
    categoriesError: false,
    textError: false,
    imagesError: false,
    tagsError: false,
  };
  const [titleError, setTitleError] = useState("");
  const [featureImgError, setFeatureImgError] = useState("");
  const [categoriesError, setCategoriesError] = useState("");
  const [textError, setTextError] = useState("");

  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesError, setImagesError] = useState("");

  const [dropdownDisplay, setDropDownDisplay] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [tags, setTags] = useState([]);
  const [tagsError, setTagsError] = useState("");

  const [date, setDate] = useState("");
  const imagesListRef = ref(storage, "articleImg/");

  useEffect(() => {
    const dateTime = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium",
    });
    setDate(dateTime);
  }, []);

  const updateDateTime = () => {
    const dateTime = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium",
    });
    setDate(dateTime);
  };

  //!------------- Handle Title -------------
  const titleCheck = (data) => {
    if (data === "") {
      setTitleError("Title is required");
      formError.titleError = true;
    } else {
      setFormData({ ...formData, title: data });
      setTitleError("");
      formError.titleError = false;
    }
  };
  const handleTitleData = (e) => {
    const text = e.target.value;
    titleCheck(text);
  };

  //!------------- Multiple Image Select -------------
  const checkImages = () => {
    if (selectedImages.length < 1) {
      setImagesError("Select at least 1 image");
      formError.imagesError = true;
    }
  };
  const onSelectFiles = (e) => {
    const imageList = Array.from(e.target.files);
    if (imageList.length > 4) {
      setImagesError("More than 4 image is not allowed!");
      formError.imagesError = true;
    } else {
      setImagesError("");
      formError.imagesError = false;
      setFormData({ ...formData, images: imageList });
      const imageArray = imageList.map((item) => {
        return URL.createObjectURL(item);
      });
      setSelectedImages(imageArray);
    }
  };

  //!------------- Select Feature Image -------------
  const checkFeatureImg = () => {
    if (formData.featureImg === null) {
      setFeatureImgError("Select 1 feature image");
      formError.featureImgError = true;
    } else {
      console.log("not-error");
      setFeatureImgError("");
      formError.featureImgError = false;
    }
  };

  const handleFeatureImg = (e) => {
    const id = parseInt(e.target.value);
    console.log(id);
    const featureImg = formData?.images?.find((img, i) => id === i);
    setFeatureImgError("");
    formError.featureImgError = false;
    setFormData({ ...formData, featureImg: id });
  };

  //!------------- Multiple Category Select -------------
  const checkCategories = () => {
    console.log();
    if (selectedCategories.length < 1) {
      setCategoriesError("Category can't be empty");
      formError.categoriesError = true;
    } else {
      setCategoriesError("");
      formError.categoriesError = false;
    }
  };

  const handleSelectedCategories = (value) => {
    setCategoriesError("");
    formError.categoriesError = false;
    if (selectedCategories.find((item) => item === value)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== value)
      );
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  //!------------- Text Editor -------------
  const checkText = () => {
    if (content === "") {
      setTextError("Text can't be empty!");
      formError.textError = true;
    }
  };

  const handleText = (content) => {
    setTextError("");
    formError.textError = false;
    setContent(content);
    setFormData({ ...formData, text: content });
  };

  //!------------- Tags Select -------------
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      if (tags.length === 5) {
        setTagsError("You can't add more than 5 tags");
        formError.tagsError = true;
      } else {
        if (tags.find((tag) => tag === e.target.value)) {
          setTagsError("This tag is already added");
          formError.tagsError = true;
        } else {
          setTagsError("");
          formError.tagsError = false;
          setTags([...tags, e.target.value]);
        }
      }
      e.target.value = "";
    } else if (e.target.value === "") {
      setTagsError("Can't add an empty tag");
    } else if (e.key !== "Enter") {
      return;
    }
  };

  const deleteTag = (i) => {
    setTagsError("");
    setTags(tags.filter((tag, index) => index !== i));
  };

  //!------------- Images Upload to Firebase -------------
  const uploadImages = async (data) => {
    let downloadImagesUrl = [];
    try {
      const imagesUpload = data.images.map(async (img) => {
        const imageRef = ref(
          storage,
          `articleImg/${formData.title}/${img.name}`
        );
        try {
          const snapshot = await uploadBytes(imageRef, img);
          const url = await getDownloadURL(snapshot.ref);
          return url;
        } catch (error) {
          console.log(error);
          return null;
        }
      });

      const urls = await Promise.all(imagesUpload);
      downloadImagesUrl = urls.filter((url) => url !== null);

      if (downloadImagesUrl.length > 0) {
        return downloadImagesUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //!------------- Form submit handler -------------
  const formHandler = async (e) => {
    e.preventDefault();

    titleCheck(e.target.title.value);
    checkImages();
    checkFeatureImg();
    checkCategories();
    checkText();

    console.log(formError);

    if (
      formError.titleError === false &&
      formError.imagesError === false &&
      formError.featureImgError === false &&
      formError.textError === false &&
      formError.tagsError === false &&
      formError.categoriesError == false
    ) {
      const data = {
        ...formData,
        category: selectedCategories,
        time: new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "medium",
        }),
        tags: tags,
      };
      console.log("entered");

      const imagesURL = await uploadImages(data);

      if (imagesURL.length > 0) {
        console.log(imagesURL);
        console.log("featured-img-url:", imagesURL[formData.featureImg]);
        data.images = imagesURL;

        console.log("data:", data);
        console.log("form-submitted....");

        setTags([]);
        setSelectedCategories([]);
        setSelectedImages([]);
        setContent("");
        setFormData({
          title: "",
          subtitle: "",
          text: "",
          time: "",
          author: "",
          featureImg: null,
          images: [],
          tags: [],
          category: [],
        });
        e.target.reset();
      }
    }
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  console.log(formData);
  console.log("re-render");

  return (
    <section className="add-news-container">
      <h2 className="heading-text">Add An Article</h2>
      <div>
        <form
          className="form-container"
          onKeyDown={onKeyDown}
          onSubmit={formHandler}
        >
          {/*--------- Title & SubTitle Input ---------*/}
          <div className="double-input-container">
            <div className="w-full">
              <input
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                onChange={(e) => handleTitleData(e)}
                className="input-field"
              />
              {titleError && <p className="input-error">{titleError}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Sub-Title"
                name="subTitle"
                id="subTitle"
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
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
                    {selectedImages.map((item, i) => (
                      <img src={item} key={i} className="block border" />
                    ))}
                  </div>
                )}
              </label>
              {imagesError && <p className="input-error">{imagesError}</p>}
            </div>
            {/*--------- Select Feature Image ---------*/}
            <div className="featured-img-container">
              <div className="featured-img-selection ">
                <p className="mb-2">Select a featured image:</p>
                <div className="featured-img-grid">
                  {selectedImages.length > 0 &&
                    selectedImages.map((item, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          name="featuredImg"
                          value={i}
                          id=""
                          onChange={(e) => handleFeatureImg(e)}
                        />
                        <img src={item} className="featured-images" />
                      </label>
                    ))}
                </div>
              </div>
              {featureImgError && (
                <p className="input-error">{featureImgError}</p>
              )}
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
              {categoriesError && (
                <p className="input-error">{categoriesError}</p>
              )}
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
                <div
                  className="dropdown-list"
                  onClick={() => handleSelectedCategories("item4")}
                >
                  <div className="checkbox">
                    {selectedCategories.find((item) => item === "item4") ? (
                      <BsCheckCircleFill className="text-xl"></BsCheckCircleFill>
                    ) : (
                      <BsCheckCircle className="text-xl"></BsCheckCircle>
                    )}
                  </div>
                  <div className="select-text">Item 4</div>
                </div>
              </div>
            </div>
            <div className="date-time">
              <input
                type="text"
                placeholder="Time & Date"
                name="date"
                id="date"
                readOnly
                value={date}
                className="input-field"
              />
              <div className="clock-sync-btn" onClick={updateDateTime}>
                <AiOutlineSync className=""></AiOutlineSync>
              </div>
            </div>
          </div>
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              tabi={1} // tabi of textarea
              onChange={(newContent) => handleText(newContent)}
            />
            {textError && <p className="input-error">{textError}</p>}
          </div>
          {/*--------- Add Tags Container ---------*/}
          <div>
            <div className="tag-container">
              {tags.length > 0 && (
                <div className="all-tags">
                  {tags.map((tag, i) => (
                    <div key={i} className="tag-list">
                      <p className="mt-[1px]">{tag}</p>{" "}
                      <IoIosCloseCircleOutline
                        className="delete-tag-icon text-xl"
                        onClick={() => deleteTag(i)}
                      ></IoIosCloseCircleOutline>
                    </div>
                  ))}
                </div>
              )}
              <div className="tag-input">
                <input
                  type="text"
                  placeholder="Insert some tags..."
                  name="tagInput"
                  id="tagInput"
                  onKeyUp={(e) => addTags(e)}
                  className="input-field"
                />
                {tagsError && (
                  <div className="input-error flex items-center">
                    <AiOutlineCloseCircle
                      onClick={() => setTagsError("")}
                      className="mt-1 cursor-pointer"
                    ></AiOutlineCloseCircle>
                    <p className="input-error">{tagsError}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*--------- Form Submit BTN ---------*/}
          <div className="submit-btn-container">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNews;
