"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-xl sm:flex-row sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren.
          Weitere Informationen finden Sie in unserer{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-primary-600 underline hover:text-primary-700"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
