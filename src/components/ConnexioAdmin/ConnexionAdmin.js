import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/admin/adminconnexion"

function ConnexionAdmin(){
    const [email, setEmail] = useState("")
    const [mot_de_passe, setMot_de_passe] = useState("")
    //console.log(code , email)
    const dispatch = useDispatch()

  const onFinish = (values) => {
     Connexion(values.email, values.mot_de_passe)
    //console.log(values.email)
    //console.log(values.password)
  }
  const Connexion =  (email, mot_de_passe) => {
      console.log(email, mot_de_passe)
    dispatch(actions.login({email, mot_de_passe}))
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
        label="Mot de passe"
        name="mot_de_passe"
        rules={[
          {
            required: true,
            message: 'Svp saisi votre code!',
          },
        ]}
      >
        <Input.Password value={mot_de_passe} onChange={(e) => setMot_de_passe(e.target.value)}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Connexion
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConnexionAdmin