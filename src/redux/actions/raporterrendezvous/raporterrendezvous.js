import * as types from "../../types"
import * as api from "../../../services/raporterrendezvous.js"


export const Raporterrendezvous = (inscription) => async (dispatch) => {
  dispatch({
    type: types.RAPORTERRENDEZVOUS_INSCRIPTION_DEMANDE,
    
  })
     try {
      const nouveauInscription = await api.Raporterrendezvous(inscription)

      dispatch({
        type: types.RAPORTERRENDEZVOUS_INSCRIPTION_SUCCES,
        inscription: nouveauInscription,
      })
     } catch (e) {
      dispatch({
        type: types.RAPORTERRENDEZVOUS_INSCRIPTION_ECHEC,
      })
     }
 
}




