import {useLoaderData,Link} from '@remix-run/react'
import {getGuitarra} from '../../models/guitarras.server'

export async function loader({params}){
    const {guitarraUrl} = params;
    const guitarra = await getGuitarra(guitarraUrl)
    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    return guitarra
}

export function meta({data}) {
    if(!data){
        return {
            title: `GuitarLA - Guitarra No Encontrada`,
            description: "Coleccion de guitarras, guitarra no encontrada"
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: "Coleccion de guitarras, guitarra ${data.data[0].attributes.titulo}"
    } 
  }

function GuitarraUrl() {
    const guitarra = useLoaderData()
    const {titulo,descripcion,imagen,precio} = guitarra.data[0].attributes
  return (
    <div className='blog'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${titulo}`} />
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='texto'>{descripcion}</p>
            <p className='precio'>${precio}</p>
            <div>
                <Link className='enlace' to={'/guitarras'}>Regresar</Link>
            </div>
        </div>
    </div>
  )
}

export default GuitarraUrl