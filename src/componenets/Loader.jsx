import React from "react";
import "../style/loader.css";
import "./script/commonScript.js";

export default function Loader() {
  return (
    <div class="loaderDiv">
      <div class="loader"></div>
      <p>Loading page...</p>
    </div>
  );
}
