import React from 'react'

export default function Automation(){
  const items = [
    {title:'Infrastructure as Code', desc:'Terraform, Ansible, and CloudFormation for reproducible infrastructure.'},
    {title:'CI/CD Pipelines', desc:'Automated build, test, and deployment orchestration across environments.'},
    {title:'Monitoring & Observability', desc:'Real-time metrics, logging, alerting with Prometheus, Grafana, and ELK.'},
    {title:'Container Orchestration', desc:'Kubernetes, Docker, and microservices deployment automation.'},
    {title:'Cloud Automation', desc:'Multi-cloud provisioning and management across AWS, Azure, and GCP.'},
    {title:'Configuration Management', desc:'Automated server configuration, patching, and compliance management.'}
  ]
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-thin mb-2">Infrastructure Automation</h2>
      <p className="text-base text-gray-600 dark:text-slate-300 mb-6 font-Poppins font-normal max-w-3xl">
        Streamline operations with intelligent automation that reduces manual work, accelerates deployments, and ensures consistency across your infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {items.map(it => (
          <div key={it.title} className="bg-white dark:bg-slate-800 rounded-xl p-4 min-h-[140px] border border-black/10 dark:border-slate-700 transition-transform duration-200 hover:-translate-y-2 hover:shadow-card hover:border-emerald-500">
            <h4 className="text-2xl font-extralight text-gray-900 dark:text-slate-100">{it.title}</h4>
            <p className="text-base mt-2 text-gray-600 dark:text-slate-300 font-Poppins">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
