import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>
            Control de gastos
        </h1>
        {isValidPresupuesto ? (
            <p>Control Presupuesto</p>
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