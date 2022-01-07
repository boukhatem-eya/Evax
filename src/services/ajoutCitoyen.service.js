  import Axios from "axios"


    export const ajoutecitoyen = async (citoyen) => {
      const result = await Axios.post(
        "http://localhost:4000/api/citoyen/",
        citoyen
      )
      return result.data
    }
    export const affichecitoyens = async () => {
        // await delay(500)
        const resultat = await Axios.get(
          "http://localhost:4000/api/citoyen/"
        )
        console.log(resultat)
         return resultat.data
      }
    
      // export const afficheCitoyen = async (centreId) => {
      //   const result = await Axios.get(
      //     "http://localhost:4000/api/citoyen/" + centreId
      //   )
      //   return result.data
      // }