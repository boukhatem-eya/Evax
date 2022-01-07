import React from "react"
import AfficheVolontaires from "./AfficheVolontaires"

export default function ListVolontaires({ volontaires, supprimerVolontaire, modifierVolontaire }) {
  console.log(volontaires)
  return (
    <div >
      <div>
        {volontaires.map((volontaire) => (
          <AfficheVolontaires
            key={volontaire.id}
            id={volontaire._id}
            nomVolontaire={volontaire.nomVolontaire}
            cinVolontaire={volontaire.cinVolontaire}
            telVolontaire={volontaire.telVolontaire}
            emailVolontaire={volontaire.emailVolontaire}
            centreVolontaire={volontaire.centreVolontaire}
            supprimerVolontaire={supprimerVolontaire}
            modifierVolontaire={modifierVolontaire}
          />
        ))}
      </div>
    </div>
  )
}
