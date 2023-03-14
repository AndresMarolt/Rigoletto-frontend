import './DropdownMenu.css'
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom'


const DropdownMenu = () => {

    const menuRef = useRef(null);
    const [menuShow, setMenuShow] = useState(false);
    const location = useLocation();

    const closeDropdown = (event) => {
        if( !menuRef.current.parentNode.contains(event.target) ) {
            setMenuShow(false);
        }
    }

    document.addEventListener("mousedown", closeDropdown);

    useEffect(() => {
        setMenuShow(false);
    }, [location])

    return(
        <div className='dropdown'>
            <button className='navegacion-enlace' id="menu-btn" ref={menuRef} onClick={() => {setMenuShow(!menuShow)}}>
                Menú
            </button>

            <div className={`dropdown-content ${menuShow && "display-block"}`}>
                <div>
                    <NavLink to={`/menu/Entradas`}>
                        Entradas
                    </NavLink> 
                </div>

                <div>
                    <NavLink to={`/menu/Pizzas`}>
                        Pizza
                    </NavLink> 
                </div>

                <div>
                    <NavLink to={`/menu/Calzoni`}>
                        Calzoni
                    </NavLink> 
                </div>

                <div>
                    <NavLink to={`/menu/Bebidas`}>
                        Bebidas
                    </NavLink> 
                </div>

            </div>

        </div>
    )
}

export default DropdownMenu;