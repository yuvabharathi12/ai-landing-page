import { Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
  const links = {
    product: [
      { label: 'How It Works', href: '#framework' },
      { label: 'Deliverables', href: '#deliverables' },
      { label: 'Industries', href: '#industries' },
      { label: 'Pricing', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#founders' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LX</span>
              </div>
              <span className="font-bold text-xl text-slate-900">LayoutX.Ai</span>
            </a>
            <p className="text-sm text-slate-600 mb-6 max-w-sm">
              AI-powered industrial layout engineering. 20 years of civil engineering 
              wisdom accelerated by Agentic AI.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-200 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center text-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-200 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-200 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-blue-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-blue-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-blue-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} LayoutX.Ai. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made with precision in Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
