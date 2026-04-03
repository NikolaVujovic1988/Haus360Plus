import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Haus360Plus",
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-8 space-y-2 text-foreground">
        <p>Viktorija Duric</p>
        <p>Haus360Plus Viktorija Duric</p>
        <p>Remscheider Straße 134a</p>
        <p>42899 Remscheid</p>
      </div>

      <h2 className="mt-10 text-xl font-bold text-foreground">Kontakt</h2>
      <div className="mt-4 space-y-2 text-foreground">
        <p>
          Telefon:{" "}
          <a
            href="tel:021914376329"
            className="text-primary-600 hover:text-primary-700"
          >
            02191 - 4376329
          </a>
        </p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:info@haus360plus.de"
            className="text-primary-600 hover:text-primary-700"
          >
            info@haus360plus.de
          </a>
        </p>
      </div>

      <h2 className="mt-10 text-xl font-bold text-foreground">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mt-8 text-sm text-muted-foreground">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 underline hover:text-primary-700"
        >
          eRecht24
        </a>
      </p>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          &larr; Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
