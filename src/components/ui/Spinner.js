import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img src={spinner} className="spinner" alt="is loading..." />
    </div>
  );
};

export default Spinner;
