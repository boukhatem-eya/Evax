import * as types from "../types"

const initialState = {
    token: localStorage.getItem('token'),
   
    isAuthenticated: null,
    loading: true,
    pharmacie: null,
};

const adminconnexion = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case types.ADMIN_LOADED:
            return {
                ...state,
                pharmacie: payload,
                isAuthenticated: false,
                loading: false
            }
            case types.ADMIN_SUCCES:
                // Set Token in localstorage
                localStorage.setItem('token', payload.token);
          
                return {
                    ...state,
                    ...payload,
                    isAuthenticated: true,
                        loading: false,
                }; 

                case types.ADMIN_ECHEC:
                    case types.ADMIN_CONNEXION_ERROR:
                    case types.ADMIN_LOGOUT:
                        // Remove Token in localstorage
                        localStorage.removeItem('token');
                      
                        return {
                            ...state,
                            token: null,
                                isAuthenticated: false,
                                loading: false,
                                pharmacie: null
                        };
            
                default:
                    return state;
    }

}

export default adminconnexion