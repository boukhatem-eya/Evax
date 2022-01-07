import * as types from "../../types"
import * as api from "../../../services/jpo.service"


export const setSelectedJpo = (id) => ({
    type: types.SET_SELECTED_JPO ,
    id
  })


export const ajoutejpo = (jpo) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_JPO_DEMANDE,
    
  })
     try {
      const nouveauJpo = await api.ajouteJpo(jpo)

      dispatch({
        type: types.AJOUTE_JPO_SUCCES,
        jpo: nouveauJpo,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_JPO_ECHEC,
      })
     }
 
}

export const afficheJpos = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_JPOS_DEMANDE,
      
    })
       try {
         const jpos = await api.afficheJpos()
         console.log(jpos)
          dispatch({
            type: types.AFFICHE_LIST_JPOS_SUCCES,
            jpos,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_JPOS_ECHEC,
        })
       }
    }

    export const afficheJpo = (id) => async (dispatch) => {
        dispatch({
            type: types.AFFICHE_JPO_DEMANDE,
            
          })
          try {
        const jpo = await api.afficheJpo(id)
        dispatch ( {
          type: types.AFFICHE_JPO_SUCCES,
          jpo,
        })
    } catch (e) {
        dispatch({
          type: types.AFFICHE_JPO_ECHEC,
        })
       }
      }
      export const modifierJpo = (id, jpo) => async (dispatch) => {
        dispatch({
            type: types.MODIFIER_JPO_DEMANDE,
            
          })
          try {
        const modifierJpo = await api.modifierJpo(id, jpo)
      
        dispatch ( {
          type: types.MODIFIER_JPO_SUCCES,
          id,
          jpo: modifierJpo,
        })
    } catch (e) {
        dispatch({
          type: types.MODIFIER_JPO_ECHEC,
        })
       }
      }
      export const supprimerJpo = (id) => async (dispatch) => {
        dispatch({
            type: types.SUPPRIMER_JPO_DEMANDE,
            
          })
          try {
        await api.supprimerJpo(id)
        dispatch ( {
          type: types.SUPPRIMER_JPO_SUCCES,
          id,
        })
    } catch (e) {
        dispatch({
          type: types.SUPPRIMER_JPO_ECHEC,
        })
       }
      }