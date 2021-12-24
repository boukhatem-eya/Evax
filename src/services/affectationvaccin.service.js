import Axios from "axios"


export const ajouteAffectation = async (affectation_vaccin) => {
  const result = await Axios.post(
    "http://localhost:4000/api/affectationvaccin/affectationvaccin",
    affectation_vaccin
  )
  return result.data
}