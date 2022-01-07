import * as types from "../types"

const initialState = {
  selectedVisiteur: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const visiteurs = (state = initialState, action) => {
    switch (action.type) {
        case types.AFFICHE_LIST_VISITEURS_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_VISITEURS_SUCCES:
            return { ...state, list: [...action.visiteurs], loading: false }
        case types.AFFICHE_LIST_VISITEURS_ECHEC:
            return { ...state, error: true, loading: false }
            
     default:
        return state
        }
   }

export default visiteurs