import React from "react"
import { QuestionCircleOutlined, BarChartOutlined, FacebookOutlined, EnvironmentOutlined, ExclamationCircleOutlined, DollarOutlined, MedicineBoxOutlined, SmileOutlined, CheckCircleOutlined, TabletOutlined, MailOutlined, WhatsAppOutlined, GlobalOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

function Contacteznous() {
  return (
    <div>
   <h1 style={{color: "red"}}>Questions fréquentes sur EVAX</h1>
   <Row>
    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h1><BarChartOutlined style={{color: "red"}}/></h1>
     <h3> Quels sont les grands principes de la stratégie de vaccination contre la COVID-19 ?</h3>
      <p>La Tunisie s’est fixé les principes suivants :
      un accès équitable pour des vaccins gratuits, efficaces, sûrs et de qualité approuvés par les données scientifiques en temps opportun
      une prise de décision personnelle basée sur des données transparentes et compréhensibles</p>
    </Col>
     
     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h1><QuestionCircleOutlined /></h1>
        <h3>Comment s’enregistrer pour la vaccination Covid-19 ?</h3>
       <p> Website : www.evax.tn
       <br />
            SMS : 85355
            <br />
            USSD : *2021# </p>
    </Col>

    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h1><MedicineBoxOutlined style={{color: "red"}}/></h1>
      <h3>Quels sont les objectifs de la vaccination ?</h3>
<p>Le premier objectif de la vaccination, c’est de faire baisser le nombre des formes graves de COVID-19. Les résultats des études cliniques des candidats vaccins semblent converger pour démontrer un fait principal : la vaccination permet de réduire massivement la mortalité due au virus et à ses formes graves.</p>
    </Col>
  </Row>
 

<br />
<br />

  
   <Row>
    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h1><DollarOutlined /></h1>
     <h3> La vaccination contre la Covid-19 sera-t-elle gratuite ?</h3>
      <p>Oui. La vaccination sera gratuite pour tous en Tunisie, mais selon la priorité établie par l es autorités.</p>
    </Col>
     
     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
     <h1><EnvironmentOutlined style={{color: "red"}}/></h1>
        <h3>Où se faire vacciner ?</h3>
       <p> Il y aura environ 200 centres de vaccination à raison de :
          1 à 2 grand (s) centre(s) par gouvernorat ouvert toute la semaine
          Et un centre par délégation à identifier par direction régionale de la santé ouvert le weekend </p>
    </Col>

    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h1><ExclamationCircleOutlined /></h1>
      <h3>Que faire en cas de problème lors de l'inscription?</h3>
<p>Un numéro vert gratuit a été mis en place pour accompagner les citoyens tout au long de la campagne de vaccination. <h3 style={{color: "green"}}> Le numéro vert : 80102021</h3>, ouvert du lundi au vendredi de 09h à 17h</p>
    </Col>
  </Row>
  <br />
  <br/>
  <h3 style={{color: "red"}}>Le Vaccin En Tunisie</h3>
  <h1>Plus De Statistiques Sur Les Campagnes De Vaccination</h1>

   <Row>
    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <h1><CheckCircleOutlined style={{color: "red"}}/></h1>
     <h3> 7568743</h3>
      <p>Inscrits</p>
    </Col>
     
     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
     <h1><MedicineBoxOutlined style={{color: "red"}}/></h1>
        <h3>6730944</h3>
       <p> Vaccinés 1ère dose  </p>
    </Col>

    <Col xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
   <h1><SmileOutlined style={{color: "red"}}/></h1>
      <h3>5186199</h3>
       <p>Vaccinés 2ème dose</p>
    </Col>
  </Row>
<br />
<br />
  <Row style={{background: "#ff4a51", color:"#ffffff"}}>
      <Col span={24}><p>Comment faire pour se vacciner</p>
      <h1 style={{color:"#ffffff"}}>ETAPES DE VACCINATION CONTRE LA COVID-19</h1>
      <Row>
      <Col span={6}><h1 style={{color:"#ffffff"}}>01</h1> <h2 style={{color:"#ffffff"}}>INSCRIPTION</h2><p>La 1ère étape est de s'inscrire</p></Col>
      <Col span={6}><h1 style={{color:"#ffffff"}}>02</h1> <h2 style={{color:"#ffffff"}}>Affectation RDV</h2><p>La 2ème étape est de recevoir une convocation dans un centre de vaccination</p></Col>
      <Col span={6}><h1 style={{color:"#ffffff"}}>03</h1> <h2 style={{color:"#ffffff"}}>VACCINATION</h2><p>La 3ème étape est le vaccin (primo-vaccination, puis vaccin de rappel)</p></Col>
      <Col span={6}><h1 style={{color:"#ffffff"}}>04</h1> <h2 style={{color:"#ffffff"}}>SUIVI</h2><p>La 4ème étape est le suivi du vaccin et le téléchargement de l'attestation de vacccination</p></Col>
    
    </Row>
      </Col>
    </Row>
<br />
<br />

     <Row>
      <Col span={24}> <Row >
      <Col span={12}><h1>Contactez nous pour plus d'information.</h1> <p>Appel Gratuit : Centre d'appel disponible Du lundi au Vendredi de 09h à 17h.</p>
      <br />

      <h3><WhatsAppOutlined style={{color:"red"}}/> +(216) 8010 20 21</h3>
       <br />
      <h3><GlobalOutlined style={{color:"red"}}/>  www.evax.tn</h3>
       </Col>
      <Col span={12}><h1>Voulez-vous vous inscrire ?</h1>
      <p>Pour vous inscrire vous pouvez :</p>
      <p>
      <Col span={24}><h3> <TabletOutlined style={{color:"red"}}/> Composer le #2021*</h3></Col>
      <Col span={27}><h3> <MailOutlined style={{color:"red"}}/><span></span> Envoyer un SMS à 85 355</h3></Col>
      <Col span={25}><h3> <WhatsAppOutlined style={{color:"red"}}/> Appeler le 8010 2021 </h3> </Col>
      <Col span={25}><h3> <GlobalOutlined style={{color:"red"}}/> Visiter notre site Evax</h3></Col>
      </p>
      </Col>
    </Row></Col>
    </Row>
    <Row>
    <br />
    <br />
    <br />
<br /> 
<Col span={24}>
    <h1><FacebookOutlined style={{color:"blue"}}/> <QuestionCircleOutlined style={{color:"blue"}}/></h1> </Col>
      <Col span={24}><p>Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales Politique de confidentialité .Vous acceptez volontairement les termes et conditions fournis.
       eVAX est le résultat d'un travail et d'un engagement patriotique commun des équipes du CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo et Orange), Ministère de la Santé et le Ministère des Technologies de la Communication. Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales. Politique de confidentialité . Vous acceptez volontairement les termes et conditions fournis. République de Tunisie - Ministère de la Santé - Portail d’inscription à la campagne de vaccination contre la COVID 19</p>
     <h4 >Tous droits réservés © 2022</h4>
      </Col> 
    </Row>
   </div>

  )
}
export default Contacteznous
