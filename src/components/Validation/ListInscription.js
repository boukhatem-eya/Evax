import React from "react"
import AfficheInscriptions from "./AfficheInscriptions"

export default function ListInscription({ inscriptions, validerInscription }) {
  console.log(inscriptions)
  return (
    <div >
      <div>
        {inscriptions.map((inscription) => (
          <AfficheInscriptions
            key={inscription.id}
            id={inscription._id}
            nom_pharmacie_arabe={inscription.nom_pharmacie_arabe}
            nom_pharmacie_francais={inscription.nom_pharmacie_francais}
            num_ordre={inscription.num_ordre}
            num_fixe={inscription.num_fixe}
            categorie={inscription.categorie}
            gouvernorat={inscription.gouvernorat}
            delegation={inscription.delegation} 
            commune={inscription.commune}
            adresse_arabe={inscription.adresse_arabe}
            adresse_francais={inscription.adresse_francais}
            cin_pharmacien={inscription.cin_pharmacien}
            date_de_naissance={inscription.date_de_naissance}
            prenom_pharmacien={inscription.prenom_pharmacien}
            nom_pharmacien={inscription.nom_pharmacien}
            email={inscription.email}
            num_telephone_portable={inscription.num_telephone_portable}
            verifier={inscription.verifier}
            validerInscription={validerInscription}
        
          />
        ))}
      </div>
    </div>
  )
}
