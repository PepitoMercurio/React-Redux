import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_USER_ACTION } from "../../store/userReducer"
import store from "../../store";
import "../../styles/css/AddCart/style.css";

export default function AddCart( id ) {
    let [Q, setQ] = useState("");
    // const { id } = useParams();
    const userId = localStorage.getItem('Id');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = store.getState().users;
    const user = users.find(user => user.id === parseInt(userId))

    const handleCart = () => {
        let Cart = user.Cart;

        console.log("num : " + Q);
        if (Q > 1) {
            for (; Q > 0; Q--) {
                Cart.push(id.id);
            }
        } else {
            Cart.push(id.id);
        }
        
        

        dispatch({
            type: UPDATE_USER_ACTION,
            payload: {
            id: user.id,
            Cart: Cart
            },
        });
        navigate('/confirmAction');
    }

    return (
        <form>
            <input className="Q" type={"number"} placeholder="1" onChange={(event) => setQ(event.target.value)}/>
            <button className="cart" onClick={handleCart}>Ajouter au panier</button>
        </form>
    )
    
}
