import React, { useState } from "react";
import UpArrow from './components/up-arrow/UpArrow';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main/Main";
import Contacts from "./pages/contacts/Contacts";
import AboutUs from "./pages/about-us/AboutUs";
import Portfolio from "./pages/portfolio/Portfolio";
import ModalManager from "./components/modals/ModalManager";

const App = () => {
  const [modalOpen, setModal] = useState(false);

  // const openModal = (event) => {
  //   event.preventDefault();
  //   const {
  //     target: {
  //       dataset: { modal },
  //     },
  //   } = event;
  //   if (modal) setModal(modal);
  // };

  const closeModal = () => {
    setModal("");
  };

  return (
    <>
      <UpArrow />
      <BrowserRouter>
        {/* <div onClick={openModal}> */}
          <Routes>
            <Route path="*" element={<Navigate to="/main" replace />} />
            <Route path="/main" element={<Main />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/portfolio/:category" element={<Portfolio />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        {/* </div> */}
      </BrowserRouter>
      <ModalManager closeFn={closeModal} modal={modalOpen} />
    </>
  );
};

export default App;
