import * as types from "../../types"
import * as api from "../../../services/vaccin.service"
import {
  toast
} from 'react-toastify';


export const setSelectedVaccin = (id) => ({
    type: types.SET_SELECTED_VACCIN,
    id
  })


export const ajoutevaccin = (vaccin) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_VACCIN_DEMANDE,
    
  })
     try {
      const nouveauVacin = await api.ajouteVaccin(vaccin)

      dispatch({
        type: types.AJOUTE_VACCIN_SUCCES,
        vaccin: nouveauVacin,
      })
     } catch (e){
      console.log(e)
      dispatch({
        type: types.AJOUTE_VACCIN_ECHEC,
      })
     }
 
}

export const affichevaccins = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_VACCINS_DEMANDE,
      
    })
       try {
         const vaccins = await api.affichevaccins()
         console.log(vaccins)
          dispatch({
            type: types.AFFICHE_LIST_VACCINS_SUCCES,
            vaccins,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_VACCINS_ECHEC,
        })
       }
    }

    export const afficheVaccin = (id) => async (dispatch) => {
        dispatch({
            type: types.AFFICHE_VACCIN_DEMANDE,
            
          })
          try {
        const vaccin = await api.afficheVaccin(id)
        dispatch ( {
          type: types.AFFICHE_VACCIN_SUCCES,
          vaccin,
        })
    } catch (e) {
        dispatch({
          type: types.AFFICHE_VACCIN_ECHEC,
        })
       }
      }
      export const modifierVaccin = (id, vaccin) => async (dispatch) => {
        dispatch({
            type: types.MODIFIER_VACCIN_DEMANDE,
            
          })
          try {
        const modifierVaccin = await api.modifierVaccin(id, vaccin)
      
        dispatch ( {
          type: types.MODIFIER_VACCIN_SUCCES,
          id,
          vaccin: modifierVaccin,
        })
    } catch (e) {
        dispatch({
          type: types.MODIFIER_VACCIN_ECHEC,
        })
       }
      }
      export const supprimerVaccin = (id) => async (dispatch) => {
        dispatch({
            type: types.SUPPRIMER_VACCIN_DEMANDE,
            
          })
          try {
        await api.supprimerVaccin(id)
        dispatch ( {
          type: types.SUPPRIMER_VACCIN_SUCCES,
          id,
        })
    } catch (e) {
        dispatch({
          type: types.SUPPRIMER_VACCIN_ECHEC,
        })
       }
      }