import type { AppProps } from 'next/app'
import "src/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
