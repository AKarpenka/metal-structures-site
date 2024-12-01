import ReactDOM from "react-dom";

const modalRootEl = document.getElementById("modal");

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
