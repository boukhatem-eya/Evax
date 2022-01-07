import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/affectation/ajoutCitoyen'
import AfficheCitoyens from "./AfficheCitoyens"
import ListCitoyens from "./ListCitoyens"

function ListCitoyen() {
  const citoyens = useSelector((state) => state.gestioncitoyen)
console.log(citoyens.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.affichecitoyens())
  }, [])
  const supprimerCitoyen =  (id) => {
    dispatch(actions.supprimerCitoyen(id))}

  const modifierCitoyen = async (id, cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen) => {
    dispatch(actions.modifierCitoyen(id, { cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen}))
  }

  return (
    <div >

          {citoyens.loading && <div>Loading ... </div>}
          {!citoyens.loading && isVisible && (
            <ListCitoyens
              citoyens={citoyens.list}
              supprimerCitoyen={supprimerCitoyen}
              modifierCitoyen={modifierCitoyen}
            />
          )}
    </div>
  )
}

export default ListCitoyen