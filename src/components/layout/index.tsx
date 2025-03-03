import type { PropsWithChildren } from 'react'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export function Layout(props: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main children={props.children} />
      <Footer />
    </Container>
  )
}
