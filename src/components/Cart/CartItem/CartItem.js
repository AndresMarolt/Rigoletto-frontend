import { updateItemQuantity, deleteFromCart } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";
import './CartItem.css'

const CartItem = ({_id, category, img, title, price, description, quantity}) => {

    const dispatch = useDispatch();

    const decreaseQuantity = () => {
        if(quantity > 1) {
            quantity--;
            dispatch(updateItemQuantity({ _id, category, img, title, price, description, quantity }));
        }
    }

    const increaseQuantity = () => {
        quantity++;
        dispatch(updateItemQuantity({ _id, category, img, title, price, description, quantity }));
    }

    const deleteItem = () => {
        dispatch(deleteFromCart({ _id, category, img, title, price, description, quantity }))
    }

    return (
        <li key={_id} className='cart-list_item'>
            <img src={`http://localhost:5000/${img}`} />
            <div>
                <p>{title}</p>
                <p>Precio: ${price}</p>
                <p>Cantidad: <button onClick={() => decreaseQuantity()}>-</button>{quantity}<button onClick={() => increaseQuantity()}>+</button></p>
                <button onClick={() => deleteItem()}>Eliminar</button>
            </div>
        </li>
    )
}

export default CartItem;