import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Warehouse, Pill } from "lucide-react";

const industries = [
  {
    id: "food",
    name: "Food Plants",
    icon: Factory,
    image: "/images/food-plant.jpg",
    imageAlt: "Food processing plant industrial layout",
    title: "Food Processing Facilities",
    description:
      "Optimized layouts for FSSC 22000 compliance with proper zoning for raw materials, processing, and packaging areas. Temperature-controlled storage integration included.",
    features: [
      "Cleanroom zoning optimization",
      "Cold chain logistics flow",
      "HACCP-compliant layouts",
      "Waste management integration",
    ],
  },
  {
    id: "warehouse",
    name: "Warehousing",
    icon: Warehouse,
    image: "/images/warehouse.jpg",
    imageAlt: "Modern warehouse racking layout",
    title: "Warehouse & Distribution",
    description:
      "Maximum storage density with optimized pick paths and dock door configurations. Our AI calculates pallet positions to minimize forklift travel time.",
    features: [
      "Racking layout optimization",
      "Dock door positioning",
      "Pick path efficiency",
      "Fire egress compliance",
    ],
  },
  {
    id: "pharma",
    name: "Pharma",
    icon: Pill,
    image: "/images/pharma.jpg",
    imageAlt: "Pharmaceutical cleanroom facility layout",
    title: "Pharmaceutical Manufacturing",
    description:
      "GMP-compliant facility layouts with proper cleanroom classifications, airlock sequences, and personnel/material flow separation.",
    features: [
      "ISO cleanroom zoning",
      "Airlock sequence design",
      "Personnel flow mapping",
      "HVAC integration planning",
    ],
  },
];

export function IndustrySwitcher() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 mb-4">
            Industry-Specific Solutions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Tailored for Your Sector
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Each industry has unique requirements. Our AI adapts to deliver compliant,
            optimized layouts specific to your operations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
                activeIndustry.id === industry.id
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <industry.icon className="h-4 w-4" />
              {industry.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 p-3">
                <div className="flex items-center gap-2">
                  <activeIndustry.icon className="h-5 w-5 text-blue-700" />
                  <span className="font-semibold text-slate-900">
                    {activeIndustry.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {activeIndustry.title}
              </h3>
              <p className="text-lg text-slate-600">{activeIndustry.description}</p>
              <div className="space-y-3">
                {activeIndustry.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-700" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-800 transition-colors">
                Get {activeIndustry.name} Layout Quote
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

