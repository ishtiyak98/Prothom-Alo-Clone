import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import "../../styles/CustomModal.scss";

const CustomModal = ({ mode, heading, text }) => {
  const [display, setDisplay] = useState(true);

  const hideModal = () => {
    setDisplay(false);
  };
  return (
    <div
      className={`modal-container ${!display && "hidden"}`}
      onClick={hideModal}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div>
          {mode === "success" && (
            <BsCheckCircle className="text-6xl text-green-600 mb-[25px]"></BsCheckCircle>
          )}
          {mode === "error" && (
            <BiError className="text-6xl text-[#D60000] mb-[25px]"></BiError>
          )}
        </div>
        <h2
          className={`md-heading ${mode === "success" && "text-green-600"} ${
            mode === "error" && "text-[#D60000]"
          }`}
        >
          {heading}
        </h2>
        <p className="md-text">{text}</p>
        <div className="modal-btn" onClick={hideModal}>
          Ok
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
