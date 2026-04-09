import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-400 relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <p className="font-serif text-3xl text-white font-semibold leading-none">PJD</p>
              <p className="text-gold-500 text-[10px] tracking-[0.4em] uppercase mt-1">Custom Tailoring & Alterations</p>
            </div>
            <p className="text-sm leading-relaxed text-charcoal-500 max-w-xs font-light">
              Premium tailoring and alterations in the heart of New York City. Crafted with precision, worn with confidence.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://wa.me/19179383985"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-charcoal-700 hover:border-gold-500 flex items-center justify-center transition-colors duration-200 text-charcoal-400 hover:text-gold-400"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.789.468 3.47 1.287 4.934L2 22l5.234-1.273A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.168-1.174l-.298-.178-3.107.754.78-3.02-.195-.31A7.95 7.95 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.162.242-.626.787-.768.949-.141.162-.283.182-.525.061-.242-.121-1.022-.377-1.947-1.2-.72-.641-1.206-1.433-1.348-1.675-.141-.242-.015-.373.106-.493.109-.109.242-.283.363-.424.121-.141.162-.242.242-.404.08-.162.04-.303-.02-.424-.061-.121-.545-1.313-.747-1.797-.197-.472-.397-.408-.545-.416l-.464-.008c-.162 0-.424.061-.646.303-.222.242-.848.829-.848 2.021s.868 2.344.989 2.506c.121.162 1.708 2.607 4.139 3.655.579.25 1.031.399 1.383.511.581.185 1.11.159 1.528.097.466-.069 1.432-.585 1.634-1.15.202-.565.202-1.049.141-1.15-.06-.101-.222-.162-.464-.283z"/>
                </svg>
              </a>
              <a
                href="tel:+19179383985"
                className="w-9 h-9 border border-charcoal-700 hover:border-gold-500 flex items-center justify-center transition-colors duration-200 text-charcoal-400 hover:text-gold-400"
                aria-label="Phone"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-[10px] font-medium uppercase tracking-[0.3em] mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors duration-200 font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[10px] font-medium uppercase tracking-[0.3em] mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="tel:+19179383985" className="hover:text-gold-400 transition-colors duration-200 text-charcoal-300">
                  +1 (917) 938-3985
                </a>
              </li>
              <li className="leading-relaxed">
                260 W 36th St, Suite 802<br />New York, NY 10018
              </li>
              <li>Mon – Sat: 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-charcoal-600">
          <span>© {new Date().getFullYear()} PJD Custom Tailoring & Alterations. All rights reserved.</span>
          <span>Website by <span className="text-gold-500">Slate Studio</span></span>
        </div>
      </div>
    </footer>
  );
}
