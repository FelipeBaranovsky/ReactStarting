import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,gastos,setGastos,setFiltro}) => {
  return (
    <header>
        <h1>
            Control de gastos
        </h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
                gastos={gastos}
                setGastos = {setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                setFiltro={setFiltro}
            />
        ) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto= {setIsValidPresupuesto}
            />
        )}
        
    </header>
  )
}

export default Header