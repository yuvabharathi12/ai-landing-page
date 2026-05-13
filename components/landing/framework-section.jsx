import { motion } from "framer-motion";
import { Brain, Calculator, UserCheck } from "lucide-react";

const frameworks = [
  {
    title: "20+ Years Logic",
    description:
      "Our AI is trained on thousands of successfully delivered industrial projects, encoding decades of civil engineering best practices.",
    icon: Brain,
    image: "/images/architectural-schematic.jpg",
    imageAlt: "Architectural schematic overlay",
  },
  {
    title: "Deterministic Math",
    description:
      "No hallucinations. Every calculation is based on validated geometric algorithms and regulatory compliance rules.",
    icon: Calculator,
    image: "/images/geometric-engine.jpg",
    imageAlt: "Geometric spatial engine visualization",
  },
  {
    title: "Human Validation",
    description:
      "Every deliverable is reviewed and stamped by a licensed Professional Engineer before release.",
    icon: UserCheck,
    image: "/images/engineering-stamp.jpg",
    imageAlt: "Professional engineering stamp and seal",
  },
];

export function FrameworkSection() {
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
            Expert-in-the-Loop Framework
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            AI Power. Engineering Precision.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our unique framework combines machine intelligence with human expertise 
            to deliver layouts you can trust.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={framework.image}
                  alt={framework.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 backdrop-blur-sm p-2">
                  <framework.icon className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {framework.title}
                </h3>
                <p className="text-slate-600">{framework.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
