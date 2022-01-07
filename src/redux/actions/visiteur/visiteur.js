import * as types from "../../types"
import * as api from "../../../services/rendezvous.service"

export const affichevisiteurs = () => async (dispatch) => {
dispatch({
      type: types.AFFICHE_LIST_VISITEURS_DEMANDE,
      
    })
       try {
         const visiteurs = await api.affichevisiteurs()
         console.log(visiteurs)
          dispatch({
            type: types.AFFICHE_LIST_VISITEURS_SUCCES,
            visiteurs,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_VISITEURS_ECHEC,
        })
       }
    }