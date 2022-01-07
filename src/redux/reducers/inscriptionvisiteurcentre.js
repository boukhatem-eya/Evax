import * as types from "../types"

const initialState = {
  //selectedTask: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const inscriptionvisiteurcentre = (state = initialState, action) => {
  switch (action.type) {
    case types.AJOUTE_INSCRIPTION_DEMANDE:
      return { ...state, loading: true, error: true }

    case types.AJOUTE_INSCRIPTION_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.inscription_visiteur_centre], loading: false// or list: state.list.concat(action.task)
      }
      case types.AJOUTE_INSCRIPTION_ECHEC:
        return { ...state, error: true, loading: false }

     default:
       return state
   }
}
export default inscriptionvisiteurcentre
