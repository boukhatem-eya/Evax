import React, { useState, useEffect } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import * as actionscentre from '../../../redux/actions/centre/centre'
import * as actionsvaccin from '../../../redux/actions/vaccin/vaccin'
import * as actions from '../../../redux/actions/affectation/affectation'
function AffectationVaccin(){
    const vaccins = useSelector((state) => state.gestionvaccin.list)
    const centres = useSelector((state) => state.gestioncentre.list)
    console.log(vaccins.vaccin)
    console.log(centres)
    const dispatch = useDispatch()
    const [marque_vaccin, setMarque_vaccin] = useState("")
    const [centre_de_vaccination, setCentre_de_vaccination] = useState("")
    useEffect(() => {
      document.title = "Affectation vaccins"
    })
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
    dispatch(actionscentre.affichcentres())
  }, [])
  useEffect(() => {
    dispatch(actionsvaccin.affichevaccins())
  }, [])
  const onFinish = (values) => {
    ajouteaffectation(values.marque_vaccin, values.centre_de_vaccination)
  };

  const ajouteaffectation = (marque_vaccin, centre_de_vaccination) => {
    console.log(marque_vaccin, centre_de_vaccination)
    dispatch(actions.ajouteaffectation({marque_vaccin, centre_de_vaccination}))}
  return (

<div style={{padding: 200, margin: 50}}>
<Button>
         <Link to='/Tableau de bord'>Retour</Link></Button>
         <br />
<br/>

        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
           <Form.Item  name="marque_vaccin" label="Choisir vaccin">
            <Select>
            {vaccins.map( vaccin => {
             return(
    <Select.Option value={vaccin.marque_vaccin}>{vaccin.marque_vaccin}</Select.Option>
    )})}
  </Select>
  </Form.Item>
   <Form.Item  name="centre_de_vaccination" label="Choisir centre">
            <Select>
            {centres.map( centre => {
    return(
    <Select.Option value={centre.libelle_fr}>{centre.libelle_fr}</Select.Option>
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