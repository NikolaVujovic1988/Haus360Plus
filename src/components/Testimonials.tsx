import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Seit Haus360Plus unser Treppenhaus reinigt, bekommen wir regelmäßig Komplimente von Besuchern. Der Unterschied war ab Tag eins spürbar.",
    name: "Familie Schneider",
    location: "Remscheid-Lennep",
    rating: 5,
  },
  {
    quote:
      "Als Hausverwaltung brauchen wir einen Partner, der mitdenkt. Vlado und sein Team haben unseren Aufwand um 80% reduziert. Absolut empfehlenswert.",
    name: "M. Weber",
    location: "Hausverwaltung Weber, Remscheid",
    rating: 5,
  },
  {
    quote:
      "Endlich ein Hausmeisterservice, der wirklich zuverlässig ist. Festpreise, pünktlich, und man muss nichts zweimal sagen. Genau so sollte es sein.",
    name: "Thomas K.",
    location: "Remscheid-Mitte",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">
            Kundenstimmen
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Vertrauen entsteht durch Leistung. Hier erfahren Sie, was
            Immobilienbesitzer in Remscheid über die Zusammenarbeit mit uns
            berichten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-primary-200" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
