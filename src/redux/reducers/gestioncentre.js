import * as types from "../types"

const initialState = {
  selectedCentre: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const gestioncentre = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_CENTRE:
        return {
          ...state,
          selectedCentre: state.list.find((centre) => centre.id === action.id) || {},
        }

//Affiche centre
        case types.AFFICHE_CENTRE_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_CENTRE_SUCCES:
            return {
              ...state,
              selectedCentre: action.centre,
            }
            case types.AFFICHE_CENTRE_ECHEC:
        return { ...state, error: true, loading: false }

//Ajoute centre
    case types.AJOUTE_CENTRE_DEMANDE:
      return { ...state, loading: true, error: true }
    case types.AJOUTE_CENTRE_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.centre_de_vaccination], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_CENTRE_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des centres
        case types.AFFICHE_LIST_CENTRES_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_CENTRES_SUCCES:
            return { ...state, list: [...action.centres], loading: false }
        case types.AFFICHE_LIST_CENTRES_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier centre
            case types.MODIFIER_CENTRE_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_CENTRE_SUCCES:
      const modifierCentres = state.list.map((centre) => {
        if (centre.id === action.id) {
          return action.centre
        }
        return centre
      })
      return { ...state, list: modifierCentres }
      case types.MODIFIER_CENTRE_ECHEC:
        return { ...state, error: true, loading: false }   

//Supprimer centre
      case types.SUPPRIMER_CENTRE_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.SUPPRIMER_CENTRE_SUCCES:
      const nouvCentres = state.list.filter((centre) => centre.id !== action.id)
      return { ...state, list: nouvCentres }
      case types.SUPPRIMER_CENTRE_ECHEC:
        return { ...state, error: true, loading: false }   

     default:
         return state
         }
    }

export default gestioncentre