import { motion } from "framer-motion";
import { FileCode, Boxes, BarChart3, ClipboardCheck, Play } from "lucide-react";

const deliverables = [
  {
    title: "Engineering-Grade DWG",
    description: "AutoCAD-compatible drawings with full layer standards and dimensions.",
    icon: FileCode,
    image: "/images/dwg-blueprint.jpg",
    imageAlt: "Complex engineering blueprint CAD drawing",
  },
  {
    title: "BIM-Ready Revit",
    description: "3D models ready for clash detection and construction coordination.",
    icon: Boxes,
    image: "/images/bim-revit.jpg",
    imageAlt: "3D BIM Revit model of factory structure",
  },
  {
    title: "Earthwork Report",
    description: "Detailed cut/fill analysis with volume calculations and cost estimates.",
    icon: BarChart3,
    image: "/images/earthwork-chart.jpg",
    imageAlt: "Cut and fill volume chart",
  },
  {
    title: "Regulatory RAG Audit",
    description: "Compliance checklist against local building codes and regulations.",
    icon: ClipboardCheck,
    image: "/images/compliance-checklist.jpg",
    imageAlt: "Regulatory compliance checklist with RAG status",
  },
];

export function DeliverablesSection() {
  return (
    <section className="bg-blue-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 mb-4">
            The Board-Ready Suite
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Everything You Need to Break Ground
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A complete deliverables package that satisfies stakeholders, regulators, and contractors.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="h-4 w-4 text-blue-700" />
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <img
                src="/images/walkthrough-preview.jpg"
                alt="Cinematic architectural walkthrough preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <button className="group flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-sm px-6 py-4 shadow-lg hover:bg-white transition-colors">
                  <div className="rounded-full bg-orange-500 p-3">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Cinematic Walkthrough</p>
                    <p className="text-sm text-slate-600">
                      Experience your facility before construction
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
