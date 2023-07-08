import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import "../../styles/css/ConfirmPurchase/style.css"

export default function ConfirmPurchase () {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="ConfirmPurchase">
                <div>
                    <h1>Merci de votre achat !</h1>
                    <div className="ConfirmPurchase_buttons">
                        <button className="ok" onClick={() => {navigate('/')}}>Retour à l'accueil</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}