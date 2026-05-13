"use client";

import { motion } from "framer-motion";
import { Factory, Warehouse, Pill, Car } from "lucide-react";

const industries = [
  { name: "Warehouse", icon: Warehouse },
  { name: "Food Processing", icon: Factory },
  { name: "Pharma", icon: Pill },
  { name: "Automotive", icon: Car },
];

export function ProofBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Optimized for:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-700"
              >
                <industry.icon className="h-5 w-5 text-blue-700" />
                <span className="font-medium">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
