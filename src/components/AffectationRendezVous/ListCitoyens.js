import React from "react"
import AfficheCitoyens from "./AfficheCitoyens"

export default function ListCitoyens({ citoyens, supprimerCitoyen, modifierCitoyen }) {
  console.log(citoyens)
  return (
    <div >
      <div>
        {citoyens.map((citoyen) => (
          <AfficheCitoyens
            key={citoyen.id}
            id={citoyen._id}
            cinCitoyen={citoyen.cinCitoyen}
            dateNaisCitoyen={citoyen.dateNaisCitoyen}
            prenomCitoyen={citoyen.prenomCitoyen}
            nomCitoyen={citoyen.nomCitoyen}
            sexeCitoyen={citoyen.sexeCitoyen}
            telephoneCitoyen={citoyen.telephoneCitoyen}
            compagneCitoyen={citoyen.compagneCitoyen}
            populationCitoyen={citoyen.populationCitoyen}
            gouvernoratCitoyen={citoyen.gouvernoratCitoyen}
            delegationCitoyen={citoyen.delegationCitoyen}
            brasCitoyen={citoyen.brasCitoyen}
            lotCitoyen={citoyen.lotCitoyen}
            covidCitoyen={citoyen.covidCitoyen}
            supprimerCitoyen={supprimerCitoyen}
            modifierCitoyen={modifierCitoyen}
          />
        ))}
      </div>
    </div>
  )
}