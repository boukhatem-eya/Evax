import Axios from "axios"


export const Raporterrendezvous = async (inscription) => {
  const result = await Axios.put(
    "http://localhost:4000/api/raporter_rendezvous/",
    inscription
  )
  return result.data
}
