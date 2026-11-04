import { useState, useContext } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import GlobalContext from "../state/globalContext";

function Product(props) {

    // ACCESS GLOBAL STATE

    const { addProductToCart } = useContext(GlobalContext);

    // QUANTITY STATE

    const [quantity, setQuantity] = useState(1);

    // HANDLE QUANTITY CHANGES

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    // ADD PRODUCT TO CART

    function onAdd() {
        let fixedProduct = {...props.data}
        fixedProduct.puantity = quantity
        addProductToCart(props.data, quantity);
        globalAdd(fixedProduct)
    }

    // CALCULATE TOTAL PRICE

    const total = Number(props.data.price) * quantity;

    return (
        <div className="product">

            {/* PRODUCT IMAGE */}

            <img
                src={"/images/" + props.data.image}
                alt={props.data.title}
            />

            {/* PRODUCT TITLE */}

            <h5>{props.data.title}</h5>

            {/* PRODUCT PRICES */}

            <div className="prices">

                <label>
                    Price: ${Number(props.data.price).toFixed(2)}
                </label>

                <label>
                    Total: ${total.toFixed(2)}
                </label>

            </div>

            {/* QUANTITY PICKER */}

            <QuantityPicker
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
            />

            {/* ADD TO CART BUTTON */}

            <button
                className="btn-solid theme-inverse"
                onClick={onAdd}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default Product;

