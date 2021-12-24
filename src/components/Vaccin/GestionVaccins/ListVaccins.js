import React from "react"
import AfficheVaccins from "./AfficheVaccins"

export default function ListVaccins({ vaccins, supprimerVaccin, modifierVaccin }) {
  console.log(vaccins)
  return (
    <div >
      <div>
        {vaccins.map((vaccin) => (
          <AfficheVaccins
            key={vaccin.id}
            id={vaccin._id}
            marque_vaccin={vaccin.marque_vaccin}
            date_production={vaccin.date_production}
            date_validite={vaccin.date_validite}
            stocke={vaccin.stocke}
            supprimerVaccin={supprimerVaccin}
            modifierVaccin={modifierVaccin}
          />
        ))}
      </div>
    </div>
  )
}
