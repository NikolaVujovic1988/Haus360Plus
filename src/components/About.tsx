import { Shield, Clock, Users, ThumbsUp } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Clock, value: "Seit 2024", label: "in Remscheid aktiv" },
  { icon: Users, value: "50+", label: "zufriedene Kunden" },
  { icon: Shield, value: "100%", label: "Festpreisgarantie" },
  { icon: ThumbsUp, value: "360°", label: "Rundum-Service" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1670851050245-d861fd433d06?w=800&q=80"
                alt="Professionelles Kleinunternehmer-Team — Foto: Unsplash"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -z-10 -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary-200/50" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">
              Über Uns
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
              Wir behandeln Ihre Immobilie, als wäre es unsere eigene.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Haus360Plus wurde von Vladimir Djuric mit einer klaren Vision
              gegründet: Immobilienbesitzern in Remscheid einen Service zu
              bieten, der wirklich alles abdeckt — zuverlässig, transparent
              und persönlich.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Wir kennen die Bedürfnisse unserer Region. Ob Mehrfamilienhaus,
              Gewerbeeinheit oder Privatimmobilie — unser Team ist vor Ort, wenn
              Sie uns brauchen. Mit festen Ansprechpartnern, klaren Abläufen
              und dem Anspruch, jedes Detail richtig zu machen.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <stat.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
