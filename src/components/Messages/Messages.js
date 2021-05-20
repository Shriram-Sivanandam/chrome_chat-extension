import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

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
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">message</p>
          </div>
          <p className="sentText pl-10 ">name</p>
        </div>
      </div>
    </ScrollToBottom>
  </div>
);

export default Messages;
