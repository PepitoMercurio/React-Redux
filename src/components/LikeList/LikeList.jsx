import store from "../../store";

export default function LikeList(idProduct) {
    const products = store.getState().products;
    let product = products.find(product => product.id === idProduct)

    return (
        <div className="MyLike">
            <p>{product.Name}</p>
        </div>
        
    )
}