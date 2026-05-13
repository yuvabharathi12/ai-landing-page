'use client'

import { motion } from 'framer-motion'
import { FileText, Box, BarChart3, ClipboardCheck, Play } from 'lucide-react'

function DeliverablesSection() {
  const deliverables = [
    {
      icon: FileText,
      title: 'DWG Master Plan',
      description: 'Production-ready AutoCAD files with all layers, dimensions, and annotations following industry standards.',
      format: '.dwg / .dxf',
      image: '/images/dwg-blueprint.jpg',
    },
    {
      icon: Box,
      title: '3D BIM Model',
      description: 'Fully detailed Revit model with structural elements, MEP rough-ins, and clash detection reports.',
      format: '.rvt / .ifc',
      image: '/images/bim-revit.jpg',
    },
    {
      icon: BarChart3,
      title: 'Earthwork Report',
      description: 'Comprehensive cut/fill analysis with volume calculations, mass haul diagrams, and cost estimates.',
      format: '.pdf / .xlsx',
      image: '/images/earthwork-chart.jpg',
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance Checklist',
      description: 'RAG-rated regulatory compliance matrix covering FSSAI, MOEF, fire safety, and local zoning requirements.',
      format: '.pdf',
      image: '/images/compliance-checklist.jpg',
    },
  ]

  return (
    <section id="deliverables" className="py-20 lg:py-28 bg-slate-50">
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
            What You <span className="text-blue-700">Receive</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every engagement includes a complete set of professional deliverables, 
            ready for regulatory submission and construction documentation.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-2/5 aspect-video sm:aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-blue-700" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Walkthrough */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
        >
          <div className="aspect-video">
            <img
              src="/images/walkthrough-preview.jpg"
              alt="Cinematic 3D walkthrough preview"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <Play size={32} className="text-blue-700 ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Label */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-200">
            <div className="text-sm font-semibold text-slate-900">Cinematic 3D Walkthrough</div>
            <div className="text-xs text-slate-500">Included with every project</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeliverablesSection
