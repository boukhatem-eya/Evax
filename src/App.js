
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import * as actions from './redux/actions/connexion/connexionadmin'
import FormulaireInscription from './components/GestionPharmacie/inscriptionpharmacie/FormulaireInscription';
import Accueil from './components/Accueil/Accueil';
import Connexionpharmacie from './components/ConnexionPharmacie/Connexionpharamcie';
import FormulaireAjouteCentre from './components/GestionCentre/FormulaireAjouteCentre';
import ListCentre from './components/GestionCentre/ListCentre';
import List from  './components/GestionCentre/List'
import DetailsCentre from './components/GestionCentre/DetailsCentre'
import AfficheList from './components/GestionPharmacie/gestionpharmacie/AfficheList'
import DetailsPharmacie from './components/GestionPharmacie/gestionpharmacie/DetailsPharmacie';
import ConnexionAdmin from './components/ConnexioAdmin/ConnexionAdmin';
import FormulaireAjouteVaccin from './components/Vaccin/GestionVaccins/FormulaireAjouteVaccin';
import ListPage from './components/Vaccin/GestionVaccins/ListPage';
import DetailsVaccin from './components/Vaccin/GestionVaccins/DetailsVaccin';
import AffectationVaccin from './components/Vaccin/AffectationVaccin/AffectationVaccin';
import ListPageInscription from './components/Validation/ListPageInscription'
import DetailsInscription from './components/Validation/DetailsInscription';
import setAuthToken from './helpers/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('app')
    dispatch(actions.loadAdmin()) 
  }, [])
  return (
    
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/">
              <Redirect to="/Connexionadmin" />
            </Route>
            <Route exact path="/Connexionadmin">
              <ConnexionAdmin  />
            </Route>
            <Route exact path="/Tableau de bord">
              <Accueil />
            </Route>
      <Route exact path="/FrormulaireInscription">
      <FormulaireInscription />
      </Route>
      <Route exact path="/Ajoutevaccin">
      <FormulaireAjouteVaccin />
      </Route>
      <Route exact path="/Connexionpharmacie">
      <Connexionpharmacie />
      </Route>
      <Route exact path="/Ajoutecentre">
      <FormulaireAjouteCentre />
      </Route>
      <Route exact path="/Affichecentrestableau">
      <ListCentre />
      </Route>
      <Route exact path="/AfficheListCentres">
      <List />
      </Route>
      <Route exact path="/Listpagevaccin">
      <ListPage />
      </Route>
      <Route exact path="/centre/:centreId">
              < DetailsCentre/>
            </Route>
            <Route exact path="/vaccin/:vaccinId">
              < DetailsVaccin/>
            </Route>
            <Route exact path="/pharmacie/:pharmacieId">
              < DetailsPharmacie/>
            </Route>
            <Route exact path="/inscription/:inscriptionId">
              < DetailsInscription/>
            </Route>
            <Route exact path="/gestionpharmacies!!!!!">
              < AfficheList/>
            </Route>
            <Route exact path="/affectationvaccin">
              < AffectationVaccin/>
            </Route>
            <Route exact path="/afficherlistinscription">
              < ListPageInscription/>
            </Route>
      </Switch>
      </Router>
    </div>
   
  );
}

export default App;
