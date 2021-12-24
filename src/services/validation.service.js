import Axios from "axios"


export const ajouteValidation = async (validation) => {
  const result = await Axios.post(
    "http://localhost:4000/api/validation/",
    validation
  )
  return result.data
}

export const afficherinscriptions = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/validation/all"
    )
    console.log(resultat)
     return resultat.data
  }

export const afficheInscription = async (inscriptionId) => {
    const result = await Axios.get(
      "http://localhost:4000/api/validation/" + inscriptionId
    )
    return result.data
  }
