import React from 'react'

export default function SoftwareSolutions(){
  const items = [
    {title:'Custom Software', desc:'From enterprise apps to integrations.'},
    {title:'AI & Mobile', desc:'AI pipelines, mobile apps and cross-platform UX.'}
  ]
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Software Solutions</h2>
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
