import React from "react";
// import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../contexts/NewModal";
import "./PopUp.css";
import attachment from "../assets/attachment.svg";
import send from "../assets/send.svg";
import back from "../assets/back.svg";
import dots from "../assets/dots.svg";
import Sample from "./Sample";
import Join from "./Join/Join";
import Choose from "./Choose/Choose";
import Messages from "./Messages/Messages";
import Chat from "./Chat/Chat";

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
                    <div className="modalCompanyName">
                      Chrome Chat Extension
                    </div>
                  </div>
                  <Chat />
                  {/* <Choose /> */}
                  {/* <Messages /> */}
                  {/* <Join /> */}
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
