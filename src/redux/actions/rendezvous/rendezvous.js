import * as types from "../../types"
import * as api from "../../../services/rendezvous.service"


export const setSelectedRendezvous = (id) => ({
    type: types.SET_SELECTED_CENTRE,
    id
  })


export const ajouterendezvous = (rendez_vous) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_CENTRE_DEMANDE,
    
  })
     try {
      const nouveauRendezvous = await api.ajouteRendezvous(rendez_vous)

      dispatch({
        type: types.AJOUTE_CENTRE_SUCCES,
        rendez_vous: nouveauRendezvous,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_CENTRE_ECHEC,
      })
     }
 
}

export const afficherendezvous = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_CENTRES_DEMANDE,
      
    })
       try {
         const rendezvouss = await api.afficherendezvous()
         console.log()
          dispatch({
            type: types.AFFICHE_LIST_CENTRES_SUCCES,
            rendezvouss,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_CENTRES_ECHEC,
        })
       }
    }

export const afficherCentre = (visiteur) => async (dispatch) => {
        dispatch({
            type: types.AFFICHE_CENTRE_DEMANDE,
            
          })
          try {
        const rendezvous = await api.afficheCentre(visiteur)
        dispatch ( {
          type: types.AFFICHE_CENTRE_SUCCES,
          rendezvous,
        })
    } catch (e) {
        dispatch({
          type: types.AFFICHE_CENTRE_ECHEC,
        })
       }
      }

export const modifierRendezvous = (id, rendez_vous) => async (dispatch) => {
        dispatch({
            type: types.MODIFIER_CENTRE_DEMANDE,
            
          })
          try {
        const modifierRendezvous = await api.modifierCentre(id, rendez_vous)
      
        dispatch ( {
          type: types.MODIFIER_CENTRE_SUCCES,
          id,
          rendez_vous: modifierRendezvous,
        })
    } catch (e) {
        dispatch({
          type: types.MODIFIER_CENTRE_ECHEC,
        })
       }
      }
