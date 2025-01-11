import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bear Bones Jiujitsu",
  description:
    "Bear Bones Jiujitsu is a martial arts academy located in the heart of Aljezur, Portugal.",
  keywords: [
    "jiujitsu",
    "bjj",
    "martial arts",
    "aljezur",
    "portugal",
    "academy",
    "training",
  ],
  authors: [{ name: "Bear Bones Jiujitsu" }],
  openGraph: {
    title: "Bear Bones Jiujitsu",
    description:
      "Bear Bones Jiujitsu is a martial arts academy located in the heart of Aljezur, Portugal.",
    url: "https://bearbonesjiujitsu.com",
    siteName: "Bear Bones Jiujitsu",
    images: [
      {
        url: "https://bearbonesjiujitsu.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bear Bones Jiujitsu",
    description:
      "Bear Bones Jiujitsu is a martial arts academy located in the heart of Aljezur, Portugal.",
    images: ["https://bearbonesjiujitsu.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://bearbonesjiujitsu.com",
    languages: {
      "en-US": "https://bearbonesjiujitsu.com",
      "pt-PT": "https://bearbonesjiujitsu.com/pt",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
