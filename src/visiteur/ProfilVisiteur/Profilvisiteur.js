import React from 'react';

import 'antd/dist/antd.css';
import { UserOutlined, UserAddOutlined, RestOutlined, FileAddOutlined, LogoutOutlined, CalendarOutlined , IdcardOutlined } from '@ant-design/icons';
import { Form, Button } from 'antd';
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../redux/actions/connexionvisiteur/connexionvisiteur"
import AccueilVisiteur from "../AccueilVisiteur/AccueilVisiteur"
function Profilvisiteur(){
    


  return (
    
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 12,
      }}
    >
        <Button type="white" htmlType="submit" onClick={AccueilVisiteur}>
        <LogoutOutlined />
        </Button>
        <h1>Informations personnelles</h1>
        <Button type="white" htmlType="submit" >
        <UserOutlined />
          Modifier vos données personnelles
        </Button>

        <Button type="white" htmlType="reset">
        <UserAddOutlined />
          Parrainer enfant
        </Button>
        <Button type="white" htmlType="reset">
        <RestOutlined />
          Clôturer mon dossier
        </Button>
        <h1>Dossier de vaccination</h1>
        <Button type="white" htmlType="submit" >
          Detaille de la vaccination
        </Button>
        <h3><CalendarOutlined />Date du rendez-vous</h3>  <h3><FileAddOutlined />Certificat et Pass vaccinal</h3>
        <IdcardOutlined />
        <Button type="white" htmlType="submit" >
        <IdcardOutlined />
          Consulter votre Certificatde vaccination
        </Button>
        <Button type="white" htmlType="submit" >
        <IdcardOutlined />
          Consulter votre Pass Vaccinal
        </Button>
     
      <br />
      <br />
      <h4>Evax ©2022 Created by Evax</h4>
    </Form>
  );
};

export default Profilvisiteur