import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basis",
    description: "Ideal für Privatimmobilien und kleine Wohnanlagen.",
    price: "Auf Anfrage",
    popular: false,
    features: [
      "Treppenhausreinigung",
      "Grundlegende Außenpflege",
      "Winterdienst (Gehwege)",
      "Monatliche Begehung",
      "Fester Ansprechpartner",
    ],
  },
  {
    name: "Premium",
    description: "Für Mehrfamilienhäuser und Hausverwaltungen.",
    price: "Auf Anfrage",
    popular: true,
    features: [
      "Alle Basis-Leistungen",
      "Grünanlagenpflege",
      "Kleinreparaturen inklusive",
      "Wöchentliche Begehung",
      "24h-Notfallnummer",
      "Quartalsberichte",
    ],
  },
  {
    name: "Komplett 360°",
    description: "Der volle Rundum-Service für anspruchsvolle Objekte.",
    price: "Auf Anfrage",
    popular: false,
    features: [
      "Alle Premium-Leistungen",
      "Fensterreinigung",
      "Tiefgaragenreinigung",
      "Saisonale Bepflanzung",
      "Handwerker-Koordination",
      "Energiecheck & Prüfungen",
      "Persönlicher Objektbetreuer",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">
            Angebot & Preise
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
            Transparente Pakete — ohne versteckte Kosten
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Jede Immobilie ist einzigartig. Deshalb erstellen wir Ihnen ein
            individuelles Angebot, das exakt auf Ihre Bedürfnisse zugeschnitten
            ist.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-primary-400 bg-primary-50/30 shadow-md"
                  : "border-border bg-white shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 flex items-center gap-1 rounded-bl-xl bg-primary-500 px-4 py-1.5 text-xs font-semibold text-primary-950">
                  <Star className="h-3 w-3" />
                  Beliebt
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-3xl font-bold text-foreground">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Individuell nach Objektgröße
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#kontakt"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary-500 text-primary-950 shadow-md hover:bg-primary-400 hover:shadow-lg"
                    : "border border-primary-300 text-primary-700 hover:bg-primary-50"
                }`}
              >
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
