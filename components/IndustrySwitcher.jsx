'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Factory, Warehouse, Pill, CheckCircle } from 'lucide-react'

function IndustrySwitcher() {
  const [activeTab, setActiveTab] = useState('food')

  const industries = {
    food: {
      icon: Factory,
      label: 'Food Processing',
      image: '/images/food-plant.jpg',
      title: 'FSSAI-Compliant Food Plant Layouts',
      description: 'Purpose-built layouts for food processing facilities that meet all FSSAI requirements from day one.',
      features: [
        'Hygienic zone separation (raw/cooked/pack)',
        'Cold chain flow optimization',
        'HACCP-compliant material paths',
        'Effluent treatment integration',
        'Worker flow & sanitation stations',
      ],
      stat: '34 Food Plants Delivered',
    },
    warehouse: {
      icon: Warehouse,
      label: 'Warehousing',
      image: '/images/warehouse.jpg',
      title: 'High-Density Warehouse Optimization',
      description: 'Maximize storage capacity and picking efficiency with AI-optimized racking layouts.',
      features: [
        'Racking configuration optimization',
        'Dock door placement analysis',
        'Forklift traffic flow modeling',
        'Fire aisle compliance mapping',
        'Mezzanine feasibility studies',
      ],
      stat: '52 Warehouses Delivered',
    },
    pharma: {
      icon: Pill,
      label: 'Pharmaceutical',
      image: '/images/pharma.jpg',
      title: 'GMP-Ready Pharmaceutical Facilities',
      description: 'Cleanroom layouts that meet WHO-GMP and Schedule M requirements for pharmaceutical manufacturing.',
      features: [
        'Cleanroom classification zoning',
        'Pressure cascade planning',
        'Personnel & material airlocks',
        'HVAC system integration',
        'Validation documentation support',
      ],
      stat: '28 Pharma Facilities Delivered',
    },
  }

  const active = industries[activeTab]

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Industry <span className="text-blue-700">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Deep specialization across industrial sectors with built-in regulatory compliance for each industry.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 rounded-xl p-1.5">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeTab === key
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <industry.icon size={18} />
                <span className="hidden sm:inline">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-4">
                <active.icon size={16} className="text-blue-700" />
                <span className="text-sm font-medium text-blue-700">{active.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {active.title}
              </h3>

              <p className="text-slate-600 mb-6">{active.description}</p>

              <ul className="space-y-3 mb-8">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="text-2xl font-bold text-blue-700">{active.stat}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default IndustrySwitcher
