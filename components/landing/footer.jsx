import { Mail, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-white">
                LayoutX<span className="text-blue-400">.Ai</span>
              </span>
            </div>
            <p className="text-sm max-w-sm mb-4">
              AI-powered industrial layout engineering. Transform complex site constraints 
              into optimized, board-ready feasibility studies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Warehouse Layout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pharmaceutical</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:hello@layoutx.ai" className="hover:text-white transition-colors">
                  hello@layoutx.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2026 LayoutX.Ai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
