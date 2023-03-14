import * as api from "../../api"

export const createItem = (formData) => async (dispatch) => {
    try {
        const {data} = await api.create(formData);
        dispatch({type: 'CREATE', payload: data});
        return data;
    } catch(error) {
        console.log(error);
    }
}

export const updateItem = (formData, itemId, itemImg) => async (dispatch) => {
    try {
        const {data} = await api.update(formData, itemId, itemImg);
        api.deleteImg(itemImg);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const fetchByCategory = (category) => async (dispatch) => {
    try {
        const {data: {data} } = await api.fetchItemsByCategory(category);
        dispatch({type: 'FETCH_BY_CATEGORY', payload: data})
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchById = (id) => async (dispatch) => {
    try {
        const {data: {data}} = await api.fetchItemsById(id);
        dispatch({type: 'FETCH_ONE', payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchAll = () => async (dispatch) => {
    try {
        const {data: {data}} = await api.fetchAll();
        dispatch({type: 'FETCH_ALL', payload: data});
        return data; 
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = (id, img) => async (dispatch) => {
    try {
        console.log(id);
        await api.deleteItem(id, img);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}