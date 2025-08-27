// ✅ TOP par imports
import React, { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform2 from './component/Textform2';
import Alert from './component/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// ✅ App function
function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]  = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router>
        <h1>{props.heading}</h1>
        <Navbar titleText="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform2 showAlert={showAlert} heading="Enter the text to analyse : " mode={mode}/>} />
          </Routes>
        </div>
      </Router> */}

      <Navbar titleText="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert}/>
        <div className="container">
            <Textform2 showAlert={showAlert} heading="Enter the text to analyse : " mode={mode}/>
        </div>
    </>
  );
}

// ✅ Export at the very END
export default App;
