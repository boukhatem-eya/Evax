import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input, DatePicker  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/affectation/ajoutCitoyen'
//const {  Table, Tag, Space  } = antd;
function AfficheCitoyens({ id, cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen, supprimerCitoyen, modifierCitoyen }){
console.log({id, cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen, supprimerCitoyen, modifierCitoyen})
const dispatch = useDispatch()
const [updateMode, setUpdateMode] = useState(false)
const [mdfcinCitoyen, setMdfcinCitoyen] = useState(cinCitoyen)
const [mdfnomCitoyen, setMdnomCitoyen] = useState(nomCitoyen)
console.log(marque_vaccin)

const onFinish = (values) => {
  modifierCitoyen(id, values.cinCitoyen,values.dateNaisCitoyen,values.prenomCitoyen,values.nomCitoyen,values.sexeCitoyen,values.telephoneCitoyen,values.compagneCitoyen,values.populationCitoyen,values.gouvernoratCitoyen,values.delegationCitoyen,values.brasCitoyen,values.lotCitoyen,values.covidCitoyen)
  setUpdateMode(false)
}
useEffect(() => {
  document.title = cinCitoyen
})
useEffect(() => {
  if (updateMode) {
    dispatch(actions.setSelectedCitoyen(id))
  }
  else{
    dispatch(actions.setSelectedCitoyen(""))
  }
}, [updateMode])
// const afficheCentre =()=>{
//     dispatch(actions.afficherCentre(id))
// }
// const history = useHistory()
// const affichedetailsCentre = () => {
//   history.push(`/centre/${id}`)
// }
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return(
      <div>
    {!updateMode ? (
        <>
<Card title="Citoyen" >
    <Card type="inner" title="Citoyen" extra={<Link to={`/citoyen/${id}`}>Voir</Link>}>
      <a>{marque_vaccin}</a>
      <br/>
      <br/>
      <Button onClick={() => setUpdateMode(true)}>Modifier</Button>
      <Button onClick={() => supprimerCitoyen(id)}>Supprimer</Button>
    </Card>
    
  </Card>
  </>
  ) : (
    <div style={{padding: 200, margin: 50}}>
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
    <Form.Item name="cinCitoyen" label="cin Citoyen"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={cinCitoyen} onChange={(e) => setMdfcinCitoyen(e.target.value)}/>
          </Form.Item>
       
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        </Form.Item>
      </Form>
</div>


    )}
    </div>
  )}
export default AfficheVaccins;