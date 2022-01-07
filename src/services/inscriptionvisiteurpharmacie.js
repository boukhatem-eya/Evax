
import Axios from "axios"


export const ajouteInscription = async (inscription) => {
  const result = await Axios.post(
    "http://localhost:4000/api/inscription_visiteur_pharmacie/",
    inscription
  )
  return result.data
}
