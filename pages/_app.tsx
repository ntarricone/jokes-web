import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Bangers } from '@next/font/google'
import Head from 'next/head'

const bangers = Bangers({
  weight: '400',
  display: 'auto',
  preload: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={bangers.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
