import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/centre/centre'
//const {  Table, Tag, Space  } = antd;
function AfficheCentres({ id,gouvernant, delegation, commune, libelle_fr, libelle_arabe, type_centre_vaccination, categorie, adresse_arabe, adresse_francais, nombre_post_vaccination, capacite_accueil, stocke, supprimerCentre, modifierCentre }){
console.log({id, gouvernant, delegation, commune, libelle_fr,  type_centre_vaccination, adresse_francais, capacite_accueil, stocke, supprimerCentre, modifierCentre})
const dispatch = useDispatch()
const [updateMode, setUpdateMode] = useState(false)
const [mdfgouvernant, setMdfgouvernant] = useState(gouvernant)
const [mdfdelegation, setMdfdelegation] = useState(delegation)
const [mdfcommune, setMdfcommune] = useState(commune)
const [mdflibelle_fr, setMdflibelle_fr] = useState(libelle_fr)
const [mdflibelle_arabe, setMdflibelle_arabe] = useState(libelle_arabe)
const [mdftype_centre_vaccination, setMdftype_centre_vaccination] = useState(type_centre_vaccination)
const [mdfcategorie, setMdfcategorie] = useState(categorie)
const [mdfadresse_arabe, setMdfadresse_arabe] = useState(adresse_arabe)
const [mdfadresse_francais, setMdfadresse_francais] = useState(adresse_francais)
const [mdfnombre_post_vaccination, setMdfnombre_post_vaccination] = useState(nombre_post_vaccination)
const [mdfcapacite_accueil, setMdfcapacite_accueil] = useState(capacite_accueil)
const [mdfstocke, setMdfstocke] = useState(stocke)
console.log(gouvernant)

const onFinish = (values) => {
  modifierCentre(id, values.gouvernant, values.delegation, values.commune, values.libelle_fr, values.libelle_arabe, values.type_centre_vaccination, values.categorie, values.adresse_arabe, values.adresse_francais, values.nombre_post_vaccination, values.capacite_accueil, values.stocke)
  setUpdateMode(false)
}
useEffect(() => {
  document.title = libelle_fr
})
useEffect(() => {
  if (updateMode) {
    dispatch(actions.setSelectedCentre(id))
  }
  else{
    dispatch(actions.setSelectedCentre(""))
  }
}, [updateMode])
// const afficheCentre =()=>{
//     dispatch(actions.afficherCentre(id))
// }
// const history = useHistory()
// const affichedetailsCentre = () => {
//   history.push(`/centre/${id}`)
// }
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

  return(
      <div>
    {!updateMode ? (
        <>
<Card title="Centre de vaccination" >
    <Card type="inner" title="Centre de vaccination" extra={<Link to={`/centre/${id}`}>Voir</Link>}>
      <a>{libelle_fr}</a>
      <br/>
      <br/>
      <Button onClick={() => setUpdateMode(true)}>Modifier</Button>
      <Button onClick={() => supprimerCentre(id)}>Supprimer</Button>
    </Card>
    
  </Card>
  </>
  ) : (
    <div style={{padding: 200, margin: 50}}>
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
       <Form.Item  name="gouvernant" label="Choisir centre de vaccination" value={mdfgouvernant} onChange={(e) => setMdfgouvernant(e.target.value)}>
        <Select >
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
    
        <Input value={mdfdelegation} onChange={(e) => setMdfdelegation(e.target.value)}/>
      </Form.Item>
      <Form.Item name="commune" label="Commune"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdfcommune} onChange={(e) => setMdfcommune(e.target.value)}/>
      </Form.Item>
      <Form.Item name="libelle_fr" label="Libelle français"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdflibelle_fr} onChange={(e) => setMdflibelle_fr(e.target.value)}/>
      </Form.Item>
      <Form.Item name="libelle_arabe" label="libelle_arabe"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdflibelle_arabe} onChange={(e) => setMdflibelle_arabe(e.target.value)}/>
      </Form.Item>
      <Form.Item name="type_centre_vaccination" label="Type centre de vaccination"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdftype_centre_vaccination} onChange={(e) => setMdftype_centre_vaccination(e.target.value)}/>
      </Form.Item>
      <Form.Item name="categorie" label="Categorie"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdfcategorie} onChange={(e) => setMdfcategorie(e.target.value)}/>
      </Form.Item>
      <Form.Item name="adresse_arabe" label="Adresse en arabe"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdfadresse_arabe} onChange={(e) => setMdfadresse_arabe(e.target.value)}/>
      </Form.Item>
      <Form.Item name="adresse_francais" label="Adresse en français"
      rules={[
        {
          required: true,
        },
      ]}>
    
        <Input value={mdfadresse_francais} onChange={(e) => setMdfadresse_francais(e.target.value)}/>
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


    )}
    </div>
  )}
export default AfficheCentres;