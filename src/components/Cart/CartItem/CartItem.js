import { updateItemQuantity, deleteFromCart } from "../../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import './CartItem.css'
import { useEffect, useState } from "react";

const CartItem = ({it, cart, allItems}) => {
    const itemDetail = allItems.find(item => item._id === it.id);
    const [quantityInCart, setQuantityInCart] = useState(it.quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateItemQuantity({_id: it.id, quantity: quantityInCart}, cart));
    }, [quantityInCart])

    const decreaseQuantity = () => {
        if(quantityInCart > 1) {
            setQuantityInCart(quantityInCart-1);
        }
    }

    const increaseQuantity = () => {
        setQuantityInCart(quantityInCart+1);
    }

    const deleteItemFromCart = () => {
        console.log("CARTID");
        console.log(cart.id);
        dispatch(deleteFromCart(it.id, cart.id))
    }

    return (
        <li className='cart-list_item'>
            <img src={`http://localhost:5000/${itemDetail.img}`} />
            <div>
                <p>{itemDetail.title}</p>
                <p>Precio: ${itemDetail.price}</p>
                <p>Cantidad: <button onClick={() => decreaseQuantity()}>-</button>{quantityInCart}<button onClick={() => increaseQuantity()}>+</button></p>
                <button onClick={deleteItemFromCart}>Eliminar</button>
            </div>
        </li>
            
    )


}

export default CartItem;