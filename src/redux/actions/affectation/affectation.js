import * as types from "../../types"
import * as api from "../../../services/affectationvaccin.service"
export const ajouteaffectation = (affectation_vaccin) => async (dispatch) => {
    dispatch({
      type: types.AJOUTE_AFFECTATION_DEMANDE,
      
    })
       try {
        const nouveauAffectation = await api.ajouteAffectation(affectation_vaccin)
  
        dispatch({
          type: types.AJOUTE_AFFECTATION_SUCCES,
          affectation_vaccin: nouveauAffectation,
        })
       } catch (e) {
        dispatch({
          type: types.AJOUTE_AFFECTATION_ECHEC,
        })
       }
   
  }