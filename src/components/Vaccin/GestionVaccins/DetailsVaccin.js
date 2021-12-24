import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../redux/actions/vaccin/vaccin"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';


function DetailsVaccin() {
  const [loading, setLoading] = useState(false)
  const vaccin = useSelector((state) => (state.gestionvaccin && state.gestionvaccin.selectedVaccin))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const { vaccinId } = useParams()
  console.log(vaccinId)
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
    dispatch(actions.afficheVaccin(vaccinId))

  }, [vaccinId])

  // useEffect(() => {
  //   dispatch(actions.setSelectedTaskName(task.title))
  // }, [task])
  return (
    <div >
          {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <Descriptions title="Informations du vaccin">
    <Descriptions.Item label="Marque de vaccin">{vaccin.marque_vaccin}</Descriptions.Item>
    <Descriptions.Item label="Date de production">{vaccin.date_production}</Descriptions.Item>
    <Descriptions.Item label="Date de validité">{vaccin.date_validite}</Descriptions.Item>
    <Descriptions.Item label="Stocke">
     {vaccin.stocke}
    </Descriptions.Item>
  </Descriptions>,
  </>
    )}
    </div>
    
  )
}

export default DetailsVaccin
