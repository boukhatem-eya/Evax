import Axios from "axios"


export const ajouteVolontaire = async (volontaire) => {
  const result = await Axios.post(
    "http://localhost:4000/api/volontaire/",
    volontaire
  )
  return result.data
}
export const afficheVolontaires = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/volontaire/all"
    )
    console.log(resultat)
     return resultat.data
  }

  export const modifierVolontaire = async (id, volontaire) => {
    const result = await Axios.put(
      "http://localhost:4000/api/volontaire/" + id,
        volontaire
    )
    return result.data
  }
  
  export const supprimerVolontaire = async (id) => {
    const result = await Axios.delete(
      "http://localhost:4000/api/volontaire/" + id
    )
    return result.data
  }
  
  export const afficheVolontaire = async (volontaireId) => {
    const result = await Axios.get(
      "http://localhost:4000/api/volontaire/" + volontaireId
    )
    return result.data
  }
