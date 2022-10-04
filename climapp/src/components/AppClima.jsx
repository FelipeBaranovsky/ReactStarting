import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

const AppClima = () => {
    const {resultado,cargando,error} = useClima()
  return (
    <>
        <main className="dos-columnas">
            <Formulario/>
            {cargando ? <Spinner/> :
            error ? <p>{error}</p> :
            resultado?.name && <Resultado/>}
            
        </main>
    </>
  )
}

export default AppClima