/*import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input, DatePicker  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/jpo/jpo'
//const {  Table, Tag, Space  } = antd;
function AfficheJpo({ id, dateJpo, supprimerJpo, modifierJpo  }){
console.log({id, dateJpo})
const dispatch = useDispatch()
const [updateMode, setUpdateMode] = useState(false)
const [mdfdateJpo, setMdfdateJpo] = useState(dateJpo)
console.log(dateJpo)

const onFinish = (values) => {
  modifierJpo(id, dateJpo)
  setUpdateMode(false)
}
useEffect(() => {
  document.title = dateJpo
})
useEffect(() => {
  if (updateMode) {
    dispatch(actions.setSelectedJpo(id))
  }
  else{
    dispatch(actions.setSelectedJpo(""))
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
    <Card title="Jpo" >
    <Card type="inner" title="jpo" extra={<Link to={`/jpo/${id}`}>Voir</Link>}>
      <a>{dateJpo}</a>
      <br/>
      <br/>
      <Button onClick={() => setUpdateMode(true)}>Modifier</Button>
      <Button onClick={() => supprimerJpo(id)}>Supprimer</Button>
    </Card>
    
  </Card>
  </>
  ) : (
    <div style={{padding: 200, margin: 50}}>
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
   
          <Form.Item name="dateJpo" label="Date de journée porte ouverte">
            <DatePicker />
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
export default AfficheJpo;*/