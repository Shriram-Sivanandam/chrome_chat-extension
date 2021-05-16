import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import users from "../../icons/people.png";

import "./InfoBar.css";

const InfoBar = ({ room, showModal, setShowModal }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>Room Name: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <div onClick={() => setShowModal(!showModal)}>
        <img className="usersIconDiv" src={users} alt="users" />
      </div>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
