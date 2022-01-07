import * as types from "../../types"
import * as api from "../../../services/affectationrendezvous.service"
export const Affectationrendezvous = (rendez_vous) => async (dispatch) => {
    dispatch({
      type: types.AJOUTE_AFFECTATION_RENDEZVOUS_DEMANDE,
      
    })
       try {
        const nouveauAffectationvaccin = await api.ajouteAffectationrendezvous(rendez_vous)
  
        dispatch({
          type: types.AJOUTE_AFFECTATION_RENDEZVOUS_SUCCES,
          rendez_vous: nouveauAffectationvaccin,
        })
       } catch (e) {
        dispatch({
          type: types.AJOUTE_AFFECTATION_RENDEZVOUS_ECHEC,
        })
       }
   
  }