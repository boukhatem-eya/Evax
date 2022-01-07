import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio, Select } from 'antd';
import { useDispatch } from "react-redux";
 import * as actions from "../../../redux/actions/visiteurcentre/inscription"



function FormulaireInscriptionCentre(){
  const dispatch = useDispatch()
  const [cin, setCin] = useState("")
  const [datenaissance, setDatenaissance] = useState("")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [genre, setGenre] = useState("")
  // const [gouvernerat, setGouvernerat] = useState("")
  // const [delegation, setDelegation] = useState("")
  const [atteintCOVID19, setAtteintCOVID19] = useState("")
  const [atteintdiabete, setAtteintdiabete] = useState("")
  const [atteinthypertrnsion, setAtteinthypertrnsion] = useState("")
  const [atteintmaladiechronique, setAtteintmaladiechronique] = useState("")
  const [atteintcardiaque, setAtteintcardiaque] = useState("")
  const [greffeorgane, setGreffeorgane] = useState("")
  const [atteintmaladierespiratoire, setAtteintmaladierespiratoire] = useState("")
  const [traitementanticoncer, setTraitementanticoncer] = useState("")
  const [poids, setPoids] = useState("")
  const [taille, setTaille] = useState("")
  const [personnelsante, setPersonnelsante] = useState("")


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
          ajouteInscription(values.email, values.cin, values.datenaissance, values.code, values.prenom, values.nom, values.genre, values.atteintCOVID19, values.atteintdiabete, values.atteinthypertrnsion, values.atteintmaladiechronique, values.atteintcardiaque, values.greffeorgane, values.atteintmaladierespiratoire, values.traitementanticoncer, values.poids, values.taille, values.personnelsante )
        };

        const ajouteInscription = (email, cin, datenaissance, code, prenom, nom, genre,  atteintCOVID19, atteintdiabete, atteinthypertrnsion, atteintmaladiechronique, atteintcardiaque, greffeorgane, atteintmaladierespiratoire, traitementanticoncer, poids, taille, personnelsante ) => {
          console.log(email, cin, datenaissance, code, prenom, nom, genre, atteintCOVID19, atteintdiabete, atteinthypertrnsion, atteintmaladiechronique, atteintcardiaque, greffeorgane, atteintmaladierespiratoire, traitementanticoncer, poids, taille, personnelsante)
          dispatch(actions.ajouteInscription({email, cin, datenaissance, code, prenom, nom, genre, atteintCOVID19, atteintdiabete, atteinthypertrnsion, atteintmaladiechronique, atteintcardiaque, greffeorgane, atteintmaladierespiratoire, traitementanticoncer, poids, taille, personnelsante}))}
    return (
    
        <div style={{padding: 10, margin: 60}}>
            <h1 style={{color:"red"}}>Etape 1 : Données Générales</h1>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
  
        <Form.Item name="email" label="Email" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Item>

               <Form.Item name="cin" label="Carte d'identité nationale" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={cin} onChange={(e) => setCin(e.target.value)}/>
          </Form.Item>

            <Form.Item name="datenaissance" label="Date de naissance" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={datenaissance} onChange={(e) => setDatenaissance(e.target.value)}/>
          </Form.Item>
            <h1 style={{color:"red"}}>Etape 2 : Vérification E-mail</h1>
           
          <Form.Item name="code" label="Code" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={code} onChange={(e) => setCode(e.target.value)}/>
          </Form.Item>
          <h1 style={{color:"red"}}>Etape 3 : Questionnaire</h1>
          <Form.Item name="prenom" label="Prénom"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
          
          </Form.Item>

          <Form.Item name="nom" label="Nom"
            rules={[
              {
                required: true,
              },
            ]}>
          <Input value={nom} onChange={(e) => setNom(e.target.value)} />
          
            </Form.Item>
         <Form.Item name="genre" label="Genre">
         <Radio.Group value={genre} onChange={(e) => setGenre(e.target.value)}>
         <Radio value={1}>Homme</Radio>
         <Radio value={2}>Femme</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="atteintCOVID19" label="Etes-vous atteint de le COVID-19 ?">
         <Radio.Group value={atteintCOVID19} onChange={(e) => setAtteintCOVID19(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="atteintdiabete" label="Etes-vous atteint du diabète ?">
         <Radio.Group value={atteintdiabete} onChange={(e) => setAtteintdiabete(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>
          
         <Form.Item name="atteinthypertrnsion" label="Etes-vous atteint d'hypèretension artérielle ?">
         <Radio.Group value={atteinthypertrnsion} onChange={(e) => setAtteinthypertrnsion(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="atteintmaladiechronique" label="Etes-vous atteint d'une maladie chronique ?">
         <Radio.Group value={atteintmaladiechronique} onChange={(e) => setAtteintmaladiechronique(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="atteintcardiaque" label="Etes-vous atteint d'insuffissance cardiaque ?">
         <Radio.Group value={atteintcardiaque} onChange={(e) => setAtteintcardiaque(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="greffeorgane" label="Avez-vous subi une greffe d'organe ?">
         <Radio.Group value={greffeorgane} onChange={(e) => setGreffeorgane(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="atteintmaladierespiratoire" label="Avez-vous été atteint d'une maladie respiratoire chronique ?">
         <Radio.Group value={atteintmaladierespiratoire} onChange={(e) => setAtteintmaladierespiratoire(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>

         <Form.Item name="traitementanticoncer" label="Avez-vous suivi des traitements anti-cancers ou immunosuppresseurs ?">
         <Radio.Group value={traitementanticoncer} onChange={(e) => setTraitementanticoncer(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>


         <Form.Item name="poids" label="Veuillez préciser votre poids(Kg) ?"  rules={[
              {
                required: true,
              },
            ]}>
            <Input value={poids} onChange={(e) => setPoids(e.target.value)}/>
          </Form.Item>
          <Form.Item name="taille" label="Veuillez préciser votre taille(exemple 170 cm pour 1m70) ?" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={taille} onChange={(e) => setTaille(e.target.value)}/>
          </Form.Item>
           
         <Form.Item name="personnelsante" label="Faites-vous partie du personnel du santé ?">
         <Radio.Group value={personnelsante} onChange={(e) => setPersonnelsante(e.target.value)}>
         <Radio value={1}>Oui</Radio>
         <Radio value={2}>Non</Radio>
         </Radio.Group>
         </Form.Item>
          
         
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Ajouter la demande d'inscription
            </Button>
           
            <Button type="danger" htmlType="submit" >
              Retour
            </Button>
          </Form.Item>
          
        </Form>
        </div>
      );
}
export default FormulaireInscriptionCentre;