import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Account from "../pages/Account";
import Login from "../pages/Login"
import Register from "../pages/Register";
import { State } from "./store";

function App() {
  const [user, setUser] = useState<any>({});
  
  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user") as string));
  }, [localStorage])

  // const user = useSelector((state: State) => state.user);
  console.log("user: ", user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user.username ? <Navigate to={"/account"} /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
