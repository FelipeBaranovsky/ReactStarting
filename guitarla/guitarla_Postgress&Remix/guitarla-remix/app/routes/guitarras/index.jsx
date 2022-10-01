import {useLoaderData,Link} from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'

export function meta() {
  return {
      title: 'GuitarLA - Tienda de guitarras',
      description: "Coleccion de guitarras exclusivas"
  } 
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()
  return (
    <>
      <ListadoGuitarras
            guitarras={guitarras}
      />
      <div>
          <Link className='enlace' to={'/'}>Regresar</Link>
      </div>
    </>
      
  )
}

export default Tienda