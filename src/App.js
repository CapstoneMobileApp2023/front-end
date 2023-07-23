import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";

function App() {

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/BuddyProfile" element={<BuddyProfile />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>

      
      </>
  );
}

export default App;
