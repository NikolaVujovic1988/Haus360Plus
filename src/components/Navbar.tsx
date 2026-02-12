"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über Uns" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-baseline gap-0.5">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Haus360
            </span>
            <span className="text-2xl font-bold tracking-tight text-primary-500">
              Plus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary-600 hover:bg-primary-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:021914376329"
              className="flex items-center gap-2 rounded-full bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-600 hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-primary-50 md:hidden"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:021914376329"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            02191 - 4376329
          </a>
        </div>
      </div>
    </nav>
  );
}
