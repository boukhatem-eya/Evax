import inscriptionpharmacies from "./inscriptionpharmacies"
import gestionpharmacie from "./gestionpharmacie"
import { combineReducers } from "redux"
import connexionpharamcie from './connexionpharmacie'
import gestioncentre from "./gestioncentre"
import adminconnexion from "./adminconnexion"
import gestionvaccin from "./gestionvaccin"
import affectationvaccin from "./affectationvaccin"
import validationinscription from "./validationinscription"


const rootReducer = () =>{
 return combineReducers({
    inscriptionpharmacies,
    gestionpharmacie,
    connexionpharamcie,
    gestioncentre,
    adminconnexion,
    gestionvaccin,
    affectationvaccin,
    validationinscription,
  })
}

export default rootReducer
