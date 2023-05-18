import React from "react";
import { useState } from "react";
import { RotateLoader } from "react-spinners";
import "../../styles/LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <RotateLoader
        color="#D60000"
        loading={true}
        size={20}
        margin={5}
        speedMultiplier={1}
      />
      <h2 className="loading-text">Please Wait</h2>
    </div>
  );
};

export default LoadingSpinner;
