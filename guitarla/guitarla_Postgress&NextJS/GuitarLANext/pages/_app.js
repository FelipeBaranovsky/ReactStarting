import { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import '../styles/globals.css'
import {toast} from 'react-toastify'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)

  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])
  

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = guitarra => {
    if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
        setToast("Guitarra modificada con exito!")
    } else {
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
        setToast("Guitarra agregada con exito!")
    }
    router.push('/tienda')
  }

  const eliminarProducto = id => {
      const carritoActualizado = carrito.filter( producto => producto.id != id)
      setCarrito(carritoActualizado)
      window.localStorage.setItem('carrito', JSON.stringify( carrito ));
      setToast("Guitarra eliminada con exito!")
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = parseInt( guitarra.cantidad )
      } 
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  const setToast = mensaje => {
    setTimeout(() => {
      toast.success(mensaje)
    }, 1000);
  }

  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
    setToast={setToast}
  /> : null
}

export default MyApp
