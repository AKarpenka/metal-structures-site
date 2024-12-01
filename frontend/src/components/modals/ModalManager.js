import React from "react";

import CallModal from "./call/CallModal";
import SendModal from "./send/SendModal";

const ModalManager = ({ closeFn = () => null, modal = "" }) => (
  <>
    <CallModal closeFn={closeFn} open={modal === "call-modal"} />
    <SendModal closeFn={closeFn} open={modal === "send-modal"} />
  </>
);

export default ModalManager;
