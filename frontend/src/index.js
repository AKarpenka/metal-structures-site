import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Main from './pages/main/Main';
import Contacts from './pages/contacts/Contacts';
import AboutUs from './pages/about-us/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import createBrowserHistory from './utils/history';
import { store } from './redux';
import './index.scss';
import UpArrow from './components/up-arrow/UpArrow';

// const router = createBrowserRouter([
//   { path: "/", element: <Main /> },
//   { path: "/contacts", element: <Contacts /> },
//   { path: "/portfolio/:category", element: <Portfolio /> },
//   { path: "/about-us", element: <AboutUs /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <ReouterProvider router={router} />
  // </React.StrictMode>
  <Provider store={store}>
      <UpArrow />
      <Router history={createBrowserHistory}>
          <Switch>
              <Redirect exact from="/" to="/main" />
              <Route path="/main" component={Main} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/portfolio/:category" component={Portfolio} />
              <Route path="/about-us" component={AboutUs} />
          </Switch>
      </Router>
  </Provider>
);
