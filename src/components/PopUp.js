import React from "react";
// import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../contexts/NewModal";
import "./PopUp.css";
import attachment from "../assets/attachment.svg";
import send from "../assets/send.svg";
import back from "../assets/back.svg";
import dots from "../assets/dots.svg";

const PopUp = () => {
  return (
    <ModalContext.Consumer>
      {({ windowPosition, hasDraggedWindowPosition }) => (
        <Draggable
          handle=".modalHeader"
          defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
          position={
            hasDraggedWindowPosition
              ? { x: windowPosition.x, y: windowPosition.y }
              : null
          }
        >
          <div
            id="modal"
            className="modal-window"
            style={{
              transform: windowPosition,
            }}
          >
            <div className="modal-window-inner-border">
              <>
                <div className="modal-body">
                  <div className="modalHeader">
                    {/* <div className="modal-close-button">X</div> */}
                  </div>

                  <div className="chatHead">
                    <img className="chatBack" src={back} alt="back" />
                    <div className="roomInfo">
                      <h3>Youtube.com</h3>
                      <small>6 members online</small>
                    </div>
                    <img className="chatAttachment" src={dots} alt="more" />
                  </div>

                  <div className="chatBody">
                    <div className="newChat">
                      <img
                        className="chatAttachment"
                        src={attachment}
                        alt="add"
                      />
                      <input type="text" className="newChatInput" />
                      <button className="chatSend">
                        <img className="chatAttachment" src={send} alt="send" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </Draggable>
      )}
    </ModalContext.Consumer>
  );
};

export default PopUp;
