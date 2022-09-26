import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children,pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras"/>
        </Head>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default Layout

