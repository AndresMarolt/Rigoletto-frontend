import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import './ItemCounter.css'

const ItemCounter = ({onAdd, itemId, initial}) => {

    const itemsInCart = useSelector(state => state.cart.items.find(item => item._id === itemId)?.quantity)
    const [count, setCount] = useState(1);

    const decreaseCount = () => {
        if(count>1) {
            setCount(count-1);
        }
    }
    const increaseCount = () => {
        setCount(count+1);
    }

    useEffect(() => {
        if(itemsInCart) {
            setCount(itemsInCart)
        }
    }, [itemsInCart]);

    return(
        <>
            <div className="counter">
                <button className="counter-btn" onClick={() => decreaseCount()}>-</button>
                <p className="counter-count">{count}</p>
                <button className="counter-btn" onClick={() => increaseCount()}>+</button>

                
            </div>
            <button className="addItemBtn" onClick={() => onAdd(count)}>Agregar al pedido</button>
        </>

    )
}

export default ItemCounter;