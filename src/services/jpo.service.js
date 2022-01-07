import Axios from "axios"


export const ajouteJpo = async (jpo) => {
  const result = await Axios.post(
    "http://localhost:4000/api/jpo/",
    jpo
  )
  return result.data
}
export const afficheJpos = async () => {
    // await delay(500)
    const resultat = await Axios.get(
      "http://localhost:4000/api/jpo/all"
    )
    console.log(resultat)
     return resultat.data
  }

  export const modifierJpo = async (id, jpo) => {
    const result = await Axios.put(
      "http://localhost:4000/api/jpo/" + id,
      jpo
    )
    return result.data
  }
  
  export const supprimerJpo = async (id) => {
    const result = await Axios.delete(
      "http://localhost:4000/api/jpo/" + id
    )
    return result.data
  }
  
  export const afficheJpo = async (jpoId) => {
    const result = await Axios.get(
      "http://localhost:4000/api/jpo/" + jpoId
    )
    return result.data
  }
