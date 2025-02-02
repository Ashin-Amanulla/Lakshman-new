import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackToTop from '@/components/common/BackToTop'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SL Advocates",
  description: "Legal Excellence & Integrity",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
} 