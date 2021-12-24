import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../redux/actions/validation/validation"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';


function DetailsPharmacie() {
  const [loading, setLoading] = useState(false)
  const pharmacie = useSelector((state) => (state.gestionpharmacie && state.gestionpharmacie.selectedPharmacie))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()
console.log(pharmacie)
  const { pharmacieId } = useParams()
  console.log(pharmacieId)
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
    dispatch(actions.afficherPharmacie(pharmacieId))

  }, [pharmacieId])

  // useEffect(() => {
  //   dispatch(actions.setSelectedTaskName(task.title))
  // }, [task])
  return (
    <div >
          {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <Descriptions title="Informations du pharmacie">
    <Descriptions.Item label="Gouvernant">{pharmacie.gouvernant}</Descriptions.Item>
    <Descriptions.Item label="Libellé en farnçais">{pharmacie.libelle_fr}</Descriptions.Item>
    <Descriptions.Item label="Libellé en arabe">{pharmacie.libelle_arabe}</Descriptions.Item>
    <Descriptions.Item label="Type centre de vaccination">{pharmacie.type_centre_vaccination}</Descriptions.Item>
    <Descriptions.Item label="Catégorie">{pharmacie.categorie}</Descriptions.Item>
    <Descriptions.Item label="Nombre de posts de vaccination">{pharmacie.nombre_post_vaccination}</Descriptions.Item>
    <Descriptions.Item label="Id inscription pharmacie">{pharmacie.id_inscription_pharmacie}</Descriptions.Item>
    <Descriptions.Item label="Stocke">
     {pharmacie.stocke}
    </Descriptions.Item>
    <Descriptions.Item label="Email">
     {pharmacie.email}
    </Descriptions.Item>
  </Descriptions>,
  </>
    )}
    </div>
    
  )
}

export default DetailsPharmacie
