import * as types from "../types"

const initialState = {
    token: localStorage.getItem('token'),
   
    isAuthenticated: null,
    loading: true,
    pharmacie: null,
};

const connexionpharamcie = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case types.PHARMACIE_LOADED:
            return {
                ...state,
                pharmacie: payload,
                isAuthenticated: false,
                loading: false
            }
            case types.CONNEXION_PHARMACIES_SUCCES:
                // Set Token in localstorage
                localStorage.setItem('token', payload.token);
          
                return {
                    ...state,
                    ...payload,
                    isAuthenticated: true,
                        loading: false,
                }; 

                case types.CONNEXION_PHARMACIES_ECHEC:
                    case types.CONNEXION_ERROR:
                    case types.LOGOUT:
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

export default connexionpharamcie