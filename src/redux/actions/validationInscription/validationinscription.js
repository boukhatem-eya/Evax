import * as types from "../../types"
import * as api from "../../../services/validation.service"
export const ajouteValidation = (validation) => async (dispatch) => {
    dispatch({
      type: types.AJOUTE_VALIDATION_DEMANDE,
      
    })
       try {
        const nouveauValidation = await api.ajouteValidation(validation)
  
        dispatch({
          type: types.AJOUTE_VALIDATION_SUCCES,
          validation: nouveauValidation,
        })
       } catch (e) {
        dispatch({
          type: types.AJOUTE_VALIDATION_ECHEC,
        })
       }
   
  }
  export const afficherinscriptions = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_INSCRIPTIONS_DEMANDE,
      
    })
       try {
         const inscriptions = await api.afficherinscriptions()
         console.log(inscriptions)
          dispatch({
            type: types.AFFICHE_LIST_INSCRIPTIONS_SUCCES,
            inscriptions,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_INSCRIPTIONS_ECHEC,
        })
       }
    }
    export const afficheInscription = (id) => async (dispatch) => {
      dispatch({
          type: types.AFFICHE_INSCRIPTION_DEMANDE,
          
        })
        try {
      const centre = await api.afficheInscription(id)
      dispatch ( {
        type: types.AFFICHE_INSCRIPTION_SUCCES,
        centre,
      })
  } catch (e) {
      dispatch({
        type: types.AFFICHE_INSCRIPTION_ECHEC,
      })
     }
    }