
export default (state= {userData: null, error: null}, action) => {
    switch(action.type) {
        case 'AUTHUSER':
            localStorage.setItem('user', JSON.stringify(action.payload ));
            return { ...state, userData: action.payload }
        case 'LOGOUTUSER':
            localStorage.clear();
            return { ...state, userData: null }
        case 'ERRORUSER':
            return { ...state, error: action?.error};
        default:
            return state;
    }
} 