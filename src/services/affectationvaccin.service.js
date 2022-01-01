import Axios from "axios"


export const ajouteAffectation = async (affectation_vaccin) => {
  const result = await Axios.post(
    "http://localhost:4000/api/affectationvaccin/affectationvaccin",
    affectation_vaccin
  )
  return result.data
}

export const afficheaffectation = async () => {
  // await delay(500)
  const resultat = await Axios.get(
    "http://localhost:4000/api/affectationvaccin/all"
  )
  console.log(resultat)
   return resultat.data
}