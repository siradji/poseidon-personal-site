import '../styles/global.css'
import type { AppProps } from 'next/app'
import {Default} from "../layouts/Default";

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Default {...pageProps}>
      <Component {...pageProps} />
    </Default>
  )
}

