import React, { useState } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/volontaire/volontaire"

function FormulaireAjouteVolontaire (){
    const dispatch = useDispatch()
  const [nomVolontaire, setNomVolontaire] = useState("")
  const [cinVolontaire, setCinVolontaire] = useState("")
  const [telVolontaire, setTelVolontaire] = useState("")
  const [emailVolontaire, setEmailVolontaire] = useState("")
  const [centreVolontaire, setCentreVolontaire] = useState("")
 
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
      const onFinish = (values) => {
        ajoutevolontaire(values.nomVolontaire, values.cinVolontaire, values.telVolontaire, values.emailVolontaire, values.centreVolontaire)
      };

      const ajoutevolontaire = (nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire, centreVolontaire) => {
        console.log(nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire, centreVolontaire)
        dispatch(actions.ajoutevolontaire({nomVolontaire, cinVolontaire, telVolontaire, emailVolontaire, centreVolontaire}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
           
          <Form.Item name="nomVolontaire" label="nom volontaire"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input value={nomVolontaire} onChange={(e) => setNomVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="cinVolontaire" label="Cin volontaire"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input value={cinVolontaire} onChange={(e) => setNomVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="telVolontaire" label="téléphone de volontaire"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input value={telVolontaire} onChange={(e) => setTelVolontaire(e.target.value)}/>
          </Form.Item>


          <Form.Item name="emailVolontaire" label="email volontaire"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input value={emailVolontaire} onChange={(e) => setEmailVolontaire(e.target.value)}/>
          </Form.Item>

          <Form.Item name="centreVolontaire" label="centre volontaire"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input value={centreVolontaire} onChange={(e) => setCentreVolontaire(e.target.value)}/>
          </Form.Item>

         

          
          
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
            </Form.Item>
          </Form>
  </div>
   
    )
}
export default FormulaireAjouteVolontaire