import React from "react";

import CallModal from "./call/CallModal";
import SendModal from "./send/SendModal";

/*
  Для открытия модалки по нажатию кнопки - добавить data-modal атрибут с именем модалки.
  Пример: <button type="button" className="btn btn-primary" data-modal="send-modal">ОТПРАВИТЬ ЧЕРТЁЖ</button>
*/
const ModalManager = ({ closeFn = () => null, modal = "" }) => (
  <>
    <CallModal closeFn={closeFn} open={modal === "call-modal"} />
    <SendModal closeFn={closeFn} open={modal === "send-modal"} />
  </>
);

export default ModalManager;
