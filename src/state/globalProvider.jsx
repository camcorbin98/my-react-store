
import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {

    // GLOBAL STATE

    const [cart, setCart] = useState([]);

    const [user, setUser] = useState({
        name: "Cam",
        id: 71
    });

    // ADD PRODUCT TO CART

    function addProductToCart() {
        // Logic to add product to cart
    }

    // CLEAR CART

    function clearCart() {
        setCart([]);
    }

    // REMOVE PRODUCT FROM CART

    function removeProductFromCart() {
        // Logic to remove product from cart
    }

    return (
        <GlobalContext.Provider
            value={{
                cart: cart,
                user: user,
                setUser: setUser,
                addProductToCart: addProductToCart,
                clearCart: clearCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;

