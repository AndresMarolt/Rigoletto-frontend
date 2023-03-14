import { Link } from "react-router-dom";
import './Item.css'


const Item = ({_id, title, price, description, img}) => {

    return(
        <div className="Item-card">
            <div className="Item">
                <div className="Item_data">
                    <p className="Item_data-title">{title}</p>
                    <p className="Item_data-price">${price}</p>
                    <p className="Item_data-description">{description}</p>

                </div>

                <div className="Item_img">
                    <img src={`http://localhost:5000/${img}`} alt={title} />
                </div>
            </div>
            <div>
                <Link to={`/item/${_id}`} className="Item_data-orderBtn">
                    Pedir ahora!
                </Link>

            </div>
        </div>
    )
}

export default Item;