import {Link} from '@remix-run/react'
export default function Guitarra({guitarra}) {
    const {descripcion,imagen,precio,url,titulo} = guitarra
  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>
            <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
    </div>
  )
}
