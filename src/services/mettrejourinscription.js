
import Axios from "axios"


export const mettrejourInscription = async (inscription) => {
  const result = await Axios.post(
    "http://localhost:4000/api/mettrejour_inscription/",
    inscription
  )
  return result.data
}
