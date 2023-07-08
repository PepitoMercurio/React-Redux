import React from "react";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/login";
import Footer from "../../components/Footer/footer";
import "../../styles/css/LoginPage/style.css"

export default function LoginPage() {
    return (
        <div className="loginPage">
            <Header />
            <Login />
            <Footer />
        </div>
    )
}