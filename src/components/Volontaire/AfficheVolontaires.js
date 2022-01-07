import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input, DatePicker  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/volontaire/volontaire'
function AfficheVolontaires({ id, nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire, centreVolontaire, journeeVolontaire, supprimerVolontaire, modifierVolontaire }){
console.log({id, nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire, centreVolontaire, journeeVolontaire, supprimerVolontaire, modifierVolontaire})
const dispatch = useDispatch()
const [updateMode, setUpdateMode] = useState(false)
const [mdfnomVolontaire, setMdfnomVolontaire] = useState(nomVolontaire)
const [mdfcinVolontaire, setMdfcinVolontaire] = useState(cinVolontaire)
const [mdftelVolonatire, setMdftelVolontaire] = useState(telVolontaire)
const [mdfemailVolontaire, setMdfemailVolontaire] = useState(emailVolontaire)
const [mdfcentreVolontaire, setMdfcentreVolontaire] = useState(centreVolontaire)
const [mdfjourneeVolontaire, setMdfjourneeVolontaire] = useState(journeeVolontaire)

console.log(nomVolontaire)

const onFinish = (values) => {
  modifierVolontaire(id, values.nomVolontaire, values.cinVolontaire, values.telVolontaire, values.emailVolontaire, values.centreVolontaire, values.journeeVolontaire)
  setUpdateMode(false)
}
useEffect(() => {
  document.title = nomVolontaire
})
useEffect(() => {
  if (updateMode) {
    dispatch(actions.setSelectedVolontaire(id))
  }
  else{
    dispatch(actions.setSelectedVolontaire(""))
  }
}, [updateMode])

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
<Card title="Volontaire" >
    <Card type="inner" title="Volontaire" extra={<Link to={`/volontaire/${id}`}>Voir</Link>}>
      <a>{nomVolontaire}</a>
      <br/>
      <a>{cinVolontaire}</a>
      <br/>
      <a>{telVolontaire}</a>
      <br/>
      <a>{emailVolontaire}</a>
      <br/>
      <a>{centreVolontaire}</a>
      <br/>
      <Button onClick={() => setUpdateMode(true)}>Modifier</Button>
      <Button onClick={() => supprimerVolontaire(id)}>Supprimer</Button>
    </Card>
    
  </Card>
  </>
  ) : (
    <div style={{padding: 200, margin: 50}}>
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
          <Form.Item name="nomVolontaire" label="Nom de volontaire"
          rules={[
            {
              required: true,
            },
            ]}>
            <Input value={mdfnomVolontaire} onChange={(e) => setMdfnomVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="cinVolontaire" label="Cin de volontaire">
             rules={[
            {
              required: true,
            },
            ]}>
            <Input value={mdfcinVolontaire} onChange={(e) => setMdfcinVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="telVolontaire" label="Numéro de téléphone de volontaire">
             rules={[
            {
              required: true,
            },
            ]}>
            <Input value={mdftelVolonatire} onChange={(e) => setMdftelVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="emailVolontaire" label="Email de volontaire"
            rules={[
            {
              required: true
            },
            ]}>
            <Input value={mdfemailVolontaire} onChange={(e) => setMdfemailVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="centreVolontaire" label="Centre de volontaire"
            rules={[
            {
              required: true
            },
            ]}>
            <Input value={mdfcentreVolontaire} onChange={(e) => setMdfcentreVolontaire(e.target.value)}/>
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
export default AfficheVolontaires;