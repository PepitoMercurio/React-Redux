import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/products";
import Footer from "../../components/Footer/footer";
import store from "../../store";

export default function HomePage() {
    return (
        <div>
            <Header />
            <Products />
            <Footer />
        </div>
    )
}