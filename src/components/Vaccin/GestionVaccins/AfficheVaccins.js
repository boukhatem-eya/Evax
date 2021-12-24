import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input, DatePicker  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/vaccin/vaccin'
//const {  Table, Tag, Space  } = antd;
function AfficheVaccins({ id, marque_vaccin, date_production, date_validite, stocke, supprimerVaccin, modifierVaccin }){
console.log({id, marque_vaccin, date_production, date_validite, stocke, supprimerVaccin, modifierVaccin})
const dispatch = useDispatch()
const [updateMode, setUpdateMode] = useState(false)
const [mdfmarque_vaccin, setMdfmarque_vaccin] = useState(marque_vaccin)
const [mdfstocke, setMdfstocke] = useState(stocke)
console.log(marque_vaccin)

const onFinish = (values) => {
  modifierVaccin(id, values.marque_vaccin, values.date_production, values.date_validite, values.stocke)
  setUpdateMode(false)
}
useEffect(() => {
  document.title = marque_vaccin
})
useEffect(() => {
  if (updateMode) {
    dispatch(actions.setSelectedVaccin(id))
  }
  else{
    dispatch(actions.setSelectedVaccin(""))
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
<Card title="Vaccin" >
    <Card type="inner" title="Vaccin" extra={<Link to={`/vaccin/${id}`}>Voir</Link>}>
      <a>{marque_vaccin}</a>
      <br/>
      <br/>
      <Button onClick={() => setUpdateMode(true)}>Modifier</Button>
      <Button onClick={() => supprimerVaccin(id)}>Supprimer</Button>
    </Card>
    
  </Card>
  </>
  ) : (
    <div style={{padding: 200, margin: 50}}>
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
    <Form.Item name="marque_vaccin" label="Marque de vaccin"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={marque_vaccin} onChange={(e) => setMdfmarque_vaccin(e.target.value)}/>
          </Form.Item>
          <Form.Item name="date_production" label="Date de production">
        <DatePicker />
      </Form.Item>
      <Form.Item name="date_validite" label="Date de validation">
        <DatePicker />
      </Form.Item>
          <Form.Item name="stocke" label="Stocke"
         rules={[
            {
              type: 'number',
              required: true
            },
          ]}>
        
            <InputNumber />
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