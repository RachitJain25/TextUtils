import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about";
import PropTypes from "prop-types";
import Alerts from "./components/Alerts";
import { Link, Route ,Routes, BrowserRouter} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
   
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <BrowserRouter>
      <div className="container my-3">
        <Routes>
          <Route path="/about"
            element={<About />}
          />
          <Route path="/"
            element={<TextForm
              heading="Enter Text To Analyse Below"
              mode={mode}
              showAlert={showAlert}
            />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
