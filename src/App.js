import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import CoursePage from './components/CoursesPage/CoursePage';
import DashBoardPage from "./components/DashBoardPage/DashBoardPage";
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import Careers from "./components/Careers/Careers";
import Blogs from "./components/Blogs/Blogs";
import Footer from './components/Footer/Footer';
import ScrollToTopButton from "./ScrollToTopButton";


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopButton /> 
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/coursepage" element={<CoursePage />} />
        <Route exact path="/mydashboard" element={<DashBoardPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
