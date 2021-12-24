
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import ListPharmacie from './components/ValidationPharmacie/ListPharmacie'
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
function App() {
  return (
    
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/">
              <Redirect to="/Accueil" />
            </Route>
            <Route exact path="/Accueil">
              <Accueil />
            </Route>
            <Route exact path="/ListPharmacie">
              <ListPharmacie />
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
      <Route exact path="/Connexionadmin">
      <ConnexionAdmin />
      </Route>
      <Route exact path="/Ajoutecentre">
      <FormulaireAjouteCentre />
      </Route>
      <Route exact path="/Affichecentres">
      <ListCentre />
      </Route>
      <Route exact path="/Affiche">
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
            <Route exact path="/gestionpharmacies">
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
