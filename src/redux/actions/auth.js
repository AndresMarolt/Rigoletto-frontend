import * as api from '../../api'

export const adminLogin = (formData) => async (dispatch) => {
    try {
        const data = await api.adminLogin(formData);
        console.log("DATA");
        console.log(data);
        dispatch({type: 'AUTH', ...data})
    } catch (error) {
        console.log(error);
    }
}