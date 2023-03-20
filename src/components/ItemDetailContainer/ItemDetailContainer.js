import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { fetchById } from '../../redux/actions/items';
import { useDispatch } from 'react-redux';

const ItemDetailContainer = () => {

    const {itemId} = useParams();
    const [item, setItem] = useState({});

    const dispatch = useDispatch();
    
    const fetchItem = async () => {
        const fetchedItem = await dispatch(fetchById(itemId));
        setItem(fetchedItem);
    }

    useEffect(() => {
        fetchItem();
    }, [itemId])

    return(
        <div className='Container'>
            <ItemDetail key={item._id} {...item}/>
        </div>
    )
}


export default ItemDetailContainer;