import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Select,Form, Input, InputNumber, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/affectation/ajoutCitoyen"

function AjoutCitoyen(){
  const dispatch = useDispatch()
  const [cinCitoyen, setCinCitoyen] = useState("")
  const [dateNaisCitoyen, setDateNaisCitoyen] = useState("")
  const [prenomCitoyen, setPrenomCitoyen] = useState("")
  const [nomCitoyen, setNomCitoyen] = useState("")
  const [sexeCitoyen, setSexeCitoyen] = useState("")
  const [telephoneCitoyen, setTelephoneCitoyen] = useState("")
  const [compagneCitoyen, setCompagneCitoyen] = useState("")
  const [populationCitoyen, setPopulationCitoyen] = useState("")
  const [gouvernoratCitoyen, setGouvernoratCitoyen] = useState("")
  const [delegationCitoyen, setDelegationCitoyen] = useState("")
  const [brasCitoyen, setBrasCitoyen] = useState("")
  const [lotCitoyen, setLotCitoyen] = useState("")
  const [  covidCitoyen, setCovidCitoyen] = useState("")


  // useEffect(() => {
  //   dispatch(actions.inscription())
  // }, [])
  
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      /* eslint-disable no-template-curly-in-string */
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      /* eslint-enable no-template-curly-in-string */
      
  //console.log(nompharmaciearabe)
  const onFinish = (values) => {
          ajoutecitoyen(values.cinCitoyen, values.dateNaisCitoyen, values.prenomCitoyen, values.nomCitoyen, values.sexeCitoyen,
             values.telephoneCitoyen, values.compagneCitoyen, values.populationCitoyen,
             values.gouvernoratCitoyen, values.delegationCitoyen, values.brasCitoyen, values.lotCitoyen, values.covidCitoyen )
        };

        const ajoutecitoyen = (cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen) => {
          console.log(cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen)
          dispatch(actions.ajoutecitoyen({cinCitoyen,dateNaisCitoyen,prenomCitoyen,nomCitoyen,sexeCitoyen,telephoneCitoyen,compagneCitoyen,populationCitoyen,gouvernoratCitoyen,delegationCitoyen,brasCitoyen,lotCitoyen,covidCitoyen}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
        <Form.Item name="cinCitoyen" label="cinCitoyen"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={cinCitoyen} onChange={(e) => setCinCitoyen(e.target.value)}/>
          </Form.Item>

            <Form.Item name="dateNaisCitoyen" label="Date de naissance"  
            rules={[
              {
                required: true,
              },
            ]}>
            <input type="date" id="date" name="date" value={dateNaisCitoyen} onChange={(e) => setDateNaisCitoyen(e.target.value)} />
             </Form.Item>  
            <Form.Item name="prenomCitoyen" label="prenomCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={prenomCitoyen} onChange={(e) => setPrenomCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item name="nomCitoyen" label="nomCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={nomCitoyen} onChange={(e) => setNomCitoyen(e.target.value)}/>
            </Form.Item>
          
          <Form.Item  name="sexeCitoyen" label="sexeCitoyen" value={sexeCitoyen} onChange={(e) => setSexeCitoyen(e.target.value)}
          rules={[
            {
              required: true,
            },
          ]}>
            <Select >
              <Select.Option value="Homme">Homme</Select.Option>
              <Select.Option value="Femme">Femme</Select.Option>
            </Select>
          </Form.Item> 

          <Form.Item name="telephoneCitoyen" label="telephoneCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={telephoneCitoyen} onChange={(e) => setTelephoneCitoyen(e.target.value)}/>
            </Form.Item>

            <Form.Item name="compagneCitoyen" label="compagneCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={compagneCitoyen} onChange={(e) => setCompagneCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item name="populationCitoyen" label="populationCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={populationCitoyen} onChange={(e) => setPopulationCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item name="gouvernoratCitoyen" label="gouvernoratCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={gouvernoratCitoyen} onChange={(e) => setGouvernoratCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item name="delegationCitoyen" label="delegationCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={delegationCitoyen} onChange={(e) =>setDelegationCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item  name="brasCitoyen" label="brasCitoyen" value={brasCitoyen} onChange={(e) => setBrasCitoyen(e.target.value)}
            rules={[
              {
                required: true,
              },
            ]}>
            <Select >
              <Select.Option value="Gauche">Gauche</Select.Option>
              <Select.Option value="Droite">Droite</Select.Option>
            </Select>
          </Form.Item> 
          <Form.Item name="lotCitoyen" label="lotCitoyen"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={lotCitoyen} onChange={(e) =>setLotCitoyen(e.target.value)}/>
            </Form.Item>
            <Form.Item  name="covidCitoyen" label="covidCitoyen" value={covidCitoyen} onChange={(e) => setCovidCitoyen(e.target.value)}
            rules={[
              {
                required: true,
              },
            ]}>
            <Select >
              <Select.Option value="Oui">Oui</Select.Option>
              <Select.Option value="Non">Non</Select.Option>
            </Select>
          </Form.Item> 
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
}
export default AjoutCitoyen;