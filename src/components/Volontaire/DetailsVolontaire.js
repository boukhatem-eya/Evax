import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions/volontaire/volontaire"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';


function DetailsVolontaire() {
  const [loading, setLoading] = useState(false)
  const volontaire = useSelector((state) => (state.gestionvolontaire && state.gestionvolontaire.selectedVolontaire))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const { volontaireId } = useParams()
  console.log(volontaireId)
  // console.log("useParams(): ", useParams())
  // console.log("useLocation(): ", useLocation())

  useEffect(() => {

    // const fetchData = async () => {
    //   setLoading(true)
    //   const result = await fetchTaskById(taskId)
    //   setTask(result)
    //   setLoading(false)
    // }
    // fetchData()
    dispatch(actions.afficheVolontaire(volontaireId))

  }, [volontaireId])

  // useEffect(() => {
  //   dispatch(actions.setSelectedTaskName(task.title))
  // }, [task])
  return (
    <div >
          {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <Descriptions title="Informations du volontaire">
          <Descriptions.Item label="Nom de volontaire">{volontaire.nomVolontaire}</Descriptions.Item>
          <Descriptions.Item label="CIN de volontaire">{volontaire.cinVolontaire}</Descriptions.Item>
          <Descriptions.Item label="Téléphone de volontaire">{volontaire.telVolontaire}</Descriptions.Item>
          <Descriptions.Item label="Email de volontaire">{volontaire.emailVolontaire}</Descriptions.Item>
          <Descriptions.Item label="Centre de volontaire">{volontaire.centreVolontaire}</Descriptions.Item>
          <Descriptions.Item label="Journée de volontaire">{volontaire.journeeVolontaire}</Descriptions.Item>
      </Descriptions>,
        </>
    )}
    </div>
    
  )
}

export default DetailsVolontaire
