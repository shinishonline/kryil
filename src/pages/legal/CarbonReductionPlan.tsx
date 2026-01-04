import LegalPageLayout from './LegalPageLayout';

export default function CarbonReductionPlan() {
  return (
    <LegalPageLayout title="Carbon Reduction Plan" lastUpdated="January 1, 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Commitment Statement</h2>
        <p className="leading-relaxed">
          Kryil Infotech Private Limited is committed to achieving Net Zero carbon emissions by 2040. We recognize our responsibility to minimize our environmental impact and contribute to global efforts to combat climate change. This Carbon Reduction Plan outlines our current emissions, reduction targets, and the actions we are taking to achieve them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Our Carbon Footprint</h2>
        <p className="leading-relaxed mb-4">
          As a technology services company, our carbon emissions primarily arise from:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold text-[#dff140] mb-2">Scope 1 - Direct Emissions</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Company-owned vehicles</li>
              <li>On-site fuel combustion</li>
              <li>Refrigerant gases</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-lg font-semibold text-[#dff140] mb-2">Scope 2 - Indirect Emissions</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Purchased electricity</li>
              <li>Data center energy consumption</li>
              <li>Office heating and cooling</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-lg md:col-span-2">
            <h3 className="text-lg font-semibold text-[#dff140] mb-2">Scope 3 - Value Chain Emissions</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Business travel</li>
              <li>Employee commuting</li>
              <li>Purchased goods and services</li>
              <li>Cloud computing services</li>
              <li>Waste disposal</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Reduction Targets</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-green-400 mb-2">Near-term Target (2028)</h3>
            <p>50% reduction in carbon emissions compared to 2024 baseline</p>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Medium-term Target (2035)</h3>
            <p>80% reduction in carbon emissions compared to 2024 baseline</p>
          </div>
          <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Long-term Target (2040)</h3>
            <p>Net Zero carbon emissions across all scopes</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Carbon Reduction Initiatives</h2>

        <h3 className="text-xl font-semibold text-white/90 mb-3">Energy Efficiency</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Transition to energy-efficient LED lighting in all offices</li>
          <li>Implementation of smart building management systems</li>
          <li>Regular energy audits and optimization</li>
          <li>Use of energy-efficient IT equipment and servers</li>
          <li>Optimization of data center cooling systems</li>
        </ul>

        <h3 className="text-xl font-semibold text-white/90 mb-3">Renewable Energy</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Installation of solar panels at our facilities</li>
          <li>Procurement of renewable energy certificates</li>
          <li>Partnership with green energy providers</li>
          <li>Target: 100% renewable electricity by 2030</li>
        </ul>

        <h3 className="text-xl font-semibold text-white/90 mb-3">Sustainable Transportation</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Electric vehicle charging stations at offices</li>
          <li>Transition to electric/hybrid company vehicles</li>
          <li>Encouraging public transport and carpooling</li>
          <li>Remote work policies to reduce commuting</li>
          <li>Virtual meeting preference over business travel</li>
        </ul>

        <h3 className="text-xl font-semibold text-white/90 mb-3">Digital Sustainability</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Selection of green cloud service providers</li>
          <li>Optimization of code for energy efficiency</li>
          <li>Efficient data storage and management</li>
          <li>Green software development practices</li>
        </ul>

        <h3 className="text-xl font-semibold text-white/90 mb-3">Waste Reduction</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Paperless office initiatives</li>
          <li>E-waste recycling programs</li>
          <li>Responsible disposal of IT equipment</li>
          <li>Reduction of single-use plastics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Supply Chain Engagement</h2>
        <p className="leading-relaxed mb-4">
          We are committed to working with our suppliers to reduce emissions across our value chain:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Supplier sustainability assessments</li>
          <li>Preference for suppliers with carbon reduction commitments</li>
          <li>Collaborative initiatives to reduce Scope 3 emissions</li>
          <li>Green procurement policies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Monitoring & Reporting</h2>
        <p className="leading-relaxed mb-4">
          We maintain transparency in our carbon reduction efforts through:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Annual carbon footprint measurement and reporting</li>
          <li>Regular progress updates against targets</li>
          <li>Third-party verification of emissions data</li>
          <li>Stakeholder communication and engagement</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Carbon Offsetting</h2>
        <p className="leading-relaxed">
          While our primary focus is on emissions reduction, we will invest in high-quality carbon offset projects to address residual emissions that cannot be eliminated. These projects include reforestation, renewable energy projects, and community-based initiatives. We prioritize certified projects that deliver verified environmental and social benefits.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Employee Engagement</h2>
        <p className="leading-relaxed mb-4">
          We believe in engaging our employees in our sustainability journey:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Sustainability awareness training programs</li>
          <li>Green champions program</li>
          <li>Employee suggestions for carbon reduction</li>
          <li>Recognition for sustainable practices</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Declaration & Sign-off</h2>
        <p className="leading-relaxed mb-4">
          This Carbon Reduction Plan has been reviewed and approved by the leadership of Kryil Infotech Private Limited. We are committed to implementing the measures outlined in this plan and will review and update it annually to ensure continuous improvement in our environmental performance.
        </p>
        <div className="p-4 bg-white/5 rounded-lg">
          <p><strong>Kryil Infotech Private Limited</strong></p>
          <p>Workflow Ranka Junction, 3rd Floor, 224 KR Puram</p>
          <p>Bangalore, Karnataka - 560016, India</p>
          <p className="mt-2">Email: sustainability@kryil.com</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
