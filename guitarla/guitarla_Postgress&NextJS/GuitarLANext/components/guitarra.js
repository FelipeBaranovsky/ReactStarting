import Image from "next/future/image"
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {
  const { descripcion, imagen, titulo, precio, url } = guitarra

  return (
    <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${titulo}`} />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/tienda/${url}`}>
              <a className='enlace'>
                Ver Producto
              </a>
            </Link>
        </div>
    </div>
  )
}
