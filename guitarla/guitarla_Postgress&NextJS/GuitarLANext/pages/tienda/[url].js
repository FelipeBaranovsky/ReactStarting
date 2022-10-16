import Image from "next/future/image"
import Link from 'next/link'
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"
import { useState } from "react"
import { useRouter } from "next/router"


export default function Producto({guitarra, agregarCarrito}) {

    const router = useRouter()
    const [cantidad,setCantidad] = useState(0)
    const { titulo, descripcion, imagen, precio } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1){
            alert("Seleccione una cantidad")
            return
        }
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            titulo,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)  
    }

    return (
        <Layout
            title={`Guitarra ${titulo}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${titulo}`} />

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad</label>
                        <select name="cantidad" id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value="Agregar al carrito" />      
                    </form>
                    <Link href={`/tienda`}>
                        <a className='enlace'>
                            Regresar
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    return {
        props: {
            guitarra
        }
    }
}

// export async function getServerSideProps({query: { url }}) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const { data: guitarra } = await respuesta.json()
//     return {
//         props: {
//             guitarra
//         }
//     }
// }