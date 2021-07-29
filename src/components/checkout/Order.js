import React from 'react'
import "./order.css"
import { useHistory } from 'react-router-dom'
import Girl from "../../assets/shoppingGirl.svg"


const Order = () => {
    const history = useHistory();
    const routed = () => {
        history.replace("/")
    }
    return (
        <div className="order">
            <img src={Girl} alt="Shopping-girl"/>
            <div>
            <h1>Thanks for Shopping With us.</h1>
            <h2>Your order reach you very soon..</h2>
            <h3>Anything else you left? <button onClick={routed}>Click Here!</button></h3>
            </div>
        </div>
    )
}

export default Order
