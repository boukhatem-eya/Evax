/*import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../redux/actions/jpo/jpo"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';


function DetailsJpo() {
  const [loading, setLoading] = useState(false)
  const jpo = useSelector((state) => (state.gestionjpo && state.gestionjpo.selectedJpo))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const { jpoId } = useParams()
  console.log(jpoId)
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
    dispatch(actions.afficheJpo(jpoId))

  }, [jpoId])

  // useEffect(() => {
  //   dispatch(actions.setSelectedTaskName(task.title))
  // }, [task])
  return (
    <div >
          {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <Descriptions title="Informations du jpo">
        <Descriptions.Item label="Date de journée porte ouverte">{jpo.marque_jpo}</Descriptions.Item>
      </Descriptions>,
      </>
    )}
    </div>
    
  )
}

export default DetailsJpo
*/