import Axios from "axios"


export const ajouteVaccin = async (vaccin) => {
  const result = await Axios.post(
    "http://localhost:4000/api/vaccin/ajoutevaccin",
    vaccin
  )
  return result.data
}
export const affichevaccins = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/vaccin/all"
    )
    console.log(resultat)
     return resultat.data
  }

  export const modifierVaccin = async (id, vaccin) => {
    const result = await Axios.put(
      "http://localhost:4000/api/vaccin/" + id,
      vaccin
    )
    return result.data
  }
  
  export const supprimerVaccin = async (id) => {
    const result = await Axios.delete(
      "http://localhost:4000/api/vaccin/" + id
    )
    return result.data
  }
  
  export const afficheVaccin = async (centreId) => {
    const result = await Axios.get(
      "http://localhost:4000/api/vaccin/" + centreId
    )
    return result.data
  }
