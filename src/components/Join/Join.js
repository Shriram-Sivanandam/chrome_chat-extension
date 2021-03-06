import React, { useState } from "react";

import "./Join.css";

import Chat from "../Chat/Chat";

import { Link } from "react-chrome-extension-router";

export default function Join({ isPublic }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  console.log(isPublic);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h2 className="joinHeading">Join a Chat Room</h2>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className={`joinInput mt-20 ${isPublic ? "no" : ""}`}
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link component={Chat}>
          <button className="joinButton mt-20" type="submit">
            Enter Room
          </button>
        </Link>
      </div>
    </div>
  );
}
