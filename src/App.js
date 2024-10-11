import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Account from "./components/Account";
import Footer from "./components/Footer";
import Maintenance from "./components/Maintenance";

function App() {
  /* Session state for the user's id as fetched through 'http://localhost:8080/login' endpoint */
  const [userId, setUserId] = useState(-1);
  const handleUserIdState = (id) => {
    setUserId(id);
  }

  /* Session state for whether user is logged in */
  const [loggedIn, setLoggedIn] = useState(false);
  const handleUserSessionState = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Navbar loggedIn={loggedIn} handleLogout={handleUserSessionState}/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login handleLogin={handleUserSessionState} handleId={handleUserIdState} />}/>
            <Route path="registration" element={<Registration handleLogin={handleUserSessionState} handleId={handleUserIdState} />}/>
            <Route path="account" element={<Account currentId={userId} />}/>
            <Route path="maintenance" element={<Maintenance/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

// npm start