import React from "react";

import "./Input.css";

import clip from "../../icons/clip.png";
import emoji from "../../icons/emoji.png";
import stickers from "../../icons/stickers.png";
import send from "../../icons/send.png";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <img className="inputIcons" src={clip} alt="attach" />
    <img className="inputIcons inputEmoji" src={emoji} alt="emoji" />
    <img className="inputIcons" src={stickers} alt="stickers" />
    <input
      className="chatInput"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <img className="sendIcon" src={send} alt="send" />
    </button>
  </form>
);

export default Input;
