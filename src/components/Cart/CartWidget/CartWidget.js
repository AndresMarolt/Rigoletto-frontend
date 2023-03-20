import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './CartWidget.css'

const CartWidget = () => {

    const [quantity, setQuantity] = useState(0);
    const items = useSelector(state => state.cart.items)

    useEffect(() => { 
        let quantity = items?.reduce((accumulator, element) => {
            return accumulator + element.quantity
        }, 0)
        setQuantity(quantity);
    }, [items])

    return(
        <div className='cartwidget' style={{cursor: "pointer"}}>
            <Link to="/cart" className='cart-link'>
                <FontAwesomeIcon icon={faBasketShopping} className="cartwidget-icono"/>
                <p className='cartwidget-cantidad'>{quantity}</p>
            </Link>
        </div>
    )
}

export default CartWidget;