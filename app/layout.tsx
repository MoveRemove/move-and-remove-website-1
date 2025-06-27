import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Move & Remove Solutions - Professional Junk Removal & Moving Help | Hanover, PA",
  description:
    "Professional junk removal and moving help services in Hanover, PA and surrounding areas. Licensed, insured, and locally owned. Same-day service available. Call 717-817-8363 for your free quote!",
  keywords:
    "junk removal Hanover PA, moving help York County, furniture removal, appliance removal, cleanouts, estate cleanouts, yard waste removal, Westminster MD, Gettysburg PA",
  authors: [{ name: "Move & Remove Solutions" }],
  creator: "Move & Remove Solutions",
  publisher: "Move & Remove Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Move & Remove Solutions - Professional Junk Removal & Moving Help",
    description:
      "Licensed, insured junk removal and moving help services in Hanover, PA. Same-day service available. Call 717-817-8363 for your free quote!",
    url: "https://moveandremovesolutions.com",
    siteName: "Move & Remove Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move & Remove Solutions - Professional Junk Removal & Moving Help",
    description: "Licensed, insured junk removal and moving help services in Hanover, PA. Same-day service available.",
  },
  alternates: {
    canonical: "https://moveandremovesolutions.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
