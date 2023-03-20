import * as api from '../../api'

export const adminLogin = (formData, navigate) => async (dispatch) => {
    try {
        const data = await api.adminLogin(formData);
        navigate("/admin");
        dispatch({type: 'AUTHADMIN', ...data})
    } catch (error) {
        console.log(error);
    }
}

export const adminLogout = () => async (dispatch) => {
    try {
        dispatch({type: 'LOGOUTADMIN'});
    } catch (error) {
        console.log(error);
    }
}