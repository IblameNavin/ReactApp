import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './About.jsx';
import Navbar from './Components/Navbar.jsx';
import TextForm2 from './TextForm2.jsx';
import { useState } from 'react';
import Practice from './Practice.jsx';

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Turn Off Dark Mode");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} text={text} />

      <Routes>
  <Route path="/" element={<Practice mode={mode} />} />
  <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} text={text} />} />
  <Route path="/textform" element={<TextForm2 heading="Enter any text to change" mode={mode} />} />
  <Route path="*" element={<Practice mode={mode} />} /> {/* Fallback route */}
</Routes>

    </BrowserRouter>
  );
}

export default App;
