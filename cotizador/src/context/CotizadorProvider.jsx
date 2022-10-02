import { useState,createContext } from "react";
import { obtenerDiferenciaYear,calcularMarca,calcularPlan,formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error,setError] = useState('')
    const [resultado,setResultado] = useState(0)
    const [cargando,setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Base = 2000
        let resultado = 2000
        //Por año -3%
        const diferencia = obtenerDiferenciaYear(datos.year)
        resultado -= ((diferencia * 3)* resultado) / 100
        //Asiatico +5%
        //Europeo +30%
        //Americano +15%
        resultado *= calcularMarca(datos.marca)
        //Completo +50%
        //Básico +20%
        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
        
    }

    return (
        <CotizadorContext.Provider  value={{datos,handleChangeDatos,error,setError,cotizarSeguro,resultado,cargando}}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext
