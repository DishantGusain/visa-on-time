import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USA Visa in just 45 Days! - Apply Today",
  description: "Get US Visa in just 45 Days. The #1 Visa Agency, successfully assisting US Visa aspirants since 2020. Apply your US Visa today!",
  keywords:
    "US, USA, Visa On Time, VisaOnTime, Visa Agency",
  authors: [{ name: "Dishant Gusain", url: "https://dishant.info/" }],
  openGraph: {
    type: "website",
    title: "USA Visa in just 45 Days! - Apply Today",
    url: "https://visaontime.co/",
    description:
      "Get US Visa in just 45 Days. The #1 Visa Agency, successfully assisting US Visa aspirants since 2020. Apply your US Visa today!",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/VisaOnTime.webp?alt=media&token=8257b6a3-ca43-4ad7-9ee4-9a8f94d56240",
        alt: "USA Visa in just 45 Days!",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CNZL3ZYY3E"></Script> */}
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4YQ2N5SVJT');`}
        </Script>
      </head>

      <body className={montserrat.className}>
        <Navbar />

        <GoogleTagManager gtmId="GTM-TMQHB8Q4" />

        {children}
        <span
          itemProp="thumbnail"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <link
            itemProp="url"
            href="https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/VisaOnTime.webp?alt=media&token=8257b6a3-ca43-4ad7-9ee4-9a8f94d56240"
          />
        </span>
        <Footer />
      </body>

    </html>
  );
}
