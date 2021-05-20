import React, { useState } from "react";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react"; // To add emojis in the message

import "./Input.css";

import clip from "../../icons/clip.png";
import emoji from "../../icons/emoji.png";
import send from "../../icons/send.png";

const Input = () => {
  const [showEmojiDiv, setShowEmojiDiv] = useState(false);
  const [message, setMessage] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div>
      {/* Pops up a div to show the emoji selection box */}
      <div className={`${showEmojiDiv ? "" : "no"}`}>
        <Picker
          onEmojiClick={onEmojiClick}
          skinTone={SKIN_TONE_NEUTRAL}
          pickerStyle={{ width: "100%" }}
        />
      </div>
      {/* Input field for the user to input their message */}
      <form className="form">
        <img className="inputIcons" src={clip} alt="attach" />
        <img
          onClick={() => setShowEmojiDiv(!showEmojiDiv)}
          className="inputIcons inputEmoji"
          src={emoji}
          alt="emoji"
        />
        <input
          className="chatInput"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendButton">
          <img className="sendIcon" src={send} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default Input;
