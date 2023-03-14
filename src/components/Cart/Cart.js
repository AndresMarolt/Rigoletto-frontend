import './Cart.css'
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faBan, faBasketShopping} from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)

    const total = cartItems.reduce((accumulator, element) => {
        return accumulator + (element.price * element.quantity);
    }, 0);
    
    return (
        <div className="Container cart">
            <h3>Carrito {!cartItems.length && "vacío"} </h3>

            {
                cartItems.length ? (
                    <>
                        <ul className='cart-list'>
                            {
                                cartItems?.map(item => (
                                    <CartItem key={item._id} {...item}/>
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