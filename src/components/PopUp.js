import React from "react";
// import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../contexts/NewModal";
import "./PopUp.css";

const PopUp = () => {
  return (
    <ModalContext.Consumer>
      {({ windowPosition, hasDraggedWindowPosition }) => (
        <Draggable
          handle=".modal-handle"
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
                  <div className="modal-handle">
                    <div className="modal-close-button">X</div>
                  </div>
                  <div className="modal-content">
                    <h3>Chrome Chat Extension</h3>
                    <h6>Public chat room</h6>
                    <h6>Private chat room</h6>
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
