import Image from 'next/future/image'
import Link from 'next/link'
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros({nosotros}) {
  const { descripcion, imagen, titulo} = nosotros.attributes
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
        <main className="contenedor">
            <h1 className="heading">{titulo}</h1>

            <div className={styles.contenido}>
                <Image priority="true" Layout='responsive' src={imagen.data.attributes.url} width={1000} height={800} alt="Imagen sobre nosotros" />
                <div>
                  <p>{descripcion}</p>
                  <div>
                  <Link href={'/'}>
                    <a className='enlace'>Regresar</a>
                  </Link>
                  </div>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/nosotro?populate=imagen`)
  const {data: nosotros} = await respuesta.json() 
  return {
     props: {
       nosotros
     }
  }
}