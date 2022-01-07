import React from "react"
import AfficheJpo from "./AfficheJpo"

export default function ListeJpos({ jpos, supprimerJpo, modifierJpo }) {
  console.log(jpos)
  return (
    <div >
      <div>
        {jpos.map((jpo) => (
          <AfficheJpo
            key={jpo.id}
            id={jpo._id}
            dateJpo={jpo.dateJpo}
            supprimerJpo={supprimerJpo}
            modifierJpo={modifierJpo}
          />
        ))}
      </div>
    </div>
  )
}
