import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addItem = (item, quantity) => {
        const addedItem = {...item, quantity};

        if(!isInCart(addedItem.id)) {
            setCart([...cart, addedItem]);
        } else {
            const updatedItem = cart.map(item => {
                if(item.id === addedItem.id) {
                    return { ...item, quantity }
                }
            })

            setCart(updatedItem)
        }
    }

    const getQuantity = () => {
        let count = 0;
        cart.forEach(item => {
            count += item.quantity
        })

        return count;
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity * item.price
        });

        return total;
    }

    const deleteItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart(items);
    }

    const clearCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getTotal, deleteItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext