import MainContainer from '@/components/MainContainer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
  <Component {...pageProps} />
    </MainContainer>
    )
}
