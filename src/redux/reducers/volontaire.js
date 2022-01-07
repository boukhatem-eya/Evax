import * as types from "../types"

const initialState = {
  selectedVolontaire: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const gestionvolontaire = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_VOLONTAIRE:
        return {
          ...state,
          selectedVolontaire: state.list.find((volontaire) => volontaire.id === action.id) || {},
        }

//Affiche volontaire
        case types.AFFICHE_VOLONTAIRE_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_VOLONTAIRE_SUCCES:
            return {
              ...state,
              selectedVolontaire: action.volontaire,
            }
            case types.AFFICHE_VOLONTAIRE_ECHEC:
        return { ...state, error: true, loading: false }

//Ajoute volontaire
    case types.AJOUTE_VOLONTAIRE_DEMANDE:
      return { ...state, loading: true, error: true }
    case types.AJOUTE_VOLONTAIRE_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.volontaire], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_VOLONTAIRE_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des volontaires
        case types.AFFICHE_LIST_VOLONTAIRES_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_VOLONTAIRES_SUCCES:
            return { ...state, list: [...action.volontaires], loading: false }
        case types.AFFICHE_LIST_VOLONTAIRES_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier volontaire
            case types.MODIFIER_VOLONTAIRE_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_VOLONTAIRE_SUCCES:
      const modifierVolontaire = state.list.map((volontaire) => {
        if (volontaire.id === action.id) {
          return action.volontaire
        }
        return volontaire
      })
      return { ...state, list: modifierVolontaire }
      case types.MODIFIER_VOLONTAIRE_ECHEC:
        return { ...state, error: true, loading: false }   

//Supprimer volontaire
      case types.SUPPRIMER_VOLONTAIRE_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.SUPPRIMER_VOLONTAIRE_SUCCES:
      const nouvVolontaires = state.list.filter((volontaire) => volontaire.id !== action.id)
      return { ...state, list: nouvVolontaires }
      case types.SUPPRIMER_VOLONTAIRE_ECHEC:
        return { ...state, error: true, loading: false }   

     default:
         return state
         }
    }

export default gestionvolontaire