import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/common/BackToTop'
import WhatsAppButton from '@/components/common/WhatsAppButton'

// Clean, modern font with optimized loading
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '700'], // Keeping most used weights for better performance
  adjustFontFallback: true, // Better font matching
})

export const metadata = {
  title: 'SL Advocates - Legal Excellence & Integrity',
  description: 'SL Advocates is a distinguished law firm based in India, offering comprehensive legal expertise and counsel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
} 