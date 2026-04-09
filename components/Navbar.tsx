"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-charcoal-100/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span
            className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-charcoal-950" : "text-white"
            }`}
          >
            PJD
          </span>
          <span
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-gold-600" : "text-gold-300"
            }`}
          >
            Custom Tailoring
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm tracking-wide uppercase font-medium transition-colors duration-300 hover:text-gold-500 group ${
                pathname === l.href
                  ? "text-gold-500"
                  : scrolled
                  ? "text-charcoal-700"
                  : "text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                  pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <a
            href="tel:+19179383985"
            className="ml-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold rounded-full transition-all duration-300 tracking-wide"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-charcoal-900" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "opacity-0" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-charcoal-100 px-4 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-3 text-sm uppercase tracking-wide font-medium border-b border-charcoal-100/60 hover:text-gold-500 transition-colors ${
                pathname === l.href ? "text-gold-500" : "text-charcoal-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+19179383985"
            className="mt-4 block text-center px-5 py-3 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
