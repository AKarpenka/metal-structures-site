import ReactDOM from "react-dom";

/*
  Необходимо добавить в index.html <div id="modal"></div>.
*/
const modalRootEl = document.getElementById("modal");

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
