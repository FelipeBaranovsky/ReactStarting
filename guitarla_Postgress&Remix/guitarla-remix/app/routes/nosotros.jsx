import {useLoaderData} from '@remix-run/react'
import {Link} from '@remix-run/react'
import {getNosotros} from '../models/nosotros.server'
import styles from '../styles/nosotros.css'

export async function loader(){
  const nosotros = await getNosotros()
  return nosotros.data.attributes
}

export function meta() {
  return {
      title: 'GuitarLA - Sobre Nosotros',
      description: "Venta de guitarras, blog de música"
  } 
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Nosotros() {
  const {titulo,descripcion,imagen} = useLoaderData()
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>{titulo}</h2>
      <div className='contenido'>
        <img priority="true" layout='responsive' src={imagen.data.attributes.url} alt="Imagen sobre nosotros" />
        <div>
          <p>{descripcion}</p>
          <div>
              <Link className='enlace' to={'/'}>Regresar</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Nosotros