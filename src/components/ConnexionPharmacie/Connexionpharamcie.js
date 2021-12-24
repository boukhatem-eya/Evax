import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/connexion/connexion"

function Connexionpharmacie(){
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    //console.log(code , email)
    const dispatch = useDispatch()

  const onFinish = (values) => {
     Connexion(values.email, values.uniqueString)
    //console.log(values.email)
    //console.log(values.password)
  }
  const Connexion =  (email, uniqueString) => {
      console.log(email, uniqueString)
    dispatch(actions.login({email, uniqueString}))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Svp saisi votre email !',
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Code d'acces"
        name="uniqueString"
        rules={[
          {
            required: true,
            message: 'Svp saisi votre code!',
          },
        ]}
      >
        <Input.Password value={code} onChange={(e) => setCode(e.target.value)}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Connexionpharmacie