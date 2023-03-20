import { useState, useMemo } from "react";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import { useDispatch} from 'react-redux'
import { fetchAll, fetchById } from "../../../redux/actions/items";
import { useParams, useNavigate } from "react-router-dom";
import { fetchByCategory } from "../../../redux/actions/items";
import './Admin.css'


const Admin = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const fetch = async () => {
        dispatch(fetchByCategory(params.category[0].toUpperCase() + params.category.slice(1)));
    }

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const onEdit = async (id) => {
        setIsEditing(true);
        await dispatch(fetchById(id))
        setShowModal(true);
    }

    const logout = async () => {
        dispatch({type: 'LOGOUTADMIN'});
        navigate('/admin-login');
    }

    fetch();

    return (
        <div className="admin_content-container">
            <div className="admin-buttons">
                <button className="add-btn" onClick={() => {setIsEditing(false); setShowModal(true)}}>&#43; Agregar</button>
                <button className="logout-btn" onClick={logout}>Cerrar Sesión</button>
            </div>

            {
                showModal && <Modal setShowModal={setShowModal} mode={isEditing ? 'Editar' : 'Agregar'}/>
            }

            <Table onEdit={onEdit}/>
        </div>
    )
}

export default Admin;