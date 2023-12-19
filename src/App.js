import "./App.css";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SidebarToggle from "./Components/SidebarToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from './Components/Main'
import Navbar from "./Components/SideBar";
import AboutUs from "./Components/AboutUs";
import Track from "./Components/Track";
import Component from "./Components/Component";
import Collaboration from "./Components/Collaboration";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="custom-pc" element={<Main/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path="Track" element={<Track/>}/>
        <Route path="component" element={<Component/>}/>
        <Route path="collaboration" element={<Collaboration/>}/>
      </Routes>
      <Footer/>
    </Router>
     
    </>
  );
}

export default App;
