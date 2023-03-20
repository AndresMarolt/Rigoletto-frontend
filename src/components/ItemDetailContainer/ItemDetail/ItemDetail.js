import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import ItemCounter from "../../ItemCounter/ItemCounter"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, updateItemQuantity } from "../../../redux/actions/cart"
import Notification from "../../Notification/Notification"

const ItemDetail = ({_id, title, price, img, description, category}) => {

    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart);
    const userData = useSelector( state => state.authUser.userData);
    const [quantityAdded, setQuantityAdded] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [initial, setInitial] = useState();
    console.log(cart);

    const addItem = (quantity) => {
        setQuantityAdded(quantity);
        const item = { _id, title, price, img, description, category, quantity };

        if(cart.items?.some(e => e.id === item._id )) {

            dispatch(updateItemQuantity(item, cart))
        } else {
            dispatch(addToCart(item, cart));
        }

        setShowNotification(true);
    }
    
    useEffect(() => {
        setInitial(initial);
        if(showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        }
    }, [showNotification])

    return(
        <>
            <h1 className="detail-title">{title}</h1>

            <div className="detail">
                <img src={`http://localhost:5000/${img}`} className="detail_img"></img>

                <div className="detail_text">
                    <p className="detail_text-price">${price}</p>
                    <p className="detail_text-description">{description}</p>

                    {
                        userData ?
                        <div className="detail_text-add">
                            <ItemCounter onAdd={addItem} itemId={_id} initial={ 1}/>
                        </div>
                        :
                        <div className="detail_login">
                                <Link to='/login'>
                                    Iniciá sesión para agregar productos al carrito
                                </Link>
                        </div>
                    }

                </div>
            </div>

            {
                showNotification && <Notification color={"green"} text={`${quantityAdded>1 ? "Añadidas" : "Añadida"} ${quantityAdded} ${quantityAdded>1 ? "unidades" : "unidad"} de ${title} al canasto`} />
            }
        </>
    )
}

export default ItemDetail