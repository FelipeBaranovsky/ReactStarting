import Image from "next/future/image"
import Link from 'next/link'
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"

export default function Producto({guitarra}) {

    const { titulo, descripcion, imagen, precio } = guitarra[0].attributes

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