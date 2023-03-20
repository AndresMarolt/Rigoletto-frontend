
export default (state= {authData: null, error: null}, action) => {
    switch(action.type) {
        case 'AUTHADMIN':
            localStorage.setItem('admin', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data }
        case 'LOGOUTADMIN':
            localStorage.clear();
            return { ...state, authData: null }
        case 'ERRORADMIN':
            return { ...state, error: action?.error};
        default:
            return state;
    }
}   