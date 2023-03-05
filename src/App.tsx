import { useEffect, useState } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("user") as string));

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
