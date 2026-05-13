import './globals.css'

export const metadata = {
  title: 'LayoutX.Ai - AI-Powered Industrial Layout Engineering',
  description: '20 years of civil engineering wisdom accelerated by Agentic AI. Transform complex site constraints into optimized industrial layouts with board-ready feasibility studies in 48 hours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-50">
      <body>{children}</body>
    </html>
  )
}
