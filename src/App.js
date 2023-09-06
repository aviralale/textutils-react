import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Main from "./components/Main";
import Footer from "./components/Footer";
let name = "Aviral";
function App() {
  const [mode,setMode] = useState('zinc-900');
  const toggleMode = ()=> {
    if (mode === 'slate-200') {
      
      setMode('zinc-900');
      document.body.style.backgroundColor = 'rgb(39 39 42)';
      document.body.style.color = 'rgb(203 213 225)';
    }
    else{
      setMode('slate-200');
      document.body.style.backgroundColor = 'rgb(203 213 225)';
      document.body.style.color = 'rgb(55 65 81)';
    }
  }
  return (
    <>
        <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<Main mode={mode}/>}>
            </Route>
          </Routes>
        
        {/* <About/> */}
      </div>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
