import * as types from "../../types"
import * as api from "../../../services/volontaire.service"


export const setSelectedVolontaire = (id) => ({
    type: types.SET_SELECTED_VOLONTAIRE ,
    id
  })


export const ajoutevolontaire = (volontaire) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_VOLONTAIRE_DEMANDE,
    
  })
     try {
      const nouveauVolontaire = await api.ajouteVolontaire(volontaire)

      dispatch({
        type: types.AJOUTE_VOLONTAIRE_SUCCES,
        volontaire: nouveauVolontaire,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_VOLONTAIRE_ECHEC,
      })
     }
 
}

export const afficheVolontaires = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_VOLONTAIRES_DEMANDE,
      
    })
       try {
         const volontaires = await api.afficheVolontaires()
         console.log(volontaires)
          dispatch({
            type: types.AFFICHE_LIST_VOLONTAIRES_SUCCES,
            volontaires,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_VOLONTAIRES_ECHEC,
        })
       }
    }

    export const afficheVolontaire = (id) => async (dispatch) => {
        dispatch({
            type: types.AFFICHE_VOLONTAIRE_DEMANDE,
            
          })
          try {
        const volontaire = await api.afficheVolontaire(id)
        dispatch ( {
          type: types.AFFICHE_VOLONTAIRE_SUCCES,
          volontaire,
        })
    } catch (e) {
        dispatch({
          type: types.AFFICHE_VOLONTAIRE_ECHEC,
        })
       }
      }
      export const modifierVolontaire = (id, volontaire) => async (dispatch) => {
        dispatch({
            type: types.MODIFIER_VOLONTAIRE_DEMANDE,
            
          })
          try {
        const modifierVolontaire = await api.modifierVolontaire(id, volontaire)
      
        dispatch ( {
          type: types.MODIFIER_VOLONTAIRE_SUCCES,
          id,
          volontaire: modifierVolontaire,
        })
    } catch (e) {
        dispatch({
          type: types.MODIFIER_VOLONTAIRE_ECHEC,
        })
       }
      }
      export const supprimerVolontaire = (id) => async (dispatch) => {
        dispatch({
            type: types.SUPPRIMER_VOLONTAIRE_DEMANDE,
            
          })
          try {
        await api.supprimerVolontaire(id)
        dispatch ( {
          type: types.SUPPRIMER_VOLONTAIRE_SUCCES,
          id,
        })
    } catch (e) {
        dispatch({
          type: types.SUPPRIMER_VOLONTAIRE_ECHEC,
        })
       }
      }