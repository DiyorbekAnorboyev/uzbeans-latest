import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'aos/dist/aos.css'
import TranslationProvider from '@/providers/translate.provider'
import initTranslations from '@/i18n'
import i18nConfig from '@/next-i18next.config'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Uz Beans',
  description: 'Beans company',
  icons: {
    icon: '/logo.png'
  }
}

export function generateStaticParams () {
  return i18nConfig.locales.map(locale => ({ locale }))
}

const i18nNamespaces = ['translation']

export default async function RootLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {
  const { locale } = await params

  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <html lang={locale}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monomakh&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Onest:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/logo.png' />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider
          locale={locale}
          resources={resources}
          namespaces={i18nNamespaces}
        >
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
