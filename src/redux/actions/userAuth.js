import * as api from '../../api'

export const userSignup = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.userSignup(formData);
        const cartResponse = await api.createCart(data._id);
        navigate("/");
        await dispatch({type: 'AUTHUSER', payload: data});
        await dispatch({type: 'SET_CART', payload: cartResponse.data });
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({type: 'ERRORUSER', error: error.response.data.message})
    }
}

export const userLogin = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.userLogin(formData);
        const cartResponse = await api.getCart(data._id);
        console.log("CART RESPONSE");
        console.log(cartResponse);

        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }

        await dispatch({type: 'AUTHUSER', payload: data});
        await dispatch({type: 'SET_CART', payload: cartResponse.data})
        
    } catch (error) {
        console.log(error);
    }
}

export const userLogout = () => async (dispatch) => {
    try {
        await dispatch({type: 'LOGOUTUSER'});
        await dispatch({type: 'EMPTY_CART'})
    } catch (error) {
        console.log(error);
    }
}