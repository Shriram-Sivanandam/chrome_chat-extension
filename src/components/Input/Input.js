import React, { useState } from "react";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import InputEmoji from "react-input-emoji";

import "./Input.css";

import clip from "../../icons/clip.png";
import emoji from "../../icons/emoji.png";
// import stickers from "../../icons/stickers.png";
import send from "../../icons/send.png";

const Input = () => {
  const inputRef = React.createRef();
  const [showEmojiDiv, setShowEmojiDiv] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessage] = useState("");
  const [cursorPosition, setCursorPosition] = useState();

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMessage(message + emojiObject.emoji);
  };

  const pickEmoji = (e, { emoji }) => {
    const ref = inputRef.current;
    ref.focul();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const msg = start + emoji + end;
    setMessage(msg);
    setCursorPosition(start.length.emoji.length);
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div>
      <div className={`${showEmojiDiv ? "" : "no"}`}>
        <Picker
          onEmojiClick={onEmojiClick}
          skinTone={SKIN_TONE_NEUTRAL}
          pickerStyle={{ width: "100%" }}
        />
      </div>
      <form className="form">
        <img className="inputIcons" src={clip} alt="attach" />
        <img
          onClick={() => setShowEmojiDiv(!showEmojiDiv)}
          className="inputIcons inputEmoji"
          src={emoji}
          alt="emoji"
        />
        {/* <div className="chatInput" onClick={(e) => e.preventDefault()}> */}
        {/* <InputEmoji
          className="chatInput"
          value={message}
          onChange={setMessage}
          height={90}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        /> */}
        {/* </div> */}
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
