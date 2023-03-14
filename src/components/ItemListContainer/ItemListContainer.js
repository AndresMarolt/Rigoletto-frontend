import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";


const ItemListContainer = () => {

    const { category } = useParams();

    return(
        <div className="ItemListContainer">
            <div className="Container">
                <div>
                    <h1>{category}</h1>
                </div>

                <ItemList category={category}/>
            </div>
        </div>
    )
}

export default ItemListContainer;