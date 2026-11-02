import { createContext } from 'react';

const GlobalContext = createContext({
    cart: [], //default cart, empty array
    user: {}, // default user, empty object

    addProductToCart: () => {}, // placeholder function to add a product to the cart
    clearCart: () => {}, // placeholder function to remove all items from the cart
    removeProductFromCart: () => {} // placeholder function to remove a specific item from the cart
})


export default GlobalContext;

