"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="h-9 w-9 rounded-lg bg-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              LayoutX<span className="text-blue-700">.Ai</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#framework" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </a>
            <a href="#deliverables" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Deliverables
            </a>
            <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Industries
            </a>
            <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            <div className="flex flex-col gap-4">
              <a href="#framework" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                How It Works
              </a>
              <a href="#deliverables" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Deliverables
              </a>
              <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Industries
              </a>
              <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
