import * as types from "../types"

const initialState = {
  //selectedTask: {},
  loading: false,
  errors: false,
  list: [
  
  ],
}

const mettrejourinscription = (state = initialState, action) => {
  switch (action.type) {
    case types.METTREJOUR_INSCRIPTION_DEMANDE:
      return { ...state, loading: true, error: true }

    case types.METTREJOUR_INSCRIPTION_SUCCES:
      console.log(action)
      return {
        ...state,
        list: [...state.list, action.inscription], loading: false// or list: state.list.concat(action.task)
      }
      case types.METTREJOUR_INSCRIPTION_ECHEC:
        return { ...state, error: true, loading: false }

     default:
       return state
   }
}
export default mettrejourinscription
