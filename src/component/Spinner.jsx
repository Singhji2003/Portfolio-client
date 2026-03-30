import React from "react";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={require("./Image/loading.gif")}  alt="" />
    </div>
  );
};

export default Spinner;
