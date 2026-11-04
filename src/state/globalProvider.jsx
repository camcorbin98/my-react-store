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

    function addProductToCart(product, quantity = 1) {

        const newProduct = {
            ...product,
            quantity: Number(quantity)
        };

        setCart((currentCart) => [
            ...currentCart,
            newProduct
        ]);

    }

    // CLEAR CART

    function clearCart() {
        setCart([]);
    }

    // REMOVE PRODUCT FROM CART

    function removeProductFromCart(index) {

        setCart((currentCart) =>
            currentCart.filter((product, itemIndex) => itemIndex !== index)
        );

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

