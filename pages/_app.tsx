import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
