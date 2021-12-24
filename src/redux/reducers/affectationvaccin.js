import * as types from "../types"

const initialState = {
  selectedVaccin: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const affectationvaccin = (state = initialState, action) => {

    switch (action.type) {
        //Ajoute affectation
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
    
    default:
        return state

    }

}
export default affectationvaccin