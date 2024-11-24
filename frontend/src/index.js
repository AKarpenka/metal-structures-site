import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Contacts from './pages/contacts/Contacts';
import AboutUs from './pages/about-us/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import { store } from './redux';
import UpArrow from './components/up-arrow/UpArrow';
import './index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <UpArrow />
      <BrowserRouter>
          <Routes>
              <Route
                  path="*"
                  element={<Navigate to="/main" replace />}
              />
              <Route path="/main" element={<Main />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/portfolio/:category" element={<Portfolio />} />
              <Route path="/about-us" element={<AboutUs />} />
          </Routes>
      </BrowserRouter>
  </Provider>
);
