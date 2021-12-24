import React from "react"
import AfficheCentres from "./AfficheCentres"

export default function ListCentres({ centres, supprimerCentre, modifierCentre }) {
  console.log(centres)
  return (
    <div >
      <div>
        {centres.map((centre) => (
          <AfficheCentres
            key={centre.id}
            id={centre._id}
            gouvernant={centre.gouvernant}
            delegation={centre.delegation}
            commune={centre.commune}
            libelle_fr={centre.libelle_fr}
            libelle_arabe={centre.libelle_arabe}
            type_centre_vaccination={centre.type_centre_vaccination}
            categorie={centre.categorie} 
            adresse_arabe={centre.adresse_arabe}
            adresse_francais={centre.adresse_francais}
            nombre_post_vaccination={centre.nombre_post_vaccination}
            capacite_accueil={centre.capacite_accueil}
            stocke={centre.stocke}
            supprimerCentre={supprimerCentre}
            modifierCentre={modifierCentre}
          />
        ))}
      </div>
    </div>
  )
}
