import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions/validationInscription/validationinscription"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';


function DetailsInscription() {
  const [loading, setLoading] = useState(false)
  const inscription = useSelector((state) => (state.validationinscription && state.validationinscription.selectedInscription))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const { inscriptionId } = useParams()
  console.log(inscriptionId)

  useEffect(() => {

    dispatch(actions.afficheInscription(inscriptionId))

  }, [inscriptionId])
  return (
    <div >
          {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <Descriptions title="Informations du centre">
    <Descriptions.Item label="Gouvernant">{inscription.nom_pharmacie_francais}</Descriptions.Item>
  </Descriptions>,
  </>
    )}
    </div>
    
  )
}

export default DetailsInscription
