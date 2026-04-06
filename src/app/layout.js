import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import DisclaimerModal from "@/components/common/DisclaimerModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-mono",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://sladvocates.in"),
  title: {
    default:
      "SL Advocates - Premier Legal Services in Kerala | Expert Legal Consultation",
    template: "%s | SL Advocates - Legal Excellence & Integrity",
  },
  description:
    "Leading law firm in Kerala providing expert legal services in civil litigation, corporate law, family law, and property matters.",
  keywords: [
    "law firm Kerala",
    "legal services Kochi",
    "civil litigation Kerala",
    "corporate lawyer Kerala",
    "family law attorney",
    "property law Kerala",
    "legal consultation",
    "advocates Kerala",
    "court representation",
    "legal documentation",
  ],
  authors: [{ name: "SL Advocates" }],
  creator: "SL Advocates",
  publisher: "SL Advocates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sladvocates.in",
    siteName: "SL Advocates",
    title: "SL Advocates - Premier Legal Services in Kerala",
    description:
      "Leading law firm in Kerala providing expert legal services in civil litigation, corporate law, family law, and property matters.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SL Advocates - Legal Excellence & Integrity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SL Advocates - Premier Legal Services in Kerala",
    description:
      "Leading law firm in Kerala providing expert legal services.",
    images: ["/images/og-image.jpg"],
    creator: "@sladvocates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://sladvocates.in",
  },
  category: "Legal Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "SL Advocates",
  description:
    "Leading law firm in Kerala providing expert legal services in civil litigation, corporate law, family law, and property matters.",
  url: "https://sladvocates.in",
  telephone: "+919876543210",
  email: "info@sladvocates.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Legal Street",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: "682001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.9312",
    longitude: "76.2673",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "18:30",
  },
  areaServed: {
    "@type": "State",
    name: "Kerala",
  },
  serviceType: [
    "Civil Litigation",
    "Corporate Law",
    "Family Law",
    "Property Law",
    "Legal Documentation",
    "Court Representation",
  ],
  founder: {
    "@type": "Person",
    name: "Advocate S.L.",
  },
  foundingDate: "2020",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
  },
  priceRange: "₹₹₹",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${ibmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#B8860B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <DisclaimerModal />
        </div>
      </body>
    </html>
  );
}
