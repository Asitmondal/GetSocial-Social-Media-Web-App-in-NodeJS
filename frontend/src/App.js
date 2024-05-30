// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomeGuest from "./components/HomeGuest";
import HomeDashboard from "./components/HomeDashboard";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import SinglePost from "./components/SinglePost";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomeGuest />} />
        {/* <Route path="/dashboard" element={<HomeDashboard />} /> */}
        {/* <Route path="/create-post" element={<CreatePost />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/post/:id" element={<SinglePost />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
