import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Lepro Wellness Center - Your Path to Better Health",
  description: "Expert physiotherapy, athletic therapy, massage therapy, and accidental therapy services",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
