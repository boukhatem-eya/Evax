import Axios from "axios"


export const ajouteCentre = async (centre_de_vaccination) => {
  const result = await Axios.post(
    "http://localhost:4000/api/centre_de_vaccination/",
    centre_de_vaccination
  )
  return result.data
}
export const affichecentres = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/centre_de_vaccination/all"
    )
    console.log(resultat)
     return resultat.data
  }

  export const modifierCentre = async (id, centre_de_vaccination) => {
    const result = await Axios.put(
      "http://localhost:4000/api/centre_de_vaccination/" + id,
      centre_de_vaccination
    )
    return result.data
  }
  
  export const supprimerCentre = async (id) => {
    const result = await Axios.delete(
      "http://localhost:4000/api/centre_de_vaccination/" + id
    )
    return result.data
  }
  
  export const afficheCentre = async (centreId) => {
    const result = await Axios.get(
      "http://localhost:4000/api/centre_de_vaccination/" + centreId
    )
    return result.data
  }
