import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, DatePicker, Radio, Select } from 'antd';
import { useDispatch } from "react-redux";
 import * as actions from "../../../redux/actions/visiteurcentre/inscription"



function FormulaireInscriptionPharmacie(){
  const dispatch = useDispatch()

  const [recherchegeographique, setRecherchegeographique] = useState("")
  const [gouvernerat, setGouvernerat] = useState("")
  const [delegation, setDelegation] = useState("")
  const [commune, setCommune] = useState("")



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
          ajouteInscription(  values.recherchegeographique, values.gouvernerat, values.delegation, values.commune )
        };

        const ajouteInscription = (recherchegeographique, gouvernerat, delegation, commune) => {
          console.log( recherchegeographique, gouvernerat, delegation, commune)
          dispatch(actions.ajouteInscription({ recherchegeographique, gouvernerat, delegation, commune}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
  
         <h2>Phase 1: Veuillez rechercher et sélectionner la pharmacie de votre choix.</h2>
         <Form.Item name="recherchegeographique" label="">
         <Radio.Group value={recherchegeographique} onChange={(e) => setRecherchegeographique(e.target.value)}>
         <Radio value={1}>Recherche par emplacement géographique</Radio>
         <Radio value={2}>Recherche par nom</Radio>
         </Radio.Group>
         </Form.Item>
         <Form.Item  name="gouvernerat" label="Choisir le gouvernorat">
            <Select value={gouvernerat} onChange={(e) => setGouvernerat(e.target.value)}>
           <Select.Option value="Tunis">Tunis</Select.Option>
           <Select.Option value="Bizerte">Bizerte</Select.Option>
           <Select.Option value="Manouba">Manouba</Select.Option>
           <Select.Option value="Kef">Kef</Select.Option>
           <Select.Option value="Béja">Béja</Select.Option>
           <Select.Option value="Jendouba">Jendouba</Select.Option>
           <Select.Option value="Gafsa">Gafsa</Select.Option>
           <Select.Option value="Kassrine">Kassrine</Select.Option>
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
          </Select>
         </Form.Item>
            
         <Form.Item  name="delegation" label="Choisir la délégation">
            <Select value={delegation} onChange={(e) => setDelegation(e.target.value)}>
           <Select.Option value="Tebourba">Tebourba</Select.Option>
           <Select.Option value="Joumine">Joumine</Select.Option>
           <Select.Option value="Manouba">Manouba</Select.Option>
           <Select.Option value="Kef">Kef</Select.Option>
           <Select.Option value="Béja">Béja</Select.Option>
           <Select.Option value="Jendouba">Jendouba</Select.Option>
           <Select.Option value="Gafsa">Gafsa</Select.Option>
           <Select.Option value="Kassrine">Kassrine</Select.Option>
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
          </Select>
         </Form.Item>

         <Form.Item name="commune" label="Choisir la commune">
         <Select value={commune} onChange={(e) => setCommune(e.target.value)}>
           <Select.Option value="lhamr">lhamr</Select.Option>
           <Select.Option value="Ameni">Ameni</Select.Option>
          </Select>
         </Form.Item>


         <Form.Item name="pharmacie" label="Sélectionnez la pharmacie">
         <Select value={delegation} onChange={(e) => setDelegation(e.target.value)}>
           <Select.Option value="Pharmacienuit">Pharmacie nuit</Select.Option>
           <Select.Option value="Pharmaciejour">Pharmacie jour</Select.Option>
          </Select>
         </Form.Item>

         
         {/* <Form.Item name="poids" label="Veuillez préciser votre poids(Kg) ?"  rules={[
              {
                required: true,
              },
            ]}>
            <Input value={poids} onChange={(e) => setPoids(e.target.value)}/>
          </Form.Item> */}
         
          
         
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Recherche
            </Button>
           
            <Button type="danger" htmlType="reset" >
              Annuler
            </Button>
          </Form.Item>
          
        </Form>
        </div>
      );
}
export default FormulaireInscriptionPharmacie;