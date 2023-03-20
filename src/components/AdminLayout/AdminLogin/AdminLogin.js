import './AdminLogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../../redux/actions/auth'

const AdminLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        dispatch(adminLogin(formData, navigate))
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={handleSubmit}>
                <div className='fields_container'>
                    <h3>Admin</h3>
                    <div className='field'>
                        <label htmlFor='email'>User</label>
                        <input type="text" id="email" name='email'/>
                    </div>

                    <div className='field'>
                        <label htmlFor='passowrd'>Password</label>
                        <input type="password" id="password" name='password'></input>    
                    </div>

                    <button type='submit'>Log In as Admin</button>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;