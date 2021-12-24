import * as types from "../../types"
import * as api from "../../../services/centre.service"


export const setSelectedCentre = (id) => ({
    type: types.SET_SELECTED_CENTRE,
    id
  })


export const ajoutecentre = (centre_de_vaccination) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_CENTRE_DEMANDE,
    
  })
     try {
      const nouveauCentre = await api.ajouteCentre(centre_de_vaccination)

      dispatch({
        type: types.AJOUTE_CENTRE_SUCCES,
        centre_de_vaccination: nouveauCentre,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_CENTRE_ECHEC,
      })
     }
 
}

export const affichcentres = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_CENTRES_DEMANDE,
      
    })
       try {
         const centres = await api.affichecentres()
         console.log(centres)
          dispatch({
            type: types.AFFICHE_LIST_CENTRES_SUCCES,
            centres,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_CENTRES_ECHEC,
        })
       }
    }

export const afficherCentre = (id) => async (dispatch) => {
        dispatch({
            type: types.AFFICHE_CENTRE_DEMANDE,
            
          })
          try {
        const centre = await api.afficheCentre(id)
        dispatch ( {
          type: types.AFFICHE_CENTRE_SUCCES,
          centre,
        })
    } catch (e) {
        dispatch({
          type: types.AFFICHE_CENTRE_ECHEC,
        })
       }
      }

export const modifierCentre = (id, centre_de_vaccination) => async (dispatch) => {
        dispatch({
            type: types.MODIFIER_CENTRE_DEMANDE,
            
          })
          try {
        const modifierCentre = await api.modifierCentre(id, centre_de_vaccination)
      
        dispatch ( {
          type: types.MODIFIER_CENTRE_SUCCES,
          id,
          centre_de_vaccination: modifierCentre,
        })
    } catch (e) {
        dispatch({
          type: types.MODIFIER_CENTRE_ECHEC,
        })
       }
      }
export const supprimerCentre = (id) => async (dispatch) => {
        dispatch({
            type: types.SUPPRIMER_CENTRE_DEMANDE,
            
          })
          try {
        await api.supprimerCentre(id)
        dispatch ( {
          type: types.SUPPRIMER_CENTRE_SUCCES,
          id,
        })
    } catch (e) {
        dispatch({
          type: types.SUPPRIMER_CENTRE_ECHEC,
        })
       }
      }