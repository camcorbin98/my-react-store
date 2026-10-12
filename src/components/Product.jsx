import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(){

    return(
        <div className="product">
            <img src="https://picsum.photos/200/200" alt="Product"></img>
            <h5> Title goes here</h5>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QuantityPicker></QuantityPicker>

        </div>
    )
}

export default Product;