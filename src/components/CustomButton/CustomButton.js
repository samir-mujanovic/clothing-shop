import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn green-btn">
      {title}
    </button>
  );
};

export default CustomButton;
