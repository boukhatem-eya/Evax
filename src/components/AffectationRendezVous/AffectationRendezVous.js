import React, { useState, useEffect } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actionscitoyen from '../../redux/actions/affectation/ajoutCitoyen'
import * as actionsvaccin from '../../redux/actions/vaccin/vaccin'
import * as actions from '../../redux/actions/affectation/affectation'
function AffectationVaccin(){
    const vaccins = useSelector((state) => state.gestionvaccin.list)
    const citoyens = useSelector((state) => state.gestioncentre.list)
    console.log(vaccins.vaccin)
    console.log(citoyens)
    const dispatch = useDispatch()
    const [vaccin_id, setVaccin_id] = useState("")
    const [citoyen_id, setcitoyen_id] = useState("")
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
    dispatch(actionscitoyen.affichecitoyens())
  }, [])
  useEffect(() => {
    dispatch(actionsvaccin.affichevaccins())
  }, [])
  const onFinish = (values) => {
    ajouteaffectation(values.vaccin, values.citoyen)
  };

  const ajouteaffectation = (vaccin, citoyen) => {
    console.log(vaccin, citoyen)
    dispatch(actions.ajouteaffectation({vaccin, citoyen}))}
  return (

<div style={{padding: 200, margin: 50}}>

        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
           <Form.Item  name="vaccin" label="Choisir vaccin">
            <Select>
            {vaccins.map( vaccin => {
             return(
    <Select.Option value={vaccin.marque_vaccin}>{vaccin.marque_vaccin}</Select.Option>
    )})}
  </Select>
  </Form.Item>
   <Form.Item  name="citoyen" label="Choisir citoyen">
            <Select>
            {citoyens.map( citoyen => {
    return(
    <Select.Option value={citoyen.cinCitoyen}>{citoyen.cinCitoyen}</Select.Option>
    )})}
  </Select>
  </Form.Item>
  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Affecter
            </Button>
            </Form.Item>
  </Form>
  </div>
  )}
  export default AffectationVaccin