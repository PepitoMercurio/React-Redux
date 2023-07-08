import React from "react";
import Header from "../../components/Header/Header";
import SignUp from "../../components/SignUp/signUp";
import Footer from "../../components/Footer/footer";
import "../../styles/css/RegisterPage/style.css"


export default function RegisterPage() {
    return (
        <div className="RegisterPage">
            <Header />
            <SignUp />
            <Footer />
        </div>
    )
}