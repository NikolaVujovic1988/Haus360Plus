"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "02191 - 4376329",
    href: "tel:021914376329",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@haus360plus.de",
    href: "mailto:info@haus360plus.de",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Remscheid, NRW",
    href: null,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Mo–Fr: 8–18 Uhr | Sa: 9–13 Uhr",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Kontakt
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
            Lassen Sie uns sprechen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Sie haben Fragen oder möchten ein unverbindliches Angebot?
            Kontaktieren Sie uns — wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <Send className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  Nachricht gesendet!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei
                  Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ihr vollständiger Name"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ihre@email.de"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Gewünschte Leistung
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="reinigung">Reinigungsservice</option>
                    <option value="hausmeister">Hausmeisterservice</option>
                    <option value="gruen">Grünanlagenpflege</option>
                    <option value="reparatur">Reparaturdienst</option>
                    <option value="komplett">Komplett-Paket 360°</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Beschreiben Sie Ihr Objekt und Ihre Wünsche..."
                    className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-muted p-5 transition-all hover:border-primary-200"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <info.icon className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-base font-semibold text-foreground transition-colors hover:text-primary-600"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-foreground">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Owner Card */}
            <div className="rounded-xl border border-primary-200 bg-primary-50/50 p-6">
              <p className="text-sm font-medium text-primary-700">
                Ihr Ansprechpartner
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">
                Vladimir Djuric
              </p>
              <p className="text-sm text-muted-foreground">
                Inhaber & Geschäftsführer
              </p>
              <a
                href="tel:021914376329"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
