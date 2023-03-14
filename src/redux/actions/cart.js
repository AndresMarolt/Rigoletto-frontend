export const addToCart = (item) => async (dispatch) => {
    try {
        dispatch({type: 'ADD', payload: item})
    } catch (error) {
        console.log(error);
    }
}

export const updateItemQuantity = (item) => async (dispatch) => {
    try {
        dispatch({type: 'UPDATE_QUANTITY', payload: item})
    } catch (error) {
        console.log(error);
    }
}

export const deleteFromCart = (item) => async (dispatch) => {
    try {
        dispatch({type: 'DELETE_ITEM', payload: item});
    } catch (error) {
        console.log(error);
    }
}