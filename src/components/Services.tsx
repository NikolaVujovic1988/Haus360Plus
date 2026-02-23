import {
  Sparkles,
  Wrench,
  TreePine,
  Home,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Sparkles,
    title: "Reinigungsservice",
    description:
      "Makellose Sauberkeit in Treppenhäusern, Bürogebäuden und Wohnanlagen. Unsere geschulten Reinigungskräfte arbeiten mit professionellen Mitteln — für ein Ergebnis, das man sieht und spürt.",
    image:
      "https://images.unsplash.com/photo-1650361128524-7ccb74b3ab0a?w=600&q=80",
    alt: "Professionelle Bodenreinigung — Foto: Unsplash",
  },
  {
    icon: Home,
    title: "Hausmeisterservice",
    description:
      "Ihr Gebäude in besten Händen. Wir übernehmen den kompletten Hausmeisterdienst — von der Kontrolle technischer Anlagen bis zum Winterdienst. Zuverlässig, wie ein guter Nachbar.",
    image:
      "https://images.unsplash.com/photo-1733286125300-b4c5563295ad?w=600&q=80",
    alt: "Gebäudeinstandhaltung und Hausmeisterservice — Foto: Unsplash",
  },
  {
    icon: TreePine,
    title: "Grünanlagenpflege",
    description:
      "Ein gepflegtes Umfeld steigert den Wert Ihrer Immobilie. Wir mähen, schneiden, pflanzen und gestalten — damit Ihr Außenbereich das ganze Jahr über einladend wirkt.",
    image:
      "https://images.unsplash.com/photo-1562886695-0f3c22a48bbb?w=600&q=80",
    alt: "Gepflegter Garten und Rasenpflege — Foto: Unsplash",
  },
  {
    icon: Wrench,
    title: "Reparaturdienst",
    description:
      "Ob tropfender Wasserhahn oder lockere Tür — unser Handwerkerteam löst Probleme schnell und fachgerecht. Kleine Reparaturen, großer Unterschied für Ihre Immobilie.",
    image:
      "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=600&q=80",
    alt: "Reparaturarbeiten an Sanitäranlagen — Foto: Unsplash",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-700">
            Unsere Leistungen
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
            Alles aus einer Hand — für Ihre Immobilie
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Von der Treppenhausreinigung bis zur Gartenpflege: Wir bieten
            Ihnen einen umfassenden 360-Grad-Service, auf den Sie sich
            verlassen können.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-sm">
                  <service.icon className="h-6 w-6 text-primary-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
