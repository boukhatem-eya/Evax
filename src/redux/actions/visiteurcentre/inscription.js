import * as types from "../../types"
import * as api from "../../../services/inscriptionvisiteurcentre.js"


export const ajouteInscription = (inscription_visiteur_centre) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_INSCRIPTION_DEMANDE,
    
  })
     try {
      const nouveauInscription = await api.ajouteInscriptionCentre(inscription_visiteur_centre)

      dispatch({
        type: types.AJOUTE_INSCRIPTION_SUCCES,
        inscription_visiteur_centre: nouveauInscription,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_INSCRIPTION_ECHEC,
      })
     }
 
}




