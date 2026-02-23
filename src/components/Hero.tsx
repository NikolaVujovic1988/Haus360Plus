import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/30"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary-200/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pt-40 lg:pb-32">
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary-600" />
            Ihr 360-Grad-Service in Remscheid
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sauber, gepflegt &{" "}
            <span className="text-primary-700">sorgenfrei</span> —{" "}
            <span className="text-primary-800">das</span> ist unser
            Versprechen.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Haus360Plus ist Ihr zuverlässiger Partner für professionelle
            Gebäudereinigung, Hausmeisterdienste und Instandhaltung. Wir
            kümmern uns um alles — damit Sie sich auf das Wesentliche
            konzentrieren können.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#kontakt"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-primary-950 shadow-lg transition-all hover:bg-primary-400 hover:shadow-xl sm:w-auto"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:021914376329"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-primary-700" />
              02191 - 4376329
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            {[
              "Kostenlose Erstberatung",
              "Festpreisgarantie",
              "Regionaler Ansprechpartner",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-700" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-16 w-full max-w-xl lg:mt-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559702971-54d4089fc5a5?w=800&q=80"
              alt="Professionelle Grünanlagenpflege — Foto: Unsplash"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg sm:-bottom-6 sm:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Zufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
