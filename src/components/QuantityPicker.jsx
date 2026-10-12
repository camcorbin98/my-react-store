import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
    const [quantity, setQuantity] = useState (1);
    // const quantity = 1
    //     name     function           initial value

    function handleDecrease(){
        //create the logic of the decrease function
        if (quantity > 0) {
            let nextValue = quantity - 1;
            setQuantity(nextValue);
        }
    }
    function handleIncrease(){
        let nextValue = quantity + 1;
        // quantity = nextValue; this is a not!!!
        setQuantity(nextValue);
    }

    return(
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-pty">{quantity}</label>
            <button className="btn-plus" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;