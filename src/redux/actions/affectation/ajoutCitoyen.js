import * as types from "../../types"
import * as api from "../../../services/ajoutCitoyen.service"


export const setSelectedCitoyen = (id) => ({
    type: types.SET_SELECTED_CITOYEN,
    id
  })


export const ajoutecitoyen = (citoyen) => async (dispatch) => {
  dispatch({
    type: types.AJOUTE_CITOYEN_DEMANDE,
    
  })
     try {
      const nouveauCitoyen = await api.ajoutecitoyen(citoyen)

      dispatch({
        type: types.AJOUTE_CITOYEN_SUCCES,
        citoyen: nouveauCitoyen,
      })
     } catch (e) {
      dispatch({
        type: types.AJOUTE_CITOYEN_ECHEC,
      })
     }
 
}

export const affichecitoyens = () => async (dispatch) => {
    dispatch({
      type: types.AFFICHE_LIST_CITOYENS_DEMANDE,
      
    })
       try {
         const citoyens = await api.affichecitoyens()
         console.log(citoyens)
          dispatch({
            type: types.AFFICHE_LIST_CITOYENS_SUCCES,
            citoyens,
          })
       } catch (e) {
        dispatch({
          type: types.AFFICHE_LIST_CITOYENS_ECHEC,
        })
       }
    }

//     export const afficheCitoyen = (id) => async (dispatch) => {
//         dispatch({
//             type: types.AFFICHE_CITOYEN_DEMANDE,
            
//           })
//           try {
//         const citoyen = await api.afficheCitoyen(id)
//         dispatch ( {
//           type: types.AFFICHE_CITOYEN_SUCCES,
//           citoyen,
//         })
//     } catch (e) {
//         dispatch({
//           type: types.AFFICHE_CITOYEN_ECHEC,
//         })
//        }
//       }