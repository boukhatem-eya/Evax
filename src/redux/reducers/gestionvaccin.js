import * as types from "../types"

const initialState = {
  selectedVaccin: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const gestionvaccin = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_VACCIN:
        return {
          ...state,
          selectedVaccin: state.list.find((vaccin) => vaccin.id === action.id) || {},
        }

//Affiche vaccin
        case types.AFFICHE_VACCIN_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_VACCIN_SUCCES:
            return {
              ...state,
              selectedVaccin: action.vaccin,
            }
            case types.AFFICHE_VACCIN_ECHEC:
        return { ...state, error: true, loading: false }

//Ajoute vaccin
    case types.AJOUTE_VACCIN_DEMANDE:
      return { ...state, loading: true, error: true }
    case types.AJOUTE_VACCIN_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.vaccin], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_VACCIN_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des vaccins
        case types.AFFICHE_LIST_VACCINS_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_LIST_VACCINS_SUCCES:
            return { ...state, list: [...action.vaccins], loading: false }
        case types.AFFICHE_LIST_VACCINS_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier centre
            case types.MODIFIER_VACCIN_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_VACCIN_SUCCES:
      const modifierVaccin = state.list.map((vaccin) => {
        if (vaccin.id === action.id) {
          return action.vaccin
        }
        return vaccin
      })
      return { ...state, list: modifierVaccin }
      case types.MODIFIER_VACCIN_ECHEC:
        return { ...state, error: true, loading: false }   

//Supprimer centre
      case types.SUPPRIMER_VACCIN_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.SUPPRIMER_VACCIN_SUCCES:
      const nouvVaccins = state.list.filter((vaccin) => vaccin.id !== action.id)
      return { ...state, list: nouvVaccins }
      case types.SUPPRIMER_VACCIN_ECHEC:
        return { ...state, error: true, loading: false }   

     default:
         return state
         }
    }

export default gestionvaccin