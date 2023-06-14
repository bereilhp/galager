import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Sign-up',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={ open_sans.style }>{children}</body>
    </html>
  )
}