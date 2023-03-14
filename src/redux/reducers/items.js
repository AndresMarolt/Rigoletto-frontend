

export default (state = {isLoading: true, items: []}, action) => {
    switch(action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true }
        case 'END_LOADING':
            return { ...state, isLoading: false }
        case 'CREATE':
            return { ...state, items: [...state.items, action.payload] }
        case 'UPDATE':
            return { ...state, items: state.items.map(item => (item._id === action.payload._id) ? action.payload : item) }
        case 'DELETE':
            return { ...state, items: state.items.filter(item => item._id !== action.payload) }
        case 'FETCH_BY_CATEGORY':
            return { ...state, items: action.payload }
        case 'FETCH_ONE':
            return { ...state, item: action.payload }
        case 'FETCH_ALL':
            return { ...state, items: action.payload };
        default:
            return state;
    }
}