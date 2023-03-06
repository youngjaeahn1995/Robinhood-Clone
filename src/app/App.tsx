import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register";
import { State } from "./store";

function App() {
  const user = useSelector((state: State) => state.user);
  console.log("user: ", user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user.username ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
