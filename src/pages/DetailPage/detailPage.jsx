import React from "react";
import store from "../../store";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import AddCart from "../../components/AddCart/AddCart";
import Admin from '../../components/Admin/Admin';
import "../../styles/css/DetailPage/style.css";

export default function DetailPage() {
    const { id } = useParams();
    const products = store.getState().products;
    const product = products.find(product => product.id === parseInt(id));
    const admin = localStorage.getItem('Admin');
    let sudo;

    if (admin) {
        sudo = <Admin />
    }
    
    return (
        <div>
            <Header />
            <div className="detail">
                <div className="detail_product">
                    <div className="detail_all">
                        <div className="detail_left">
                            <h1>{product.Name}</h1>
                            <img src = {product.Image} alt = {product.Name}></img>
                            {sudo}
                        </div>

                        <div className="detail_description">
                            <p>{product.Description}</p>
                        </div>

                        <div className="detail_right">
                            <p>Prix : {product.Price}€</p>
                            <p>Quantité : {product.Quantity}</p>
                            <AddCart id={product.id}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}