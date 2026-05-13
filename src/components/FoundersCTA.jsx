import { motion } from 'framer-motion'
import { ArrowRight, Clock, FileCheck, Phone } from 'lucide-react'

function FoundersCTA() {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="relative">
              <div className="text-6xl text-blue-500 absolute -top-4 -left-2">&ldquo;</div>
              <p className="text-xl sm:text-2xl text-white leading-relaxed pl-8 mb-6">
                After 20 years of designing industrial facilities, I realized that most feasibility 
                studies fail not because of bad intentions, but because of disconnected workflows. 
                LayoutX.Ai bridges that gap with engineering precision and AI speed.
              </p>
              <footer className="pl-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Srinivas Kumar</div>
                    <div className="text-sm text-slate-400">Founder & Chief Engineer</div>
                    <div className="text-xs text-slate-500 mt-1">M.Tech, IISc Bangalore</div>
                  </div>
                </div>
              </footer>
            </blockquote>

            <div className="mt-10 pt-10 border-t border-slate-700">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">127+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">12</div>
                  <div className="text-sm text-slate-400">Team Engineers</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            id="cta"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full mb-6">
              <Clock size={16} className="text-orange-600" />
              <span className="text-sm font-semibold text-orange-600">48-Hour Feasibility Sprint</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Get Your Layout Audit in 48 Hours
            </h3>

            <p className="text-slate-600 mb-8">
              Upload your site survey and requirements. Our AI analyzes constraints while 
              our engineers validate the findings. Receive a comprehensive feasibility report 
              with actionable recommendations.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <FileCheck size={20} className="text-green-600" />
                <span className="text-slate-700">Site constraint analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <FileCheck size={20} className="text-green-600" />
                <span className="text-slate-700">Preliminary layout options</span>
              </li>
              <li className="flex items-center gap-3">
                <FileCheck size={20} className="text-green-600" />
                <span className="text-slate-700">Risk assessment & recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <FileCheck size={20} className="text-green-600" />
                <span className="text-slate-700">30-minute review call with engineer</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
              >
                Start Free Audit
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
              >
                <Phone size={18} />
                Schedule a Call
              </a>
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              No commitment required. Free for qualified industrial projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FoundersCTA
