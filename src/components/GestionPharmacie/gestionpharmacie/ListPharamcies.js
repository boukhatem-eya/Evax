import React from "react"
import AffichePharmacies from "./AffichePharmacies"

export default function ListPharmacies({ pharmacies, supprimerPharamcie, modifierPharmacie }) {
  console.log(pharmacies)
  return (
    <div >
      <div>
        {pharmacies.map((pharmacie) => (
          <AffichePharmacies
            key={pharmacie.id}
            id={pharmacie._id}
            gouvernant={pharmacie.gouvernant}
            libelle_fr={pharmacie.libelle_fr}
            libelle_arabe={pharmacie.libelle_arabe}
            type_centre_vaccination={pharmacie.type_centre_vaccination}
            categorie={pharmacie.categorie} 
            nombre_post_vaccination={pharmacie.nombre_post_vaccination}
            id_inscription_pharmacie={pharmacie.id_inscription_pharmacie}
            stocke={pharmacie.stocke}
            email={pharmacie.email}
            supprimerPharamcie={supprimerPharamcie}
            modifierPharmacie={modifierPharmacie}
          />
        ))}
      </div>
    </div>
  )
}
