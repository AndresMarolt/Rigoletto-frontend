import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import './Modal.css'
import { useDispatch } from "react-redux";
import { createItem, updateItem } from "../../../../redux/actions/items";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons' 

const Modal = ({setShowModal, mode}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [itemImg, setItemImg] = useState(null);
    const data = useSelector((state) => state.items.item);
    const dispatch = useDispatch();

    const formRef = useRef();
    const title = useRef();
    const price = useRef();
    const description = useRef();
    const category = useRef();

    const handlePostItem = async (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("img", itemImg);
        formData.append("description", description.current.value);
        formData.append("title", title.current.value);
        formData.append("price", price.current.value);
        formData.append("category", category.current.value);
        
        if(mode === 'Agregar') {
            dispatch(createItem(formData));
        } else if(mode === 'Editar') {
            dispatch(updateItem(formData, data._id, data.img));
        }

        setShowModal(false);
    }

    const handleChange = (e) => {
        if(!title.current.value || !price.current.value || !description.current.value || !category.current.value ) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    return(
        <>
            <div className='darkBG'>
                <div className='centered'>
                    <div className='modalmio'>
                        <div className='modalHeader'>
                            <h1 className='heading'>{mode} Item</h1>
                        </div>

                        <button className='closeBtn' onClick={() => setShowModal(false)}>
                            <FontAwesomeIcon icon={faXmark} style={{ marginBottom: "-3px", width: '10px' }} />
                        </button>

                        <div className='modalContent'>
                            <form onChange={handleChange} onSubmit={(e) => handlePostItem(e)} ref={formRef}>
                                <div className='form_control'>
                                    <label>Título: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.title : ""} name="fullName" ref={title} onChange={handleChange}></input>
                                </div>

                                <div className='form_control'>
                                    <label>Precio: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.price : ""} name='address' ref={price} onChange={handleChange}></input>
                                </div>

                                <div className='form_control'>
                                    <label>Descripción: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.description : ""} name='city' ref={description} onChange={handleChange}></input>
                                </div>
                                <div className='form_control'>
                                    <label>Categoría: </label>
                                    <input type="text" defaultValue={mode==='Editar' ? data?.category : ""} name='estateAddress' ref={category} onChange={handleChange}></input>
                                </div>

                                <input type="file" className="img_input" onChange={(e) => {handleChange(); setItemImg(e.target.files[0])}} name="img" style={{display: 'block'}}/>

                                <div className="modalActions">
                                    <div className='actionsContainer'>
                                        <button className={`deleteBtn ${isDisabled && 'disabled'}`} type="submit" disabled={isDisabled}>
                                            Enviar
                                        </button>
                                        <button
                                            className='cancelBtn'
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;