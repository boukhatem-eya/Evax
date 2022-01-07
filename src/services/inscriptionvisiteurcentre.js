
import Axios from "axios"


// export const ajouteInscription = async (inscription) => {
//   const result = await Axios.post(
//     "http://localhost:4000/api/inscription_visiteur_centre/",
//     inscription
//   )
//   return result.data
// }

export const ajouteInscriptionCentre = async (inscription_visiteur_centre) => {
  const result = await Axios.post(
    "http://localhost:4000/api/inscription_visiteur_centre/",
    inscription_visiteur_centre
  )
  return result.data
}