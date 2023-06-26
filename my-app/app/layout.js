import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{ baseTheme: dark }}>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  )
}
