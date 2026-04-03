import { Shield, Clock, Users, ThumbsUp } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Clock, value: "Seit 2025", label: "in Remscheid aktiv" },
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
                src="/images/ueber-uns-haus360-remscheid.png"
                alt="Haus360Plus Team in Remscheid"
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
              Ihr Partner für Sauberkeit und Werterhalt
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ob gepflegte Büroflächen, saubere Treppenhäuser oder ein
              einladendes Außengelände: Unser Team sorgt mit festen Abläufen
              und höchstem Qualitätsanspruch dafür, dass Ihre Objekte stets
              einen perfekten Eindruck hinterlassen.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vom privaten Wohnobjekt bis zur Gewerbeeinheit bieten wir
              maßgeschneiderte Lösungen, die genau dort ansetzen, wo wir
              gebraucht werden.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Haus360Plus</span>{" "}
              – damit Sie den Kopf frei haben für Ihr Kerngeschäft oder Ihren
              Feierabend.
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
