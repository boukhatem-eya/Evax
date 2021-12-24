import * as types from "../../types"
import * as api from "../../../services/inscriptionpharmacie.service"


// export const inscription = () => async (dispatch) => {
//    dispatch({
//      type: types.ISNSCRIPTION,
     
//    })
    
//  }


export const ajouteInscription = (inscription) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_INSCRIPTION_DEMANDE,
    
  })
     try {
      const nouveauInscription = await api.ajouteInscription(inscription)

      dispatch({
        type: types.AJOUTE_INSCRIPTION_SUCCES,
        inscription: nouveauInscription,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_INSCRIPTION_ECHEC,
      })
     }
 
}




