import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react'

function LossAversionSection() {
  const riskFactors = [
    {
      icon: TrendingDown,
      title: 'Slope Miscalculations',
      description: 'Undetected grade changes requiring expensive earthwork corrections',
      cost: '$45,000 - $120,000',
    },
    {
      icon: AlertTriangle,
      title: 'Setback Violations',
      description: 'Building footprints that violate zoning setback requirements',
      cost: '$30,000 - $80,000',
    },
    {
      icon: Clock,
      title: 'Utility Conflicts',
      description: 'Underground infrastructure collisions discovered during excavation',
      cost: '$50,000 - $150,000',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <DollarSign size={16} className="text-red-600" />
            <span className="text-sm font-semibold text-red-600">The $200,000 Calculation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Feasibility Layout Disconnect Costs<br />
            <span className="text-red-600">More Than You Think</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            When your feasibility study and final layout don&apos;t align, the hidden costs compound. 
            Our analysis of 200+ industrial projects revealed an average loss of $200,000 per project 
            due to Feasibility Layout Disconnect (FLD).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Risk Cards */}
          <div className="space-y-4">
            {riskFactors.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <risk.icon size={24} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">{risk.title}</h3>
                      <span className="text-sm font-bold text-red-600">{risk.cost}</span>
                    </div>
                    <p className="text-sm text-slate-600">{risk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-900 rounded-xl p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Average Total FLD Cost</div>
                  <div className="text-3xl font-bold">$200,000+</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400 mb-1">Projects Analyzed</div>
                  <div className="text-2xl font-bold">200+</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Heat Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="/images/heat-map-site.jpg"
                alt="Site constraint heat map showing risk zones"
                className="w-full h-auto"
              />
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
              <div className="text-xs font-semibold text-slate-700 mb-2">Risk Intensity</div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-6 h-3 bg-green-400 rounded-l"></div>
                  <div className="w-6 h-3 bg-yellow-400"></div>
                  <div className="w-6 h-3 bg-orange-400"></div>
                  <div className="w-6 h-3 bg-red-500 rounded-r"></div>
                </div>
                <span className="text-xs text-slate-500">Low to High</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LossAversionSection
