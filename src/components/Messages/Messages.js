import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Penguid from "../../icons/penguid.jpg";

import "./Message.css";

const Messages = ({ messages, name }) => (
  <div className="bg">
    <ScrollToBottom className="messages">
      <div className="bg">
        {/* Message sent by the current user */}
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">name</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">message</p>
          </div>
        </div>

        {/* message sent by others in the chat room */}
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundGreen">
            <p className="messageText colorWhite">message</p>
          </div>
          <p className="sentText pl-10">name</p>
        </div>

        {/* Image sent by the current user */}
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">name</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">
              <img className="sentImage" src={Penguid} alt="image" />
            </p>
          </div>
        </div>

        {/* Image sent by others */}
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundGreen">
            <p className="messageText colorWhite">
              <img className="sentImage" src={Penguid} alt="image" />
            </p>
          </div>
          <p className="sentText pl-10">name</p>
        </div>
      </div>
    </ScrollToBottom>
  </div>
);

export default Messages;
