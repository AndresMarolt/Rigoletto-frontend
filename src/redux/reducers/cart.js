
export default (state = {items: []}, action) => {
    switch(action.type) {
        case 'ADD':
            return { ...state, items: [...state.items, action.payload] }
        case 'UPDATE_QUANTITY':
            return { ...state, items: state.items.map(item => (item._id === action.payload._id) ? action.payload : item ) }
        case 'DELETE_ITEM':
            return { ...state, items: state.items.filter(item => item._id !== action.payload._id) } 
        default:
            return state;
    }
}