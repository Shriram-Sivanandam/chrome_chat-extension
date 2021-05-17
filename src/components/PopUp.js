import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { ModalContext } from "../contexts/NewModal";
import "./PopUp.css";

import Chat from "./Chat/Chat";
import Choose from "./Choose/Choose";

import {
  Router,
  getCurrent,
  getComponentStack,
} from "react-chrome-extension-router";

const PopUp = () => {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
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
                  {/* <Chat /> */}
                  <Router>
                    <Choose />
                  </Router>
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
