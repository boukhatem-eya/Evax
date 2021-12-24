import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/validationInscription/validationinscription'
import ListInscription from "./ListInscription"

function ListPageInscription() {
  const inscriptions = useSelector((state) => state.validationinscription)
console.log(inscriptions.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.afficherinscriptions())
  }, [])
  const validerInscription =  (id_inscription_pharmacie, email) => {
    dispatch(actions.ajouteValidation({id_inscription_pharmacie, email}))}

//   const modifierCentre = async (id, gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke) => {
//     dispatch(actions.modifierCentre(id, { gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke }))
//   }

  return (
    <div >

          {inscriptions.loading && <div>Loading ... </div>}
          {!inscriptions.loading && isVisible && (
            <ListInscription
              inscriptions={inscriptions.list}
              validerInscription={validerInscription}
            />
          )}
    </div>
  )
}

export default ListPageInscription
