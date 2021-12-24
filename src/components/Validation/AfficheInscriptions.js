import React, { useState, useEffect, useHistory } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"
import { Select, Button, Card, Form, InputNumber, Input  } from 'antd';
import { useDispatch, useSelector } from "react-redux"
//import * as actions from '../../redux/actions/centre/centre'
//const {  Table, Tag, Space  } = antd;
function AfficheInscriptions({ id, nom_pharmacie_arabe,
    nom_pharmacie_francais,
    num_ordre,
    num_fixe,
    categorie,
    gouvernorat,
    delegation,
    commune,
    adresse_arabe,
    adresse_francais,
    cin_pharmacien,
    date_de_naissance,
    prenom_pharmacien,
    nom_pharmacien,
    email,
    num_telephone_portable, verifier, validerInscription }){
console.log({id, nom_pharmacie_arabe,
    nom_pharmacie_francais,
    num_ordre,
    num_fixe,
    categorie,
    gouvernorat,
    delegation,
    commune,
    adresse_arabe,
    adresse_francais,
    cin_pharmacien,
    date_de_naissance,
    prenom_pharmacien,
    nom_pharmacien,
    email,
    num_telephone_portable, verifier, validerInscription})
//const dispatch = useDispatch()

useEffect(() => {
  document.title = nom_pharmacie_francais
})
// useEffect(() => {
//   if (updateMode) {
//     dispatch(actions.setSelectedCentre(id))
//   }
//   else{
//     dispatch(actions.setSelectedCentre(""))
//   }
// }, [updateMode])

  return(
      <div>
<Card title="Demande d'inscription" >
    <Card type="inner" title="Demande d'inscription" extra={<Link to={`/inscription/${id}`}>Voir</Link>}>
      <a>{nom_pharmacie_francais}</a>
      <br/>
      <br/>
      <Button onClick={() => validerInscription(id, email)}>Valider</Button>
    </Card>
    
  </Card>
    </div>
  )}
export default AfficheInscriptions;