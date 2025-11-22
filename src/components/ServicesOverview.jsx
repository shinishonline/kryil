import React from 'react'
import SoftwareSolutions from './SoftwareSolutions'
import Cybersecurity from './Cybersecurity'
import Automation from './Automation'
import IotServices from './IotServices'

export default function ServicesOverview() {
  return (
    <div className="space-y-16 py-10">
      <div className="text-center mb-12">
        <h2 className="font-Poppins text-6xl md:text-7xl font-thin text-emerald-600 mb-4">
          Our Capabilities
        </h2>
        <p className="text-base text-gray-600 dark:text-slate-300 max-w-3xl mx-auto font-Poppins font-normal">
          Comprehensive technology solutions designed to transform your business and drive innovation.
        </p>
      </div>

      <div className="space-y-12">
        <SoftwareSolutions />
        <Cybersecurity />
        <Automation />
        <IotServices />
      </div>
    </div>
  )
}
