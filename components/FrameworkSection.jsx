'use client'

import { motion } from 'framer-motion'
import { Brain, Calculator, UserCheck } from 'lucide-react'

function FrameworkSection() {
  const pillars = [
    {
      icon: Brain,
      title: '20+ Years Engineering Logic',
      subtitle: 'Deep Domain Knowledge',
      description: 'Our AI is trained on decades of civil engineering best practices, site development patterns, and regulatory requirements across industrial sectors.',
      image: '/images/architectural-schematic.jpg',
      points: ['FSSAI & MOEF compliance built-in', 'Industrial zoning expertise', 'Site-specific constraint mapping'],
    },
    {
      icon: Calculator,
      title: 'Deterministic Geometric Engine',
      subtitle: 'Precision Mathematics',
      description: 'Unlike probabilistic AI, our geometric engine uses deterministic calculations for exact spatial relationships, ensuring 100% accuracy in measurements.',
      image: '/images/geometric-engine.jpg',
      points: ['Sub-centimeter accuracy', 'Real-time clash detection', 'Automated setback calculations'],
    },
    {
      icon: UserCheck,
      title: 'Human-in-the-Loop Validation',
      subtitle: 'Expert Review',
      description: 'Every AI-generated layout is reviewed by licensed professional engineers who validate compliance and constructability before delivery.',
      image: '/images/engineering-stamp.jpg',
      points: ['PE-stamped deliverables', 'Regulatory review included', 'Direct engineer access'],
    },
  ]

  return (
    <section id="framework" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How LayoutX.Ai <span className="text-blue-700">Works</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our three-pillar approach combines deep engineering expertise, precise mathematical calculations, 
            and professional validation to deliver reliable, buildable layouts.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <pillar.icon size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-blue-700 uppercase tracking-wide">
                      {pillar.subtitle}
                    </div>
                    <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">{pillar.description}</p>

                <ul className="space-y-2">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FrameworkSection
