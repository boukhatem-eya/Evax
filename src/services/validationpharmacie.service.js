import Axios from "axios"

export const affichepharmacies = async () => {
  // await delay(500)
  const resultat = await Axios.get(
    "http://localhost:4000/api/pharmacie_de_vaccination/all"
  )
  console.log(resultat)
   return resultat.data
}
export const modifierPharmacie = async (id, pharmacie_de_vaccination) => {
  const result = await Axios.put(
    "http://localhost:4000/api/pharmacie_de_vaccination/" + id,
    pharmacie_de_vaccination
  )
  return result.data
}

export const supprimerPharmacie = async (id) => {
  const result = await Axios.delete(
    "http://localhost:4000/api/pharmacie_de_vaccination/" + id
  )
  return result.data
}

export const affichePharmacie = async (pharmacieId) => {
  const result = await Axios.get(
    "http://localhost:4000/api/pharmacie_de_vaccination/" + pharmacieId
  )
  return result.data
}
