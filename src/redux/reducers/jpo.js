import * as types from "../types"

const initialState = {
  selectedVolontaire: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const gestionjpo = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_JPO:
        return {
          ...state,
          selectedJpo: state.list.find((jpo) => jpo.id === action.id) || {},
        }

//Affiche jpo
        case types.AFFICHE_JPO_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_JPO_SUCCES:
            return {
              ...state,
              selectedJpo: action.jpo,
            }
            case types.AFFICHE_JPO_ECHEC:
        return { ...state, error: true, loading: false }

//Ajoute jpo
    case types.AJOUTE_JPO_DEMANDE:
      return { ...state, loading: true, error: true }
    case types.AJOUTE_JPO_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.jpo], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_JPO_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des jpos
        case types.AFFICHE_LIST_JPOS_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_JPOS_SUCCES:
            return { ...state, list: [...action.jpos], loading: false }
        case types.AFFICHE_LIST_JPOS_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier jpo
            case types.MODIFIER_JPO_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_JPO_SUCCES:
      const modifierJpo = state.list.map((jpo) => {
        if (jpo.id === action.id) {
          return action.jpo
        }
        return jpo
      })
      return { ...state, list: modifierJpo }
      case types.MODIFIER_JPO_ECHEC:
        return { ...state, error: true, loading: false }   

//Supprimer jpo
      case types.SUPPRIMER_JPO_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.SUPPRIMER_JPO_SUCCES:
      const nouvJpos = state.list.filter((jpo) => jpo.id !== action.id)
      return { ...state, list: nouvJpos }
      case types.SUPPRIMER_JPO_ECHEC:
        return { ...state, error: true, loading: false }   

     default:
         return state
         }
    }

export default gestionjpo