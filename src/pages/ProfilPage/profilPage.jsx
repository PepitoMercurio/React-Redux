import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import InProfil from "../../components/InProfil/InProfil";
import "../../styles/css/ProfilPage/style.css";

export default function ProfilPage() {
    const userName = localStorage.getItem('Name');
    const userEmail = localStorage.getItem('Email');

    return (
        <div>
            <Header />
            <div className="ProfilPage">
                <div className="Profil">
                    <div className="Profil-infos">
                        <img src='https://media.discordapp.net/attachments/1050521750233940028/1126020447507591199/image.png?width=662&height=662' />
                        <h1>{userName}</h1>
                        <p>{userEmail}</p>
                    </div>
                    <InProfil />
                </div>
            </div>
            <Footer />
        </div>
    )
}