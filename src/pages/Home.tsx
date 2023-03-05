import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") as string));
    }, [localStorage])

    const onClick = async () => {
        setUser({});
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div>
            <div>This is home page</div>
            <div>Username: {user?.username}, Password: {user?.password} </div>
            <button onClick={onClick}>Logout</button>
        </div>
    )
}

export default Home;