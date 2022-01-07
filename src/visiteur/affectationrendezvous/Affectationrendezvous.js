import React, { useState, useEffect } from "react";
import { Select, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actionsvisiteur from '../../redux/actions/visiteur/visiteur'
import * as actions from '../../redux/actions/affectationvous/affectationrendezvous'
function Affectationrendezvous(){
    const visiteurs = useSelector((state) => state.visiteurs.list)
    console.log(visiteurs)
    const dispatch = useDispatch()
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

  useEffect(() => {
    dispatch(actionsvisiteur.affichevisiteurs())
  }, [])
  const onFinish = (values) => {
    ajouteaffectationrendezvous(values.visiteur, values.rendez_vousvaccin)
  };

  const ajouteaffectationrendezvous = (visiteur, rendez_vousvaccin) => {
    console.log(visiteur, rendez_vousvaccin)
    dispatch(actions.Affectationrendezvous({visiteur, rendez_vousvaccin}))}
  return (

<div style={{padding: 200, margin: 50}}>

        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
           <Form.Item  name="visiteur" label="Choisir cityoen">
            <Select>
            {visiteurs.map( visiteur => {
             return(
    <Select.Option value={visiteur.prenom}>{visiteur.prenom}</Select.Option>
    )})}
  </Select>
  </Form.Item>
  <Form.Item name="rendez_vousvaccin" label="Rendez_vous"   rules={[
              {
                required: true,
              },
            ]}>
              <Input />
          </Form.Item>
  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Affecter
            </Button>
            </Form.Item>
  </Form>
  </div>
  )}
  export default Affectationrendezvous