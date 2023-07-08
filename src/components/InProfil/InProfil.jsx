import React from "react";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import "../../styles/css/InProfil/style.css"

export default function InProfil() {
    const userId = localStorage.getItem('Id');
    const users = store.getState().users;
    const products = store.getState().products;
    const user = users.find(user => user.id === parseInt(userId))
    const Cart = user.Cart
    const MyCart = Array()

    Cart.map((element) => {
        const existingItem = MyCart.find(item => item.id === element);
  
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const article = {
            id: element,
            quantity: 1
            };
            MyCart.push(article);
        }
    })

    const navigate = useNavigate();


    const getProduct = (id) => {
      return products.find((product) => product.id === parseInt(id));
    };

      return (
        <div className="MyCart">
          <h2>Panier</h2>
          
          {MyCart.length !== 0 ? (
            <>
              <button onClick={() => {navigate('/payment')}}>Valider le panier</button>
              <div className="Cart">
                {MyCart.map((element) => {
                  const product = getProduct(element.id);
                  console.log(parseInt(element), product.id);
                  return (
                    <div
                      className="MyCard-card"
                      onClick={() => {
                        navigate(product.id);
                      }}
                      style={{ cursor: "pointer" }}
                      key={product.id}
                    >
                      <img src={product.Image} alt={product.Name} />
                      <div className="MyCard-card-info">
                        <h4>{product.Name}</h4>
                        <p>{product.Price}€</p>
                        <p>Quantité : {element.quantity}</p>
                      </div>
                    </div>
                  );
                })}
                {/* <button onClick={() => {navigate('/payment')}}>Valider le panier</button> */}
              </div>
            </>
          ) : (
            <p>Le panier est vide.</p>
          )}
        </div>
      );
}