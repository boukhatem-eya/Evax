import Axios from "axios"


export const ajouteAffectationrendezvous = async (affectation_rendezvous) => {
  const result = await Axios.post(
    "http://localhost:4000/api/affectationrendez_vous/",
    affectation_rendezvous
  )
  return result.data
}