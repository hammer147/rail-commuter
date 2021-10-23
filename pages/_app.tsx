import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MyStationsProvider } from '../context/my-stations-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyStationsProvider>
      <Component {...pageProps} />
    </MyStationsProvider>
  )
}
export default MyApp
