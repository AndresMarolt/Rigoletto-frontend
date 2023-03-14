import './NavBar.css'
import CartWidget from '../../Cart/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

const NavBar = () => {
    
    return(
        <nav>
            <div className='Container'>
                <ul>
                    <li id="one"><DropdownMenu /></li>
                    <li id="two"><Link to={'/reservas'} className="navegacion-enlace" href='#'>Reservas</Link></li>
                    <li id="three"><Link to={'/nosotros'} className="navegacion-enlace" href='#'>Nosotros</Link></li>
                    <li id="four" ><CartWidget /></li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar; 