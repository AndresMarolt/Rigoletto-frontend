import './NavBar.css'
import CartWidget from '../../Cart/CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userLogout } from '../../../redux/actions/userAuth';

const NavBar = () => {
    
    const userData = useSelector(state => state.authUser.userData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(userLogout());
    }

    return(
        <nav>
            <div className='Container'>
                <ul>
                    <li id="one"><DropdownMenu /></li>
                    <li id="two"><Link to={'/reservas'} className="navegacion-enlace" href='#'>Reservas</Link></li>
                    <li id="three"><Link to={'/nosotros'} className="navegacion-enlace" href='#'>Nosotros</Link></li>
                    <li id="four" >
                        {
                            userData ?
                            <>
                                <CartWidget />
                                <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" onClick={logout}/>
                            </>
                            :
                            <Link to="/login">
                                <FontAwesomeIcon icon={faSignInAlt}  className="login-icon"/>
                            </Link>
                        }
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar; 