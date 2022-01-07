import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/volontaire/volontaire'
import AfficheVolontaires from "./AfficheVolontaires"
import ListVolontaires from "./ListVolontaires"

function ListPageV() {
  const volontaires = useSelector((state) => state.gestionvolontaire)
  console.log(volontaires.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
 

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.afficheVolontaires())
  }, [])
  const supprimerVolontaire =  (id) => {
    dispatch(actions.supprimerVolontaire(id))}

  const modifierVolontaire = async (id, nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire,centreVolontaire, journeeVolontaire) => {
    dispatch(actions.modifierVolontaire(id, { nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire,centreVolontaire, journeeVolontaire}))
  }

  return (
    <div >

          {volontaires.loading && <div>Loading ... </div>}
          {!volontaires.loading && isVisible && (
            <ListVolontaires
              volontaires={volontaires.list}
              supprimerVolontaire={supprimerVolontaire}
              modifierVolontaire={modifierVolontaire}
            />
          )}
    </div>
  )
}

export default ListPageV
