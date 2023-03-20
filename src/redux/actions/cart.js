import * as api from '../../api/index.js'

export const addToCart = (item, cart) => async (dispatch) => {
    try {
        const {data} = await api.addToCart(item, cart);
        dispatch({type: 'SET_CART', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateItemQuantity = (item, cart) => async (dispatch) => {
    try {
        const {data} = await api.updateCartItem(item, cart);
        dispatch({type: 'UPDATE_CART', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteFromCart = (itemId, cartId) => async (dispatch) => {
    try {
        const {data} = await api.deleteCartItem(itemId, cartId);
        console.log(data);
        dispatch({type: 'SET_CART', payload: data});
    } catch (error) {
        console.log(error);
    }
}