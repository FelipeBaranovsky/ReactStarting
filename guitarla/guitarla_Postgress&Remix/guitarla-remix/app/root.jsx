import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'
import { useState, useEffect } from 'react'
import{
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react'

export function meta(){
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: "width=device-width, initial-scale=1"
    }
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: "https://fonts.googleapis.com"
    },
    {
      rel: 'preconnect',
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = (guitarra) => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      const carritoAct = carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoAct)
    }else {
      setCarrito([...carrito,guitarra])
    }
  }
  const actCantidad = guitarra => {
    const carritoAct = carrito.map(guitarraState => {
      if(guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoAct)
  }
  const eliminarGuitarra = id => {
    const carritoAct = carrito.filter(guitarraState => guitarraState.id !== id)
    setCarrito(carritoAct)
  }
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actCantidad,
          eliminarGuitarra
        }}
      />
    </Document>
  );
}

function Document({children}){
  return (
    <html lang="es">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const error = useCatch()
  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
    </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
    </Document>
  )
}