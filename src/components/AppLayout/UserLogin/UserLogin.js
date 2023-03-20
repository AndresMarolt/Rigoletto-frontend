import './UserLogin.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../redux/actions/userAuth';


const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        dispatch(userLogin(formData, navigate));
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={handleSubmit}>
                <div className='fields_container'>
                    <h3>Log In</h3>
                    <div className='field'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" id="email" name='email'/>
                    </div>

                    <div className='field'>
                        <label htmlFor='passowrd'>Contraseña</label>
                        <div className='input_container'>
                            <input type={showPassword ? 'text' : 'password'} id="password" name='password'></input>
                            <FontAwesomeIcon className='fa-eye' icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                    </div>

                    <button type='submit'>Log In</button>

                    <span className='change_login-text'>
                        ¿Aún no tenés una cuenta? &nbsp;
                        <Link to={'/signup'}>Creala acá!</Link>
                    </span>
                </div>
            </form>
        </div>  
    )
}

export default UserLogin;