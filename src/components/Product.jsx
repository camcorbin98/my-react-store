
import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {

    const [quantity, setQuantity] = useState(1);

    const total = Number(props.data.price) * quantity;

    return (
        <div className="product">
            <img
                src={"/images/" + props.data.image}
                alt={props.data.title}
            />

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>Price: ${Number(props.data.price).toFixed(2)}</label>
                <label>Total: ${total.toFixed(2)}</label>
            </div>

            <QuantityPicker
                quantity={quantity}
                onQuantityChange={setQuantity}
            />
        </div>
    );
}

export default Product;

