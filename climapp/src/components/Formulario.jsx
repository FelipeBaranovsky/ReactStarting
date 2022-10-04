import { useState } from 'react'
import useClima from '../hooks/useClima'
import '../styles/Formulario.css'

const Formulario = () => {
    const {busqueda,datosBusqueda,consultarClima} = useClima()
    const {ciudad,pais} = busqueda

    const [alerta,setAlerta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarClima(busqueda)

    }
  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" id="ciudad" name="ciudad" onChange={datosBusqueda} value={ciudad}/>
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select name="pais" id="pais"  onChange={datosBusqueda} value={pais}>
                    <option value="" className='topSelect'>-- Seleccione un país --</option>
                    <option value="AR">Argenitna</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="JP">Japón</option>
                    <option value="AU">Australia</option>
                    <option value="EG">Egipto</option>
                </select>
            </div>
            <input type="submit" value='Consultar Clima' />
        </form>
    </div>
  )
}

export default Formulario