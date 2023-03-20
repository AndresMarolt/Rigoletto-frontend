import './Cart.css'
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faBan, faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const cart = useSelector(state => state.cart);
    const allItems = useSelector(state => state.items.items);

    console.log("CART");
    console.log(cart.items);
    
    const func = async () => {
        let aux = await cart.items.map(cartItem => {
            let auxItem = allItems.find(item => item._id === cartItem.id);
            return {...auxItem, quantity: cartItem.quantity};
        })
        let totalAux = await aux?.reduce((accumulator, element) => {
            return accumulator + (element.price * element.quantity);
        }, 0);
        setTotal(totalAux);
    }
    useEffect(() => {
        func();
    }, [cart]);
    
    return(
        <div className="Container cart">
            <h3>Carrito {!cart.items.length && "vacío"} </h3>

            {
                cart.items.length ? (
                    <>
                        <ul className='cart-list'>
                        {
                        cart.items.map((it) => (
                                <CartItem key={it.id} it={it} cart={cart} allItems={allItems} func={func}/>
                            ))
                        }
                        </ul>

                        <div className='cart_total'>
                            <h3>Total:</h3>

                            <h3>${total}</h3>
                        </div>
                    </>
                    
                ) 
                :
                (
                    <div className='empty_basket-icons'>
                        <FontAwesomeIcon icon={faBasketShopping} className="basket" />
                        <FontAwesomeIcon icon={faBan} className="ban"/>
                    </div>
                )
            }

        </div>
    )
}

export default Cart;