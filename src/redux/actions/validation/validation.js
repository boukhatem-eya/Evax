import * as types from "../../types"
import * as api from "../../../services/validationpharmacie.service"

export const setSelectedPharmacie = (id) => ({
  type: types.SET_SELECTED_PHARMACIE,
  id
})

export const affichepharmacies = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_PHARMACIES_DEMANDE,
      
    })
       try {
         const pharmacies = await api.affichepharmacies()
         console.log(pharmacies)
          dispatch({
            type: types.AFFICHE_LIST_PHARMACIES_SUCCES,
            pharmacies,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_PHARMACIES_ECHEC,
        })
       }
    }
    //affiche pharmacie 
    
    export const afficherPharmacie = (id) => async (dispatch) => {
      dispatch({
          type: types.AFFICHE_PHARMACIE_DEMANDE,
          
        })
        try {
      const pharmacie = await api.affichePharmacie(id)
      dispatch ( {
        type: types.AFFICHE_PHARMACIE_SUCCES,
        pharmacie,
      })
  } catch (e) {
      dispatch({
        type: types.AFFICHE_PHARMACIE_ECHEC,
      })
     }
    }
    export const modifierPharmacie = (id, pharmacie_de_vaccination) => async (dispatch) => {
      dispatch({
          type: types.MODIFIER_PHARMACIE_DEMANDE,
          
        })
        try {
      const modifierPharamcie = await api.modifierPharmacie(id, pharmacie_de_vaccination)
    
      dispatch ( {
        type: types.MODIFIER_PHARMACIE_SUCCES,
        id,
        pharamcie: modifierPharamcie,
      })
  } catch (e) {
      dispatch({
        type: types.MODIFIER_PHARMACIE_ECHEC,
      })
     }
    }
    export const supprimerPharmacie = (id) => async (dispatch) => {
      dispatch({
          type: types.SUPPRIMER_PHARMACIE_DEMANDE,
          
        })
        try {
      await api.supprimerPharmacie(id)
      dispatch ( {
        type: types.SUPPRIMER_PHARMACIE_SUCCES,
        id,
      })
  } catch (e) {
      dispatch({
        type: types.SUPPRIMER_PHARMACIE_ECHEC,
      })
     }
    }



