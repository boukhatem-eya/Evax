import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/validation/validation'
import ListPharmacies from "./ListPharamcies"

function AfficheList() {
  const pharmacies = useSelector((state) => state.gestionpharmacie)
console.log(pharmacies.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.affichepharmacies())
  }, [])
  const supprimerPharmacie =  (id) => {
    dispatch(actions.supprimerPharmacie(id))}

  const modifierPharmacie = async (id, gouvernant,
    libelle_fr,
    libelle_arabe,
    type_centre_vaccination,
    categorie,
    nombre_post_vaccination,
    id_inscription_pharmacie,
    stocke,
    email) => {
    dispatch(actions.modifierPharmacie(id, { gouvernant,
        libelle_fr,
        libelle_arabe,
        type_centre_vaccination,
        categorie,
        nombre_post_vaccination,
        id_inscription_pharmacie,
        stocke,
        email }))
  }

  return (
    <div >

          {pharmacies.loading && <div>Loading ... </div>}
          {!pharmacies.loading && isVisible && (
            <ListPharmacies
              pharmacies={pharmacies.list}
              supprimerPharmacie={supprimerPharmacie}
              modifierPharmacie={modifierPharmacie}
            />
          )}
    </div>
  )
}

export default AfficheList
