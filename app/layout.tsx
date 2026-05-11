import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DRIVR — Web3 Urban Mobility",

  description:
    "Infraestrutura Web3 para mobilidade urbana e economia digital das ruas.",

  metadataBase: new URL("https://drivrtoken.com.br"),

  openGraph: {
    title: "DRIVR — O ASFALTO É NOSSO.",

    description:
      "Infraestrutura Web3 para mobilidade urbana e comunidade digital.",

    url: "https://drivrtoken.com.br",

    siteName: "DRIVR",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DRIVR Web3 Urban Mobility",
      },
    ],

    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DRIVR — O ASFALTO É NOSSO.",

    description:
      "Infraestrutura Web3 para mobilidade urbana e comunidade digital.",

    images: ["/og-image.jpg"],

    creator: "@drivrtoken",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
