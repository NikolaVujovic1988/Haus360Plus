import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Über Uns", href: "#ueber-uns" },
      { label: "Preise", href: "#preise" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { label: "Reinigungsservice", href: "#leistungen" },
      { label: "Hausmeisterservice", href: "#leistungen" },
      { label: "Grünanlagenpflege", href: "#leistungen" },
      { label: "Reparaturdienst", href: "#leistungen" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-baseline gap-0.5">
              <span className="text-2xl font-bold tracking-tight text-white">
                Haus360
              </span>
              <span className="text-2xl font-bold tracking-tight text-primary-500">
                Plus
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Ihr regionaler Partner für professionelle Gebäudereinigung,
              Hausmeisterdienste und Instandhaltung in Remscheid und Umgebung.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="h-4 w-4 text-primary-400" />
                <a href="tel:021914376329" className="hover:text-primary-400">
                  02191 - 4376329
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 text-primary-400" />
                <a
                  href="mailto:info@haus360plus.de"
                  className="hover:text-primary-400"
                >
                  info@haus360plus.de
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-primary-400" />
                Remscheid, NRW
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Haus360Plus. Alle Rechte
              vorbehalten. Inhaber: Vladimir Djuric.
            </p>
            <p className="text-xs text-white/30">
              Bilder:{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/50"
              >
                Unsplash
              </a>{" "}
              (kostenlose Lizenz)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
