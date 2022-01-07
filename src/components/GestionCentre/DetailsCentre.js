import React, { useEffect, useState } from "react"
// import { fetchTaskById } from "../../services/tasks.service"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions/centre/centre"
import { Descriptions, Button } from 'antd';
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';


function DetailsCentre() {
  
  const centre = useSelector((state) => (state.gestioncentre && state.gestioncentre.selectedCentre))
  // const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const { centreId } = useParams()
  console.log(centreId)
  useEffect(() => {
    document.title = "Voir Détails"
  })
  useEffect(() => {

    // const fetchData = async () => {
    //   setLoading(true)
    //   const result = await fetchTaskById(taskId)
    //   setTask(result)
    //   setLoading(false)
    // }
    // fetchData()
    dispatch(actions.afficherCentre(centreId))

  }, [centreId])

  // useEffect(() => {
  //   dispatch(actions.setSelectedTaskName(task.title))
  // }, [task])
  return (
    <div >
      <Button>
         <Link to='/AfficheListCentres'>Retour</Link></Button>
         <br />
<br/>
        
      <Descriptions title="Informations du centre">
    <Descriptions.Item label="Gouvernant">{centre.gouvernant}</Descriptions.Item>
    <Descriptions.Item label="Delegation">{centre.delegation}</Descriptions.Item>
    <Descriptions.Item label="Commune">{centre.commune}</Descriptions.Item>
    <Descriptions.Item label="Libellé en farnçais">{centre.libelle_fr}</Descriptions.Item>
    <Descriptions.Item label="Libellé en arabe">{centre.libelle_arabe}</Descriptions.Item>
    <Descriptions.Item label="Type centre de vaccination">{centre.type_centre_vaccination}</Descriptions.Item>
    <Descriptions.Item label="Catégorie">{centre.categorie}</Descriptions.Item>
    <Descriptions.Item label="Adresse en arabe">{centre.adresse_arabe}</Descriptions.Item>
    <Descriptions.Item label="Adresse en français">{centre.adresse_francais}</Descriptions.Item>
    <Descriptions.Item label="Nombre de posts de vaccination">{centre.nombre_post_vaccination}</Descriptions.Item>
    <Descriptions.Item label="Capacité d'accueil">
     {centre.capacite_accueil}
    </Descriptions.Item>
    <Descriptions.Item label="Stocke">
     {centre.stocke}
    </Descriptions.Item>
  </Descriptions>,
  
    </div>
    
  )
}

export default DetailsCentre
