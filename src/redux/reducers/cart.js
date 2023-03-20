

export default (state = {id: null, userId: null, items: null}, action) => {
    switch(action.type) {
        case 'SET_CART':
            console.log({ ...state, id: action.payload._id, userId: action.payload.userId, items: action.payload.items });
            return { ...state, id: action.payload._id, userId: action.payload.userId, items: action.payload.items }
        case 'UPDATE_CART':
            return { ...state, id: action.payload._id, userId: action.payload.userId, items: action.payload.items }
        case 'DELETE_ITEM':
            return { ...state, items: state.items.filter(item => item.id !== action.payload.itemId) } 
        case 'EMPTY_CART':
            return { ...state, id: null, userId: null, items: null };
        default:
            return state;
    }
}