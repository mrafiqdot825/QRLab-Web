import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { MetricsStrip } from "../components/MetricsStrip";
import { InteractiveStudio } from "../components/InteractiveStudio";
import { CustomizationShowcase } from "../components/CustomizationShowcase";
import { DataFormatsGrid } from "../components/DataFormatsGrid";
import { TemplatesGallery } from "../components/TemplatesGallery";
import { VectorExportSection } from "../components/VectorExportSection";
import { PrivacySection } from "../components/PrivacySection";
import { ScannerSection } from "../components/ScannerSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { Footer } from "../components/Footer";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "https://mrafiq.vercel.app/qrlab" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QRLab — Free 3D & Vector QR Code Maker (100% Offline & Private)" },
    {
      name: "title",
      content: "QRLab — Free 3D & Vector QR Code Maker (100% Offline & Private)",
    },
    {
      name: "description",
      content:
        "Generate free, scan-tested 3D & vector QR codes with custom shapes, luxury eye styles, and infinite SVG export. 100% private, offline, zero redirects, zero expiry.",
    },
    {
      name: "keywords",
      content:
        "free QR code generator, vector QR code SVG, custom QR code maker, 3D QR codes, offline QR generator, private QR code maker, Wi-Fi QR code generator, vCard QR code, SVG QR code export, QRLab, scan QR code online, no subscription QR generator, static QR code maker, print ready QR code",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    { name: "author", content: "Muhammad Rafiq" },
    { name: "creator", content: "Muhammad Rafiq" },
    { name: "publisher", content: "QRLab" },
    { name: "application-name", content: "QRLab" },
    { name: "category", content: "Design & Developer Tools" },

    /* Open Graph / Facebook / LinkedIn */
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mrafiq.vercel.app/qrlab" },
    { property: "og:site_name", content: "QRLab" },
    { property: "og:locale", content: "en_US" },
    {
      property: "og:title",
      content: "QRLab — Free 3D & Vector QR Code Maker (100% Offline & Private)",
    },
    {
      property: "og:description",
      content:
        "Craft scan-stopping, custom branded QR codes with live interactive preview, custom shapes, luxury palettes, and infinite vector SVG export. 100% private & offline.",
    },
    {
      property: "og:image",
      content: "https://mrafiq.vercel.app/assets/images/play-store-feature-graphic.png",
    },
    { property: "og:image:width", content: "1024" },
    { property: "og:image:height", content: "500" },
    {
      property: "og:image:alt",
      content: "QRLab — Artistic 3D & Vector QR Code Maker Showcase",
    },
    { property: "og:image:type", content: "image/png" },

    /* Twitter / X */
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: "@mrafiqdot825" },
    { property: "twitter:creator", content: "@mrafiqdot825" },
    {
      property: "twitter:title",
      content: "QRLab — Free 3D & Vector QR Code Maker",
    },
    {
      property: "twitter:description",
      content:
        "Craft scan-stopping, on-brand QR codes with vector SVG export and 100% on-device privacy. Zero tracking redirects, zero expiry.",
    },
    {
      property: "twitter:image",
      content: "https://mrafiq.vercel.app/assets/images/play-store-feature-graphic.png",
    },
    {
      property: "twitter:image:alt",
      content: "QRLab — Artistic 3D & Vector QR Code Maker",
    },
  ];
}

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://mrafiq.vercel.app/qrlab#webapp",
      "name": "QRLab",
      "alternateName": [
        "QRLab — Artistic 3D & Vector QR Code Maker",
        "QRLab Free QR Code Studio",
        "QRLab Vector QR Generator",
      ],
      "url": "https://mrafiq.vercel.app/qrlab",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web, Android, iOS, macOS, Windows, Linux",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "description":
        "Artistic 3D & Vector QR Code Maker with 100% on-device privacy. Generate scan-stopping QR codes with custom module shapes, luxury eye geometries, curated editorial palettes, and infinite vector SVG export.",
      "softwareVersion": "3.0",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
      },
      "featureList": [
        "100% On-Device Offline Privacy (Zero Telemetry, Zero Cloud Redirects)",
        "Infinite Vector SVG Export without raster blur",
        "High-Resolution 2048px PNG Export",
        "Artistic 3D & Glossy Squircle Styling",
        "Custom Module Shapes (Rounded, Dots, Square)",
        "Custom Eye Corner Geometries (Rounded, Circle, Square)",
        "Center Logo Badge Support with Level-H Error Correction",
        "Curated Editorial Color Palettes & Custom Hex Inputs",
        "Wi-Fi, vCard Contacts, URLs, Email, SMS, Phone & Plain Text Support",
        "Built-in Optical Camera Scanner & Hardware Lens Reader",
      ],
      "screenshot": [
        "https://mrafiq.vercel.app/screenshots/01-home.png",
        "https://mrafiq.vercel.app/screenshots/02-studio.png",
        "https://mrafiq.vercel.app/screenshots/03-customize.png",
        "https://mrafiq.vercel.app/screenshots/04-explore.png",
        "https://mrafiq.vercel.app/screenshots/05-settings.png",
      ],
      "image": "https://mrafiq.vercel.app/assets/images/play-store-feature-graphic.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1280",
        "bestRating": "5",
        "worstRating": "1",
      },
      "author": {
        "@type": "Person",
        "name": "Muhammad Rafiq",
        "url": "https://mrafiq.vercel.app/",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://mrafiq.vercel.app/#organization",
      "name": "QRLab",
      "url": "https://mrafiq.vercel.app/qrlab",
      "logo": "https://mrafiq.vercel.app/assets/images/icon.png",
      "founder": {
        "@type": "Person",
        "name": "Muhammad Rafiq",
        "url": "https://mrafiq.vercel.app/",
      },
      "sameAs": [
        "https://github.com/mrafiqdot825",
        "https://mrafiq.vercel.app/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mrafiq.vercel.app/qrlab#website",
      "url": "https://mrafiq.vercel.app/qrlab",
      "name": "QRLab",
      "description":
        "Artistic 3D & Vector QR Code Maker with 100% On-Device Privacy.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://mrafiq.vercel.app/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://mrafiq.vercel.app/qrlab#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do the QR codes generated by QRLab expire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. All QR codes generated are static standard QR codes. They encode the exact destination payload directly into the 2D matrix pattern. They never expire and will work forever as long as your destination link or data remains valid.",
          },
        },
        {
          "@type": "Question",
          "name": "Are there any limits on how many QR codes I can create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "None. You can generate, customize, style, and export unlimited QR codes with zero restrictions, paywalls, or feature caps.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use the exported QR codes for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. You hold 100% full commercial and personal rights to all exported files (both high-resolution PNG and infinite vector SVG). Use them on printed books, billboard signage, client websites, or product packaging without attribution.",
          },
        },
        {
          "@type": "Question",
          "name": "Is an internet connection required to create QR codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. QRLab is fully offline-capable. You can design, customize, and export QR codes completely in airplane mode with no internet connection.",
          },
        },
        {
          "@type": "Question",
          "name": "How does QRLab protect sensitive data like Wi-Fi passwords?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Your Wi-Fi keys, vCard contacts, and personal information are encoded strictly on-device using local optical algorithms. We operate zero cloud servers, which means nothing is ever transmitted, logged, or analyzed.",
          },
        },
        {
          "@type": "Question",
          "name": "What file formats can I export from QRLab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "QRLab supports infinite-resolution vector SVG (ideal for large-format print, merchandise, billboards, and laser cutting) and crisp high-resolution 2048px PNG for digital displays, email signatures, and social media.",
          },
        },
        {
          "@type": "Question",
          "name": "What types of QR codes can QRLab generate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "QRLab generates standard ISO/IEC 18004 compliant QR codes for Website URLs, Wi-Fi Network Quick-Connect (WPA/WEP/Open), Digital vCard Contact Cards, Email messages, Direct Phone Dialer, SMS text messages, and Plain Text.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://mrafiq.vercel.app/qrlab#howto",
      "name": "How to Create a Custom Vector QR Code with QRLab",
      "description":
        "Step-by-step guide to generating, styling, and exporting a custom branded QR code with vector SVG format for free.",
      "totalTime": "PT1M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select QR Payload Type",
          "text":
            "Choose your QR code format: Website URL, Wi-Fi Quick-Connect, vCard Contact, Email, Phone, SMS, or Plain Text.",
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Enter Payload Data",
          "text":
            "Fill in your link, Wi-Fi credentials, or contact details. The interactive studio preview updates in real-time.",
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Customize Shapes & Color Theme",
          "text":
            "Choose module shape geometry (rounded, dots, square), eye corner styles, optional center logo badge, and an editorial color palette or custom hex.",
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Export Vector SVG or High-Res PNG",
          "text":
            "Click 'Download Infinite Vector (SVG)' for print-ready vector graphics or 'Download High-Res 2048px (PNG)' for digital screens.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mrafiq.vercel.app/qrlab#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mrafiq.vercel.app/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "QRLab Studio",
          "item": "https://mrafiq.vercel.app/qrlab",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--ink)] selection:bg-[var(--plum)] selection:text-white">
      {/* Search Engine & Answer Engine (AEO) JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Social Proof & Metrics Strip */}
        <MetricsStrip />

        {/* 4. Supported Data Formats & Feature Tiles Grid */}
        <DataFormatsGrid />

        {/* 5. Visual Customization Showcase */}
        <CustomizationShowcase />

        {/* 6. Live Interactive Studio Demo Playground */}
        <InteractiveStudio />

        {/* 7. Curated Designer Templates Gallery */}
        <TemplatesGallery />

        {/* 8. Vector Export & Print Quality Section */}
        <VectorExportSection />

        {/* 9. Privacy & Offline Safety Guarantee */}
        <PrivacySection />

        {/* 10. Built-in Optical Scanner Highlight */}
        <ScannerSection />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 12. Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
