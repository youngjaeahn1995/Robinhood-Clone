import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    useEffect(() => {

    }, [])


    const onClick = async () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div>
            <div>This is account page</div>
            <div>Username: {user?.username}</div>
            <div>Stocks: {user?.stocks?.map((stock: any) => <li key={stock.stockId}>{stock.stockId}, {stock.quantity}</li>)}</div>
            <button onClick={onClick}>Logout</button>
        </div>
    )
}

export default Account;