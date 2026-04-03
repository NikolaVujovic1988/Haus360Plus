"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

export default function AnalyticsWrapper() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsent(localStorage.getItem("cookie-consent") === "accepted");
    };
    check();
    window.addEventListener("storage", check);
    const interval = setInterval(check, 1000);
    return () => {
      window.removeEventListener("storage", check);
      clearInterval(interval);
    };
  }, []);

  if (!consent) return null;
  return <Analytics />;
}
