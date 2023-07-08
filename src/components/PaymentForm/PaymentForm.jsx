import React from "react"
import { useState } from "react";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { UPDATE_USER_ACTION } from "../../store/userReducer";
import '../../styles/css/PaymentForm/style.css';

export default function PaymentForm() {
    const [cardNum, setCardNum] = useState("");
    const [date, setDate] = useState("");
    const [crypto, setCrypto] = useState("");
    // const [name, setName] = useState("");

    const Cart = [];

    const userId = localStorage.getItem('Id');
    const users = store.getState().users;
    const user = users.find(user => user.id === parseInt(userId))

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(event) {
        const input = event.target;
        const value = input.value;
        const onlyDigits = value.replace(/[^0-9]/g, "");
        
        input.value = onlyDigits;

        if (input.name === "cardNumber") {
            setCardNum(event.target.value);
        }
        if (input.name === "crypto") {
            setCrypto(event.target.value);
        }
    }

    const handlePayment = () => {
        if (cardNum.length === 16 && crypto.length === 3 && date !== "") {
            dispatch({
                type: UPDATE_USER_ACTION,
                payload: {
                id: user.id,
                Cart: Cart
                },
            });
            navigate('/thanks');
        } else {
            console.log("non");
        }
    }

    return (
        <div className="PaymentForm">
            <form>
                <h2>Payement</h2>
            {/* onChange={(event) => setEmail(event.target.value)} */}
                <div className="normal_input">
                    <input 
                        type="text"
                        name="cardNumber"
                        placeholder="Numéro de Carte"
                        maxLength={16}
                        onChange={handleInputChange}
                        value={cardNum}
                    />
                </div>

                <div className="date_input">
                    <input
                        type="month"
                        onChange={(event) => setDate(event.target.value)}
                        value={date}
                    />
                </div>

                <div className="normal_input">
                    <input
                        type="text"
                        name="crypto"
                        placeholder="Cryptogramme"
                        maxLength={3}
                        onChange={handleInputChange}
                        value={crypto}
                    />
                </div>

                {/* <div className="normal_input">
                    <input
                        type="text"
                        className="Nom"
                        maxLength={50}
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </div> */}

                <button onClick={handlePayment}>
                    Payer
                </button>
            </form>
        </div>
    )
}