"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Calculator } from "lucide-react";
import Image from "next/image";

export function LossAversionSection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
              <AlertTriangle className="h-4 w-4" />
              Risk Assessment
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              The $200,000 Calculation
            </h2>

            <p className="text-lg text-slate-600">
              Formation Level Datum (FLD) errors are the silent killers of industrial projects. 
              A miscalculation of just 300mm in finished floor level can cascade into:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="rounded-lg bg-red-100 p-2">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Earthwork Cost Overruns</h4>
                  <p className="text-sm text-slate-600">
                    Unexpected cut/fill volumes can add $50,000-$150,000 to your excavation budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="rounded-lg bg-red-100 p-2">
                  <Calculator className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Drainage & Compliance Failures</h4>
                  <p className="text-sm text-slate-600">
                    Improper site grading leads to water ingress, regulatory rejection, and costly redesigns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="rounded-lg bg-red-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Schedule Delays</h4>
                  <p className="text-sm text-slate-600">
                    FLD corrections mid-construction can delay project handover by 4-8 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-blue-700 bg-blue-50 p-6">
              <p className="text-lg font-semibold text-blue-900">
                LayoutX.Ai eliminates FLD risk by validating every datum against topographic survey data 
                before your first excavator arrives on site.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl overflow-hidden">
              <Image
                src="/images/heat-map-site.jpg"
                alt="Topographic heat map showing site layout with error zones highlighted in red"
                width={600}
                height={500}
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute top-6 right-6 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                      <span className="text-xs text-slate-600">Safe Zone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="text-xs text-slate-600">Caution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="text-xs text-slate-600">Error/Loss</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Potential Savings</p>
              <p className="text-2xl font-bold text-green-600">$200,000+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
