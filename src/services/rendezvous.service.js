import Axios from "axios"


export const affichevisiteurs = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/inscription_visiteur_centre/all"
    )
    console.log(resultat)
     return resultat.data
  }

export const ajouteRendezvous = async (rendez_vous) => {
  const result = await Axios.post(
    "http://localhost:4000/api/affectationrendez_vous/",
    rendez_vous
  )
  return result.data
}

export const afficherendezvous = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/affectationrendez_vous/all"
    )
    console.log(resultat)
     return resultat.data
  }