import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Cart() {

    // ACCESS GLOBAL STATE

    const { cart, removeProductFromCart } = useContext(GlobalContext);

    // CALCULATE TOTAL NUMBER OF ITEMS

    function getTotalItems() {
        let total = 0;

        for (let index = 0; index < cart.length; index++) {
            total += Number(cart[index].quantity);
        }

        return total;
    }

    // CALCULATE TOTAL PRICE

    function getTotalPrice() {
        let total = 0;

        for (let index = 0; index < cart.length; index++) {
            total += Number(cart[index].price) * Number(cart[index].quantity);
        }

        return total;
    }

    return (
        <div className="container py-5">

            <h1 className="mb-4">
                Ready to complete the purchase?
            </h1>

            {/* CHECK IF CART IS EMPTY */}

            {cart.length === 0 ? (

                <p>Your shopping cart is empty.</p>

            ) : (

                <div className="d-flex flex-column gap-3">

                    {/* DISPLAY PRODUCTS IN CART */}

                    {cart.map((product, index) => (

                        <div
                            key={index}
                            className="d-flex justify-content-between align-items-center gap-3 border rounded p-3 flex-wrap"
                        >

                            {/* PRODUCT IMAGE */}

                            <img
                                src={"/images/" + product.image}
                                alt={product.title}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "cover"
                                }}
                            />

                            {/* PRODUCT TITLE */}

                            <h6>{product.title}</h6>

                            {/* QUANTITY */}

                            <label>
                                Quantity: {product.quantity}
                            </label>

                            {/* UNIT PRICE */}

                            <label>
                                Price: ${Number(product.price).toFixed(2)}
                            </label>

                            {/* TOTAL PRICE PER PRODUCT */}

                            <label>
                                Total: ${(Number(product.quantity) * Number(product.price)).toFixed(2)}
                            </label>

                            {/* REMOVE BUTTON */}

                            <button
                                className="btn btn-danger"
                                onClick={() => removeProductFromCart(index)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                    {/* SHOPPING CART SUMMARY */}

                    <div className="border rounded p-4 mt-4 bg-light">

                        <h3 className="mb-3">
                            Order Summary
                        </h3>

                        {/* TOTAL ITEMS */}

                        <h5>
                            Total Items: {getTotalItems()}
                        </h5>

                        {/* GRAND TOTAL */}

                        <h3 className="fw-bold mt-3">
                            Grand Total: ${getTotalPrice().toFixed(2)}
                        </h3>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Cart;