import Image from 'next/future/image'
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'

export default function Carrito({carrito,eliminarProducto,actualizarCantidad}) {
  
    const [total,setTotal] = useState(0)
    
    useEffect(() => {
        const calculoTotal = carrito.reduce((total,producto) => total + (producto.cantidad*producto.precio),0)
        setTotal(calculoTotal)
      }, [carrito])

    return (
    <Layout title='Carrito de Compras'>
        <main className='contenedor'>
            <h1 className='heading'>Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito?.length === 0 ? 'Carrito Vacio' : (
                        carrito?.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={480} src={producto.imagen} alt={`Imagen del producto ${producto.titulo}`} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.titulo}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad:</p>
                                    </div>
                                    
                                    <select value={producto.cantidad} className={styles.select} onChange={e => actualizarCantidad({
                                        cantidad: +e.target.value,
                                        id: producto.id
                                    })}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                                </div>
                                <button type='button' className={styles.eliminar} onClick={() => eliminarProducto(producto.id)}>X</button>
                            </div>
                ))
              )}
                </div>
            
                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: ${total}</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}
