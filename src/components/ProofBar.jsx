import { motion } from 'framer-motion'
import { Factory, Warehouse, Pill, Car } from 'lucide-react'

function ProofBar() {
  const industries = [
    { icon: Factory, label: 'Food Processing' },
    { icon: Warehouse, label: 'Warehousing' },
    { icon: Pill, label: 'Pharmaceutical' },
    { icon: Car, label: 'Automotive' },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Trusted by leading industrial developers across
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                <industry.icon size={28} className="text-blue-700" />
              </div>
              <span className="text-sm font-medium text-slate-700">{industry.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofBar
