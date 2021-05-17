import React from "react";
import { Link } from "react-chrome-extension-router";

import "./Choose.css";

import Join from "../Join/Join";

export default function Choose() {
  return (
    <div className="chooseOuterContainer">
      <div className="chooseInnerContainer">
        <h2 className="chooseHeading">Choose the type of room</h2>
        <Link component={Join}>
          <button placeholder="Name" className="publicButton">
            Public Room
          </button>
        </Link>
        <Link component={Join}>
          <button placeholder="Name" className="privateButton">
            Private Room
          </button>
        </Link>
      </div>
    </div>
  );
}
