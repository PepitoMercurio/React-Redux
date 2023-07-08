import React from "react";
import Header from "../../components/Header/Header";
import PaymentForm from "../../components/PaymentForm/PaymentForm"
import Footer from "../../components/Footer/footer";


export default function PaymentPage() {
    return (
        <div className="paymentPage">
            <Header />
            <PaymentForm />
            <Footer />
        </div>
    )
}