import React, { useState } from "react";
import { DatePicker, Select, Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/centre/centre"

function FormulaireAjouteCentre (){
    const dispatch = useDispatch()
  const [gouvernant, setGouvernant] = useState("")
  const [delegation, setDelegation] = useState("")
  const [commune, setCommune] = useState("")
  const [libellefr, setLibellefr] = useState("")
  const [libellearabe, setLibellearabe] = useState("")
  const [type, setType] = useState("")
  const [categorie, setCategorie] = useState("")
  const [adressearabe, setAdressearabe] = useState("")
  const [adressefr, setAdressefr] = useState("")
  const [nombrepstvac, setNombrepstvac] = useState("")
  const [capacite, setCapacite] = useState("")
  const [stocke, setStocke] = useState("")

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
        ajoutecentre(values.gouvernant, values.delegation, values.commune, values.libelle_fr, values.libelle_arabe, values.type_centre_vaccination, values.categorie, values.adresse_arabe, values.adresse_francais, values.nombre_post_vaccination, values.capacite_accueil, values.stocke )
      };

      const ajoutecentre = (gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke ) => {
        console.log(gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke)
        dispatch(actions.ajoutecentre({gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
           <Form.Item  name="gouvernant" label="Choisir centre de vaccination">
            <Select>
    <Select.Option value="Kef">Kef</Select.Option>
    <Select.Option value="Béja">Béja</Select.Option>
    <Select.Option value="Jendouba">Jendouba</Select.Option>
    <Select.Option value="Gafsa">Gafsa</Select.Option>
    <Select.Option value="Kassrine">Kassrine</Select.Option>
    <Select.Option value="Djerba">Djerba</Select.Option>
    <Select.Option value="Sidi bou zid">Sidi bou zid</Select.Option>
    <Select.Option value="Sfax">Sfax</Select.Option>
    <Select.Option value="Sousse">Sousse</Select.Option>
    <Select.Option value="Kairaoun">Kairaoun</Select.Option>
    <Select.Option value="Gbeli">Gbeli</Select.Option>
    <Select.Option value="Tataouine">Tataouine</Select.Option>
    <Select.Option value="Gebes">Gebes</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Monastir">Monastir</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
    <Select.Option value="Selyena">Selyena</Select.Option>
  </Select>
  </Form.Item>
  <Form.Item name="delegation" label="Delegation"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={delegation} onChange={(e) => setDelegation(e.target.value)}/>
          </Form.Item>
          <Form.Item name="commune" label="Commune"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={commune} onChange={(e) => setCommune(e.target.value)}/>
          </Form.Item>
          <Form.Item name="libelle_fr" label="Libelle français"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={libellefr} onChange={(e) => setLibellefr(e.target.value)}/>
          </Form.Item>
          <Form.Item name="libelle_arabe" label="libelle_arabe"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={libellearabe} onChange={(e) => setLibellearabe(e.target.value)}/>
          </Form.Item>
          <Form.Item name="type_centre_vaccination" label="Type centre de vaccination"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={type} onChange={(e) => setType(e.target.value)}/>
          </Form.Item>
          <Form.Item name="categorie" label="Categorie"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={categorie} onChange={(e) => setCategorie(e.target.value)}/>
          </Form.Item>
          <Form.Item name="adresse_arabe" label="Adresse en arabe"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={adressearabe} onChange={(e) => setAdressearabe(e.target.value)}/>
          </Form.Item>
          <Form.Item name="adresse_francais" label="Adresse en français"
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={adressefr} onChange={(e) => setAdressefr(e.target.value)}/>
          </Form.Item>
          <Form.Item name="nombre_post_vaccination" label="Nombre post de vaccination"
           rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
        ]}>
        
            <InputNumber />
          </Form.Item>
          <Form.Item name="capacite_accueil" label="Capacité d'accueil"
         rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
        ]}>
        
            <InputNumber />
          </Form.Item>
          <Form.Item name="stocke" label="Stocke"
         rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}>
        
            <InputNumber />
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
export default FormulaireAjouteCentre