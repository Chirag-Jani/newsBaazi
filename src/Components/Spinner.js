import React from "react";
import loading from "../loading.gif";

function Spinner() {
  return (
    <div>
      <img src={loading} alt="loading.." className="mb-5" />
    </div>
  );
}

export default Spinner;
