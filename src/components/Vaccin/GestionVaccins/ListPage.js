import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/vaccin/vaccin'
import AfficheVaccins from "./AfficheVaccins"
import ListVaccins from "./ListVaccins"

function ListPage() {
  const vaccins = useSelector((state) => state.gestionvaccin)
console.log(vaccins.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.affichevaccins())
  }, [])
  const supprimerVaccin =  (id) => {
    dispatch(actions.supprimerVaccin(id))}

  const modifierVaccin = async (id, marque_vaccin, date_production, date_validite, stocke) => {
    dispatch(actions.modifierVaccin(id, { marque_vaccin, date_production, date_validite, stocke }))
  }

  return (
    <div >

          {vaccins.loading && <div>Loading ... </div>}
          {!vaccins.loading && isVisible && (
            <ListVaccins
              vaccins={vaccins.list}
              supprimerVaccin={supprimerVaccin}
              modifierVaccin={modifierVaccin}
            />
          )}
    </div>
  )
}

export default ListPage
