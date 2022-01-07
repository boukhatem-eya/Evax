import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/connexionvisiteur/connexionvisiteur"
import Profilvisiteur from "../ProfilVisiteur/Profilvisiteur"
function Connexionvisiteur(){
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
   
    const dispatch = useDispatch()

  const onFinish = (values) => {
     Connexion(values.email, values.uniqueString)

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
        span: 4,
      }}
      wrapperCol={{
        span: 12,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Numéro d'inscription EVAX"
        name="email"
        rules={[
          {
            required: true,
            message: 'Pouvez-vous saisir votre email numéro d inscription EVAX!',
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Code de vérification"
        name="uniqueString"
        rules={[
          {
            required: true,
            message: 'Pouvez-vous saisir votre code de vérification!',
          },
        ]}
      >
        <Input.Password value={code} onChange={(e) => setCode(e.target.value)}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 12,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={Profilvisiteur}>
          Connexion
        </Button>

        <Button type="danger" htmlType="reset">
          Annuler
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Connexionvisiteur