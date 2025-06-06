import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Move and Remove Solutions | Junk Removal & Moving Help",
  description:
    "Professional junk removal and moving help services in Hanover, PA and surrounding areas. Licensed, insured, and locally owned.",
  metadataBase: new URL("https://moveandremovesolutions.com"),
  openGraph: {
    title: "Move and Remove Solutions | Junk Removal & Moving Help",
    description: "Professional junk removal and moving help services in Hanover, PA and surrounding areas.",
    url: "https://moveandremovesolutions.com",
    siteName: "Move and Remove Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move and Remove Solutions | Junk Removal & Moving Help",
    description: "Professional junk removal and moving help services in Hanover, PA and surrounding areas.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
