import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Haus360Plus",
  description:
    "Professionelle Gebäudereinigung, Hausmeisterservice, Grünanlagenpflege und Montagearbeiten in Remscheid.",
  url: "https://www.haus360plus.de",
  telephone: "+4915567229610",
  email: "info@haus360plus.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Remscheider Straße 134a",
    addressLocality: "Remscheid",
    postalCode: "42899",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1787,
    longitude: 7.1896,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Remscheid",
  },
  priceRange: "$$",
  serviceType: [
    "Gebäudereinigung",
    "Hausmeisterservice",
    "Grünanlagenpflege",
    "Renovierung & Montage",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
