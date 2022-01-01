import React, { useState } from 'react';
import './Accueil.css';
import BarChart from './tableaudebord/BarChart';
import BarChart1 from './tableaudebord/BarChart1';
import { Link, NavLink } from "react-router-dom";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';



const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header   style={{ background: '#000000',padding: 10 }}>
          
          <Title style={{ color: 'white' }} level={3}>Evax.tn</Title>
        </Header>
        <Layout>
          <Sider style={{background: '#000000'}}>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Tableau de bord
              </Menu.Item>
              <Menu.Item>
                Affection rendez-vous
              </Menu.Item>
              <Menu.Item>
                Création JPO
              </Menu.Item>

              <Menu.Item>
                Gestion des volontaires
              </Menu.Item>
              <Menu.Item>
              <NavLink  exact to="/AfficheListCentres">
              Gestion des centres
              </NavLink>   
              </Menu.Item>
              <Menu.Item>
              <NavLink  exact to="/Listpagevaccin">
              Gestion des vaccins
              </NavLink>   
              </Menu.Item>
              <Menu.Item>
              <NavLink  exact to="/affectationvaccin">
                Affection des vaccins
                </NavLink>
              </Menu.Item>
              <Menu.Item>
              <NavLink  exact to="/afficherlistinscription">
                Validation des pharmacies
                </NavLink>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Espace Administrateur</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                  <div className="stat">
                    <div className="divv1">
                      <BarChart1/>
                    </div>
                    <div className="divv2">
                      <BarChart/>
                    </div>
                  </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

