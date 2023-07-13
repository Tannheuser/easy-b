import './globals.css'
import { Inter } from 'next/font/google'

import { BottomNavigation, Breadcrumbs, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Budgets',
  description: 'Application to manage your budgets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="justify-center fixed w-full z-[1000] bg-base-100 hidden lg:flex">
          <Header />
        </header>
        <main className="min-h-[calc(100vh-4rem)] flex-col lg:pt-20 bg-base-100">
          <Breadcrumbs />
          {children}
        </main>
        <BottomNavigation />
      </body>
    </html>
  )
}