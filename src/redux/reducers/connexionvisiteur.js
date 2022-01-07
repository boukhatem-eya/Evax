import * as types from "../types"

const initialState = {
    token: localStorage.getItem('token'),
   
    isAuthenticated: null,
    loading: true,
    visiteur: null,
};

const connexionvisiteur = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case types.VISITEUR_LOADED:
            return {
                ...state,
                visiteur: payload,
                isAuthenticated: false,
                loading: false
            }
            case types.CONNEXION_VISITEURS_SUCCES:
                // Set Token in localstorage
                localStorage.setItem('token', payload.token);
          
                return {
                    ...state,
                    ...payload,
                    isAuthenticated: true,
                        loading: false,
                }; 

                case types.CONNEXION_VISITEURS_ECHEC:
                    case types.CONNEXIONS_ERRORS:
                    case types.LOGOUT_VISITEUR:
                        // Remove Token in localstorage
                        localStorage.removeItem('token');
                      
                        return {
                            ...state,
                            token: null,
                                isAuthenticated: false,
                                loading: false,
                                visiteur: null
                        };
            
                default:
                    return state;
    }

}

export default connexionvisiteur