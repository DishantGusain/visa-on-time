import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        url: "https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/VisaOnTime.webp?alt=media&token=35bf14f1-4c11-46d3-9d7c-7aa3b7731547",
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




      <body className={inter.className}>
        <Navbar />
        {children}
        <span
          itemProp="thumbnail"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <link
            itemProp="url"
            href="https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/VisaOnTime.webp?alt=media&token=35bf14f1-4c11-46d3-9d7c-7aa3b7731547"
          />
        </span>

        <Footer />
      </body>
    </html>
  );
}
