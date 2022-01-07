import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { useDispatch } from "react-redux";
 import * as actions from "../../../redux/actions/raporterrendezvous/raporterrendezvous"



function Raporterrendezvous(){
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
 


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
    Raporterrendezvous( values.email, values.cod )
        };

        const Raporterrendezvous = (email, code) => {
          console.log(email, code)
          dispatch(actions.Raporterrendezvous({ email, code}))}
    return (
    
        <div style={{padding: 10, margin: 60}}>
            <h1 style={{color:"red"}}>Reporter Le Rendez-Vous</h1>
        <Form {...layout} name="nest-messages"  validateMessages={validateMessages} onFinish={onFinish}>
  

              
            <Form.Item name="email" label="Email" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Item>


          <Form.Item name="code" label="Code" rules={[
              {
                required: true,
              },
            ]}>
            <Input value={code} onChange={(e) => setCode(e.target.value)}/>
          </Form.Item>
          
         
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
             Confirmer
            </Button>
           
            <Button type="danger" htmlType="submit" >
              Annuler
            </Button>
          </Form.Item>
          <br />
          <br />
          <br />
          <br />
          <p>Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales. Politique de confidentialité . Vous acceptez volontairement les termes et conditions fournis.</p>
        <h3 style={{color:"red"}}>En Cas De Difficultés Lors De L'inscription :</h3>
        <h2 style={{color:"green"}}>Numéro vert gratuit : 80102021</h2>
        <h3 style={{color:"red"}}>Du Lundi Au Vendredi De 8h À 16h</h3>
        <h4 style={{color:"blue"}}>Signaler un problème lors de l'enregistrement</h4>
        <h4 style={{color:"blue"}}>Comment puis-je déterminer le lieu de vaccination?</h4>
        <br />
        <br />
        <br />
        <p>eVAX est le résultat d'un travail et d'un engagement patriotique commun des équipes du CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo et Orange), Ministère de la Santé et le Ministère des Technologies de la Communication

République de Tunisie - Ministère de la Santé - Portail d’inscription à la campagne de vaccination contre la COVID 19 - Tous droits réservés © 2022</p>

        </Form>
        </div>
      );
}
export default Raporterrendezvous;