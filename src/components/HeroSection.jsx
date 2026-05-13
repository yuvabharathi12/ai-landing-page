import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

function HeroSection() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
              <span className="text-sm font-medium text-blue-700">AI-Powered Layout Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              20 Years of Civil-Engineering Wisdom.{' '}
              <span className="text-blue-700">Agentic-AI Speed.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Most feasibility studies miss hidden site constraints that surface during construction. 
              LayoutX.Ai combines deep engineering expertise with AI to catch costly errors before they happen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Get a Free Layout Audit
                <ArrowRight size={18} />
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg transition-colors">
                <Play size={18} className="text-blue-700" />
                Watch 2-min Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900">127+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">48hr</div>
                <div className="text-sm text-slate-500">Feasibility Studies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">$2.3M</div>
                <div className="text-sm text-slate-500">Client Savings</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src="/images/hero-hybrid-view.jpg"
                alt="2D to 3D industrial layout transformation"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Live 2D to 3D Sync</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 max-w-[200px] hidden lg:block">
              <div className="text-xs text-slate-500 mb-1">Average Time Saved</div>
              <div className="text-2xl font-bold text-blue-700">6 Weeks</div>
              <div className="text-xs text-slate-500">per project</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
