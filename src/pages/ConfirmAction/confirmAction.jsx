import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import "../../styles/css/ConfirmAction/style.css"

export default function ConfirmAction () {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="AddedToCart">
                <div>
                    <h1>L'article à été ajouté au panier</h1>
                    <div className="AddedToCart_buttons">
                        <button className="ok" onClick={() => {navigate('/profil')}}>Aller au panier</button>
                        <button className="ok" onClick={() => {navigate('/')}}>Continuer mes Achats</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}