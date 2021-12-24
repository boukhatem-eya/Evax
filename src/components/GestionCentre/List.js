import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/centre/centre'
import AfficheCentres from "./AfficheCentres"
import ListCentres from "./ListCentres"

function List() {
  const centres = useSelector((state) => state.gestioncentre)
console.log(centres.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.affichcentres())
  }, [])
  const supprimerCentre =  (id) => {
    dispatch(actions.supprimerCentre(id))}

  const modifierCentre = async (id, gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke) => {
    dispatch(actions.modifierCentre(id, { gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke }))
  }

  return (
    <div >

          {centres.loading && <div>Loading ... </div>}
          {!centres.loading && isVisible && (
            <ListCentres
              centres={centres.list}
              supprimerCentre={supprimerCentre}
              modifierCentre={modifierCentre}
            />
          )}
    </div>
  )
}

export default List
