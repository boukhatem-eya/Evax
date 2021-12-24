import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/pharmacies/inscriptions"

function FormulaireInscription(){
  const dispatch = useDispatch()
  const [nompharmaciearabe, setNompharmaciearabe] = useState("")
  const [nompharmaciefr, setNompharmaciefr] = useState("")
  const [numordre, setNumordre] = useState("")
  const [numfixe, setNumfixe] = useState("")
  const [categorie, setCategorie] = useState("")
  const [gouvernorat, setGouvernorat] = useState("")
  const [delegation, setDelegation] = useState("")
  const [commune, setCommune] = useState("")
  const [adrarabe, setAdrarabe] = useState("")
  const [adrfrn, setAdrfrn] = useState("")
  const [cin, setCin] = useState("")
  const [datenaiss, setDatenaiss] = useState("")
  const [prenompharmacien, setPrenompharmacien] = useState("")
  const [nompharmacien, setNompharmacien] = useState("")
  const [email, setEmail] = useState("")
  const [numprt, setNumprt] = useState("")

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
          ajouteInscription(values.nom_pharmacie_arabe, values.nom_pharmacie_francais, values.num_ordre, values.num_fixe, values.categorie, values.gouvernorat, values.delegation, values.commune, values.adresse_arabe, values.adresse_francais, values.cin_pharmacien, values.date_de_naissance, values.prenom_pharmacien, values.nom_pharmacien, values.email, values.num_telephone_portable )
        };

        const ajouteInscription = (nom_pharmacie_arabe, nom_pharmacie_francais, num_ordre, num_fixe, categorie, gouvernorat, delegation, commune, adresse_arabe, adresse_francais, cin_pharmacien, date_de_naissance, prenom_pharmacien, nom_pharmacien, email, num_telephone_portable ) => {
          console.log(nom_pharmacie_arabe, nom_pharmacie_francais, num_ordre, num_fixe, categorie, gouvernorat, delegation, commune, adresse_arabe, adresse_francais, cin_pharmacien, date_de_naissance, prenom_pharmacien, nom_pharmacien, email, num_telephone_portable)
          dispatch(actions.ajouteInscription({nom_pharmacie_arabe, nom_pharmacie_francais, num_ordre, num_fixe, categorie, gouvernorat, delegation, commune, adresse_arabe, adresse_francais, cin_pharmacien, date_de_naissance, prenom_pharmacien, nom_pharmacien, email, num_telephone_portable}))}
    return (
        <div style={{padding: 200, margin: 50}}>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
        <Form.Item name="nom_pharmacie_arabe" label="Nom pharmacie en arabe "
          rules={[
            {
              required: true,
            },
          ]}>
        
            <Input value={nompharmaciearabe} onChange={(e) => setNompharmaciearabe(e.target.value)}/>
          </Form.Item>
          <Form.Item name="nom_pharmacie_francais" label="Nom pharmacie en français"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={nompharmaciefr} onChange={(e) => setNompharmaciefr(e.target.value)}/>
          </Form.Item>
          <Form.Item name="num_ordre" label="Numéro d'ordre"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={numordre} onChange={(e) => setNumordre(e.target.value)}/>
          </Form.Item>
          <Form.Item name="num_fixe" label="Numéro fixe"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={numfixe} onChange={(e) => setNumfixe(e.target.value)}/>
          </Form.Item>
          <Form.Item name="categorie" label="catégorie"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={categorie} onChange={(e) => setCategorie(e.target.value)} />
          </Form.Item>
          <Form.Item name="gouvernorat" label="Gouvernorat"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={gouvernorat} onChange={(e) => setGouvernorat(e.target.value)}/>
          </Form.Item>
          <Form.Item name="delegation" label="Délégation"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={delegation} onChange={(e) => setDelegation(e.target.value)}/>
          </Form.Item>
          <Form.Item name="commune" label="Commune"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={commune} onChange={(e) => setCommune(e.target.value)}/>
          </Form.Item>
          <Form.Item name="adresse_arabe" label="Adresse en arabe"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={adrarabe} onChange={(e) => setAdrarabe(e.target.value)}/>
          </Form.Item>
          <Form.Item name="adresse_francais" label="Adresse en français"  rules={[
              {
                required: true,
              },
            ]}>
            <Input value={adrfrn} onChange={(e) => setAdrfrn(e.target.value)}/>
          </Form.Item>
          <Form.Item name="cin_pharmacien" label="CIN pharamcien"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={cin} onChange={(e) => setCin(e.target.value)}/>
          </Form.Item>
          <Form.Item name="date_de_naissance" label="Date de naissance"  >
        <input type="date" id="date" name="date" value={datenaiss} onChange={(e) => setDatenaiss(e.target.value)} />
          </Form.Item>
          <Form.Item name="prenom_pharmacien" label="Prenom pharamcien"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={adrfrn} onChange={(e) => setAdrfrn(e.target.value)} />
          </Form.Item>
          <Form.Item name="nom_pharmacien" label="Nom pharmacien"   rules={[
              {
                required: true,
              },
            ]}>
            <Input value={nompharmacien} onChange={(e) => setNompharmacien(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Item>
          <Form.Item name="num_telephone_portable" label="Numéro téléphone portable" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={numprt} onChange={(e) => setNumprt(e.target.value)}/>
      </Form.Item>
         
          {/* <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          > */}
            {/* <InputNumber />
          </Form.Item> */} 
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
}
export default FormulaireInscription;