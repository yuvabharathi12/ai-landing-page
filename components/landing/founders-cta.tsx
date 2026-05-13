"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Award } from "lucide-react";

export function FoundersCTA() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              <Award className="h-4 w-4 text-blue-700" />
              Founder&apos;s Guarantee
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Engineering Excellence, Guaranteed
            </h2>

            <blockquote className="relative">
              <div className="absolute -left-4 top-0 text-6xl text-blue-700/20 font-serif">
                &ldquo;
              </div>
              <p className="text-xl text-slate-700 italic pl-8">
                Having spent two decades at the intersection of civil engineering and 
                computational design—including research at IISc Bangalore—I built LayoutX.Ai 
                to solve a problem I faced on every project: the gap between conceptual 
                feasibility and construction reality.
              </p>
              <p className="text-xl text-slate-700 italic pl-8 mt-4">
                Every layout we deliver is one I would stake my professional reputation on.
              </p>
            </blockquote>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-14 w-14 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                RK
              </div>
              <div>
                <p className="font-bold text-slate-900">Dr. Rajesh Kumar</p>
                <p className="text-sm text-slate-600">
                  Founder & Chief Engineer, IISc Bangalore Alumni
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border-2 border-blue-700 bg-white p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-orange-500 p-2">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    48-Hour Feasibility Sprint
                  </h3>
                  <p className="text-slate-600">Board-ready deliverables in 2 business days</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">No-Risk Pilot</p>
                    <p className="text-sm text-slate-600">
                      100% refund if deliverables don&apos;t meet your engineering standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">PE-Stamped Output</p>
                    <p className="text-sm text-slate-600">
                      Every deliverable reviewed and certified by a licensed Professional Engineer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">NDA Protected</p>
                    <p className="text-sm text-slate-600">
                      Your site data and project details are confidential by default.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors">
                Secure Your Feasibility Audit
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-center text-sm text-slate-500 mt-4">
                Limited availability. Currently accepting 5 new projects per month.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
