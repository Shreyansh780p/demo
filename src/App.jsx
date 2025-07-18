// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Pages.css";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";
import Home from "./mainpages/Home";
import Contact from "./mainpages/Contact";
import About from "./mainpages/About";
import Courses from "./mainpages/Courses";
import Admission from "./mainpages/Admission";
import NotFound from "./mainpages/NotFound";
import Chatbot from "./components/Chatbot/Chatbot";


function App() {
  
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="shreyansh patil"
          studentPhotoUrl="\images\shreyansh.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div> 
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}
export default App;