import * as types from "../types"

const initialState = {
  selectedPharmacie: {},
  loading: false,
  errors: false,
  list: []
}

const gestionpharmacie = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_SELECTED_PHARMACIE:
        return {
          ...state,
          selectedPharmacie : state.list.find((pharmacie) => pharmacie.id === action.id) || {},
        }

//Affiche centre
        case types.AFFICHE_PHARMACIE_DEMANDE:
            return { ...state, loading: true, error: true }
        case types.AFFICHE_PHARMACIE_SUCCES:
            return {
              ...state,
              selectedPharmacie: action.pharmacie,
            }
            case types.AFFICHE_PHARMACIE_ECHEC:
        return { ...state, error: true, loading: false }

//Affiche list des pharmacies
        case types.AFFICHE_LIST_PHARMACIES_DEMANDE:
            return { ...state, loading: true, error: true }
          case types.AFFICHE_LIST_PHARMACIES_SUCCES:
            return { ...state, list: [...action.pharmacies], loading: false }
          case types.AFFICHE_LIST_PHARMACIES_ECHEC:
            return { ...state, error: true, loading: false }

//Modifier pharamcie
            case types.MODIFIER_PHARMACIE_DEMANDE:
                return { ...state, loading: true, error: true }
            case types.MODIFIER_PHARMACIE_SUCCES:
      const modifierPharmacies = state.list.map((pharmacie) => {
        if (pharmacie.id === action.id) {
          return action.pharmacie
        }
        return pharmacie
      })
      return { ...state, list: modifierPharmacies }
      case types.MODIFIER_PHARMACIE_ECHEC:
        return { ...state, error: true, loading: false }   

//Supprimer pharmacie
      case types.SUPPRIMER_PHARMACIE_DEMANDE:
        return { ...state, loading: true, error: true }
    case types.SUPPRIMER_PHARMACIE_SUCCES:
      const nouvPharmacies = state.list.filter((pharmacie) => pharmacie.id !== action.id)
      return { ...state, list: nouvPharmacies }
      case types.SUPPRIMER_PHARMACIE_ECHEC:
        return { ...state, error: true, loading: false }   

            default:
                return state
            }
          }
export default gestionpharmacie