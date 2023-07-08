import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import { ADD_PRODUCT_ACTION } from '../../store/productsReducer';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "../../styles/css/AddProduct/style.css";

export default function AddProducts() {
    const [name, setName] = useState("");
    const [priceEntier, setPriceEntier] = useState("");
    const [priceDecimal, setPriceDecimal] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const price = parseFloat(priceEntier, 10) + parseFloat(priceDecimal, 10) * 0.01;

    const handleAddProduct = () => {
        dispatch({ type: ADD_PRODUCT_ACTION, payload: { Name: name, Price: price, Description: description, Quantity: quantity, Image: image }});
        navigate('/');
    }

    return (
        <div className="add_product_form">
            <form className="add-prod">
                <h2>Ajouter un produit</h2>

                <div className="normal_input">
                    <input type={"text"} placeholder="Titre" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className="price_input">
                    <p>Prix :</p>
                    <input type={"number"} className="dollar_input"placeholder="5" value={priceEntier} onChange={(event) => setPriceEntier(event.target.value)}/>
                    <p>.</p>
                    <input type={"number"} className="cent_input" placeholder="99" value={priceDecimal} onChange={(event) => setPriceDecimal(event.target.value)}/>
                    <p>€</p>
                </div>

                <div className="normal_input">
                    <input type={"text"} placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                </div>

                <div className="normal_input">
                    <input type={"number"} placeholder="Quantité" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                </div>

                <div className="normal_input">
                    <input type={"text"} placeholder="Lien de l'image" value={image} onChange={(event) => setImage(event.target.value)}/>
                </div>

                <button type="submit" className="submit_btn" onClick={handleAddProduct}>Ajouter</button>
            </form>
        </div>
    )
}