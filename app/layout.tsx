import type { Metadata } from "next";
import { Inter, Poppins, Montserrat, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
    display: 'swap',
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
    variable: "--font-montserrat",
    display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-roboto-condensed",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Pembiayaan Peribadi Kerajaan & Koperasi | Kelulusan 24 Jam | Kredit Rakyat",
    description: "Pembiayaan peribadi patuh syariah untuk penjawat awam & badan berkanun. Bandingkan 10+ tawaran koperasi & bank terkemuka di Malaysia. Kadar untung rendah dari 3.5%.",
    keywords: ["pembiayaan peribadi kerajaan", "koperasi kakitangan kerajaan", "repayment angkasa", "kredit rakyat malaysia", "pembiayaan koperasi", "pembiayaan syariah"],
    openGraph: {
        title: "Kredit Rakyat | Pembiayaan Peribadi Koperasi Kerajaan",
        description: "Banding & mohon pembiayaan peribadi penjawat awam paling pantas & selamat di Malaysia. Kelulusan seawal 1 hari bekerja.",
        url: "https://pinjamkerajaan.com.my",
        siteName: "Kredit Rakyat",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kredit Rakyat - Pembiayaan Koperasi Kerajaan",
            },
        ],
        locale: "ms_MY",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kredit Rakyat | Pembiayaan Peribadi Koperasi Kerajaan",
        description: "Platform pembiayaan peribadi penjawat awam terbaik di Malaysia. Patuh Syariah & Selamat.",
    },
    alternates: {
        canonical: "https://pinjamkerajaan.com.my",
    }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Pembiayaan Peribadi Penjawat Awam",
  "brand": {
    "@type": "Brand",
    "name": "Kredit Rakyat"
  },
  "description": "Pembiayaan peribadi patuh syariah untuk kakitangan kerajaan dan badan berkanun di Malaysia.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "price": "3000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "MY"
    }
  },
  "feesAndCommissionsSpecification": "Tiada caj pendahuluan (upfront fees). Kadar untung dari 3.5%.",
  "interestRate": "3.5%",
  "annualPercentageRate": "3.5% - 4.99%"
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rakyat Fintech Sdn Bhd",
  "legalName": "Rakyat Fintech Sdn. Bhd. (202501018111 (1619525-V))",
  "taxID": "202501018111 (1619525-V)",
  "url": "https://kreditrakyat.com/",
  "logo": "https://kreditrakyat.com/wp-content/uploads/2025/07/KR-Brand-Guideline-06-2048x495.png",
  "description": "Kakitangan kerajaan perlukan pembiayaan yang mudah? Kredit Rakyat tawarkan pembiayaan peribadi dari bank & koperasi dengan kelulusan cepat dalam 1 hari. Hubungi kami.",
  "telephone": "+60 11-1334 3150",
  "email": "infokreditrakyat@gmail.com",
  "sameAs": [
    "https://www.instagram.com/kreditrakyat.my/",
    "https://www.linkedin.com/in/kredit-rakyat-aa3534237/",
    "https://www.facebook.com/profile.php?id=61578886204768",
    "https://www.tiktok.com/@kreditrakyatcom"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lot 3A-01A, Level 3A, Glo Damansara Shopping Mall, 699, Jln Damansara, Taman Tun Dr Ismail",
    "addressLocality": "Kuala Lumpur",
    "addressRegion": "Wilayah Persekutuan Kuala Lumpur",
    "postalCode": "60000",
    "addressCountry": {
      "@type": "Country",
      "name": "MY"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.13110",
    "longitude": "101.62939"
  }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ms" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${montserrat.variable} ${robotoCondensed.variable}`}>
            <head>
                {/* Google Tag Manager */}
                <Script
                    id="gtm"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-XXXXXX');`,
                    }}
                />
                {/* End Google Tag Manager */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, localBusinessJsonLd]) }}
                />
            </head>
            <body className={`font-sans text-gray-800 bg-surface overflow-x-hidden ${inter.className}`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
                <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="beforeInteractive"></Script>
            </body>
        </html>
    );
}
