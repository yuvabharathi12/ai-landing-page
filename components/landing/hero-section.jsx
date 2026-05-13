import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                <Shield className="h-4 w-4 text-blue-700" />
                AI-Powered Industrial Layout Engineering
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl xl:text-6xl leading-tight">
                20 Years of Civil Engineering Wisdom.{" "}
                <span className="text-blue-700">Accelerated by Agentic AI.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Transform complex site constraints into optimized industrial layouts. 
                Our AI combines decades of engineering expertise with deterministic algorithms 
                to deliver board-ready feasibility studies in 48 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-800 transition-colors">
                Secure a Feasibility Audit
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                View Sample Deliverables
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">500+</p>
                <p className="text-sm text-slate-600">Projects Delivered</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">48hrs</p>
                <p className="text-sm text-slate-600">Turnaround Time</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">99.2%</p>
                <p className="text-sm text-slate-600">Accuracy Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl overflow-hidden">
              <img
                src="/images/hero-hybrid-view.jpg"
                alt="Hybrid View - 2D technical site plan transitioning to 3D industrial render"
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Hybrid View</p>
                    <p className="text-sm font-semibold text-slate-900">2D Plan → 3D Render Transition</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-slate-600">Live Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
