import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../../redux/actions/items';
import './Table.css'


const Table = ({onEdit}) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.items.items);
    
    console.log(data);
    const removeItem = (item) => {
        dispatch(deleteItem(item._id, item.img));
    }

    return(
        <table>
            <tbody>
                <tr className='table_header'>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>

                {
                    data?.map((item) => (
                        <tr key={item._id}>
                            <td><img src={`http://localhost:5000/${item.img}`} alt=""/></td>

                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>${item.price}</td>
                            <td className='fa-action'>
                                <FontAwesomeIcon icon={faPenToSquare} className="fa-action-icon" onClick={() => onEdit(item._id)} />
                                <FontAwesomeIcon icon={faTrash} className="fa-action-icon" onClick={() => removeItem(item)} />
                            </td>

                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    )
}

export default Table;