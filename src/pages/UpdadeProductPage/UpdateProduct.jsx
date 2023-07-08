import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import { UPDATE_PRODUCT_ACTION } from '../../store/productsReducer';
import store from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "../../styles/css/UpdadeProductPage/style.css";

export default function UpdateProducts() {
    let [name, setName] = useState("");
    const [priceEntier, setPriceEntier] = useState("");
    const [priceDecimal, setPriceDecimal] = useState("");
    let price = parseFloat(priceEntier, 10) + parseFloat(priceDecimal, 10) * 0.01;
    let [description, setDescription] = useState("");
    let [quantity, setQuantity] = useState("");
    let [image, setImage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const products = store.getState().products;
    const product = products.find(product => product.id === parseInt(id))

    if (name === "") {
        name = product.Name
    }
    if (description === "") {
        description = product.description
    }
    if (quantity === "") {
        quantity = product.Quantity
    }
    if (image === "") {
        image = product.Image
    }
    if (isNaN(price)) {
        price = product.Price
    }

    

    const handleUpdateProduct = () => {
        dispatch({ type: UPDATE_PRODUCT_ACTION, payload: { id: parseInt(id), Name: name, Price: price, Description: description, Quantity: quantity, Image: image }});
        navigate('/');
    };

    return (
        <div>
            <Header />
            <div className="update_product_form">
                <form className="update-prod">
                    <h2>Mettre à jour un produit</h2>

                    <div className="normal_input">
                        <input type={"text"} placeholder="Titre" onChange={(event) => setName(event.target.value)}/>
                    </div>

                    <div className="price_input">
                        <p>Prix :</p>
                        <input type={"number"} className="dollar_input" placeholder="5" onChange={(event) => setPriceEntier(event.target.value)}/>
                        <p>.</p>
                        <input type={"number"} className="cent_input" placeholder="99" onChange={(event) => setPriceDecimal(event.target.value)}/>
                        <p>€</p>
                    </div>

                    <div className="normal_input">
                    <input type={"text"} placeholder="Description" onChange={(event) => setDescription(event.target.value)}/>
                    </div>

                    <div className="normal_input">
                    <input type={"number"} placeholder="Quantité" onChange={(event) => setQuantity(event.target.value)}/>
                    </div>

                    <div className="normal_input">
                    <input type={"text"} placeholder="Image" onChange={(event) => setImage(event.target.value)}/>
                    </div>

                    <button type="submit" className="submit_btn" onClick={handleUpdateProduct}>Mettre à jour</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}