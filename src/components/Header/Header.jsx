import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/css/Header/style.css";


export default function Header() {
    const userName = localStorage.getItem('Name');
    const admin = localStorage.getItem('Admin');
    
    let buttons
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.removeItem('Email');
        localStorage.removeItem('Name');
        localStorage.removeItem('Admin');
        navigate('/login');
    }

    const handleAdd = () => {
        navigate('/add_product');
    }

    const handleProfil = () => {
        navigate('/profil');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    let add

    console.log("YO : " + admin);

    if (admin === "true") {
        add = <p className="add" onClick={handleAdd}>Add Product</p>
    }

    console.log(add);

    if (userName !== null) {
        buttons =
        <div className="buttons">
            {add}
            <div className="logout">
                <p className="logout" onClick={handleLogout}>Logout</p>
            </div>
            <p className="profil" onClick={handleProfil}>{userName}</p>
        </div>
    } else {
        buttons =
        <div className="buttons">
            <p className="login" onClick={handleLogin}>Se connecter</p>
            <p className="register" onClick={handleRegister}>S'inscrire</p>
        </div>
    }

    return (
        <header>
            <div className="logo">
                <h1 onClick={handleHome} style={{cursor: "pointer"}}>Magasin</h1>
            </div>
            {buttons}
        </header>
    )
}