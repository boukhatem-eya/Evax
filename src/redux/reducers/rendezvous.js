import * as types from "../types"

const initialState = {
  selectedRendezvous: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const gestionrendezvous = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_RENDEZVOUS:
        return {
          ...state,
          selectedRendezvous: state.list.find((rendez_vous) => rendez_vous.id === action.id) || {},
        }

//Affiche RENDEZVOUS
        case types.AFFICHE_RENDEZVOUS_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_RENDEZVOUS_SUCCES:
            return {
              ...state,
              selectedRendezvous: action.rendez_vous,
            }
            case types.AFFICHE_RENDEZVOUS_ECHEC:
        return { ...state, error: true, loading: false }

//Ajoute RENDEZVOUS
    case types.AJOUTE_RENDEZVOUS_DEMANDE:
      return { ...state, loading: true, error: true }
    case types.AJOUTE_RENDEZVOUS_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.rendez_vous], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_RENDEZVOUS_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des RENDEZVOUSs
        case types.AFFICHE_LIST_RENDEZVOUSS_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_RENDEZVOUSS_SUCCES:
            return { ...state, list: [...action.rendezvouss], loading: false }
        case types.AFFICHE_LIST_RENDEZVOUSS_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier RENDEZVOUS
            case types.MODIFIER_RENDEZVOUS_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_RENDEZVOUS_SUCCES:
      const modifierRendezvous = state.list.map((rendez_vous) => {
        if (rendez_vous.id === action.id) {
          return action.rendez_vous
        }
        return rendez_vous
      })
      return { ...state, list: modifierRendezvous }
      case types.MODIFIER_RENDEZVOUS_ECHEC:
        return { ...state, error: true, loading: false }     

     default:
         return state
         }
    }

export default gestionrendezvous