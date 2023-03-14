import { useEffect, useState } from "react";
import Item from "./Item/Item";
import { fetchByCategory } from "../../../redux/actions/items";
import { useDispatch, useSelector } from "react-redux";
import './ItemList.css'

const ItemList = ({category}) => {

    const [items, setItems] = useState([])
    const dispatch = useDispatch();
    
    const fetchItems = async () => {
        const fetchedItems = await dispatch(fetchByCategory(category)); 
        console.log(fetchedItems);   
        setItems(fetchedItems);
    }
    
    useEffect(() => {
        fetchItems()
    }, [category])

    return(
        <section className="item-list">
            {
                items?.map(item => <Item key={item._id} {...item}/>)
            }
        </section>
    )
}

export default ItemList;