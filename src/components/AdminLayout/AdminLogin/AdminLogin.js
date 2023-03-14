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

        dispatch(adminLogin(formData))
        navigate("/admin");
    }

    return (
        <div className='admin_login'>
            <form className='admin_form' onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default AdminLogin;