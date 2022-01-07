import * as types from "../../types"
import * as api from "../../../services/mettrejourinscription.js"


export const mettrejourInscription = (inscription) => async (dispatch) => {
  dispatch({
    type: types.METTREJOUR_INSCRIPTION_DEMANDE,
    
  })
     try {
      const nouveauInscription = await api.mettrejourInscription(inscription)

      dispatch({
        type: types.METTREJOUR_INSCRIPTION_SUCCES,
        inscription: nouveauInscription,
      })
     } catch (e) {
      dispatch({
        type: types.METTREJOUR_INSCRIPTION_ECHEC,
      })
     }
 
}




