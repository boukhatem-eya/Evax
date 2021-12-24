import * as types from "../types"

const initialState = {
  selectedInscription: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const validationinscription = (state = initialState, action) => {

    switch (action.type) {
      case types.SET_SELECTED_INSCRIPTION:
        return {
          ...state,
          selectedInscription: state.list.find((inscription) => inscription.id === action.id) || {},
        }

//Affiche inscription
        case types.AFFICHE_INSCRIPTION_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_INSCRIPTION_SUCCES:
            return {
              ...state,
              selectedInscription: action.inscription,
            }
            case types.AFFICHE_INSCRIPTION_ECHEC:
        return { ...state, error: true, loading: false }
        
        //Ajoute validation
    case types.AJOUTE_VALIDATION_DEMANDE:
        return { ...state, loading: true, error: true }
      case types.AJOUTE_VALIDATION_SUCCES:
        console.log(action)
        return {
          ...state,
          list: [...state.list, action.validation], loading: false// or list: state.list.concat(action.task)
        }
        case types.AJOUTE_VALIDATION_ECHEC:
          return { ...state, error: true, loading: false }

    //Affiche list des inscriptions
    case types.AFFICHE_LIST_INSCRIPTIONS_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.AFFICHE_LIST_INSCRIPTIONS_SUCCES:
        return { ...state, list: [...action.inscriptions], loading: false }
    case types.AFFICHE_LIST_INSCRIPTIONS_ECHEC:
        return { ...state, error: true, loading: false }
    
    default:
        return state

    }

}
export default validationinscription