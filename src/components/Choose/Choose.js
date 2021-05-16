import React from "react";

import "./Choose.css";

export default function Choose() {
  return (
    <div className="chooseOuterContainer">
      <div className="chooseInnerContainer">
        <h2 className="chooseHeading">Choose the type of room</h2>
        <div>
          <button placeholder="Name" className="publicButton">
            Public Room
          </button>
        </div>
        <div>
          <button placeholder="Name" className="privateButton">
            Private Room
          </button>
        </div>
      </div>
    </div>
  );
}
