import React from 'react'

export default function IotServices(){
  const items = [
    {title:'Smart Infrastructure', desc:'Connected systems for intelligent building and facility management.'},
    {title:'Industrial IoT', desc:'Real-time monitoring, predictive maintenance and process optimization.'},
    {title:'IoT Analytics', desc:'Data-driven insights from connected devices and sensors.'}
  ]
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-thin mb-2">IoT Services</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map(it => (
          <div key={it.title} className="bg-white rounded-xl p-4 w-[260px] min-h-[120px] border border-black/10 transition-transform duration-200 hover:-translate-y-2 hover:shadow-card">
            <h4 className="text-2xl font-extralight">{it.title}</h4>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
