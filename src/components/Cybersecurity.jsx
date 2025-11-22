import React from 'react'

export default function Cybersecurity(){
  const items = [
    {title:'Threat Detection', desc:'24/7 SOC, IDS/IPS and threat intelligence.'},
    {title:'Incident Response', desc:'Rapid response, forensics and containment.'},
    {title:'VAPT / Cloud Security', desc:'Vulnerability testing and cloud audits.'}
  ]
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Cybersecurity</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map(it => (
          <div key={it.title} className="bg-white rounded-xl p-4 w-[260px] min-h-[120px] border border-black/10 transition-transform duration-200 hover:-translate-y-2 hover:shadow-card">
            <h4 className="text-xl font-semibold">{it.title}</h4>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
