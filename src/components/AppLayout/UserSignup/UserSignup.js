import './UserSignup.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { userSignup } from '../../../redux/actions/userAuth';

const UserLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userState = useSelector(state => state.authUser)

    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        dispatch(userSignup(formData, navigate))
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={handleSubmit}>
                <div className='fields_container'>
                    <h3>Sign Up</h3>
                    <div className='field'>
                        <label htmlFor='email'>Usuario</label>
                        <input type="text" id="username" name='username'/>
                    </div>

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

                    <button type='submit'>Sign Up</button>

                    <span className='change_login-text'>
                        ¿Ya tenés una cuenta? &nbsp;
                        <Link to={'/login'}>Ingresá acá!</Link>
                    </span>

                    { showError ? <p>{userState.error}</p> : "" }
                    
                </div>
            </form>
        </div>  
    )
}

export default UserLogin;