import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-700/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          Bereit für ein sauberes, sorgenfreies Gebäude?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-300">
          Fordern Sie jetzt Ihr kostenloses, unverbindliches Angebot an. Wir
          besichtigen Ihr Objekt und erstellen Ihnen ein maßgeschneidertes
          Konzept — innerhalb von 48 Stunden.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#kontakt"
            className="flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-primary-950 shadow-lg transition-all hover:bg-primary-400 hover:shadow-xl"
          >
            Kostenloses Angebot anfordern
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:021914376329"
            className="flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            02191 - 4376329
          </a>
        </div>
      </div>
    </section>
  );
}
