/*import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/jpo/jpo'
import AfficheJpo from "./AfficheJpo"
import ListeJpos from "./ListeJpos"

function ListePageJ() {
  const jpos = useSelector((state) => state.gestionjpo)
console.log(jpos.list)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(actions.affichejpos())
  }, [])
  const supprimerJpo =  (id) => {
    dispatch(actions.supprimerJpo(id))}

  const modifierJpo = async (id, dateJpo) => {
    dispatch(actions.modifierJpo(id, { dateJpo }))
  }

  return (
    <div >

          {jpos.loading && <div>Loading ... </div>}
          {!jpos.loading && isVisible && (
            <ListeJpos
              jpos={jpos.list}
              supprimerJpo={supprimerJpo}
              modifierJpo={modifierJpo}
            />
          )}
    </div>
  )
}

export default ListePageJ
*/