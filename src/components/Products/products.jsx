import React from "react";
import "../../styles/css/Product/style.css";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import AddCart from "../AddCart/AddCart";

export default function Products() {
    const navigate = useNavigate();
    const products = store.getState().products;
    
    return (
        <div className="products">
            {products.map(product => (
                <div className="cardBorder">
                    <div className="card">
                        <div className="card-redirect" onClick={() => {navigate(`${product.id}`)}} style={{cursor: "pointer"}}>
                            <br/>
                            <img src={product.Image} />
                            <p>{product.Name}</p>
                        </div>
                        {console.log("THE ID: " + product.id)}
                        <AddCart id={product.id}/>
                        {/* <AddLikes Id={parseInt(product.id)}/> */}
                    </div>
                </div>
            ))}
        </div>
    );
    
}