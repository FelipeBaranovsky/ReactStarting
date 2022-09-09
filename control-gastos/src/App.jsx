import { useState,useEffect } from 'react'
import Filtros from './components/Filtros'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {


  const [filtro, setFiltro] = useState('')
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos,setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  )
  const [gastoEditar,setGastoEditar] = useState({})
  const [gastosFiltrados,setGastosFiltrados] = useState([])


  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      },150)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])
  
  
  useEffect(() => {
    const presupuestoLS = localStorage.getItem('presupuesto') ?? 0
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
   if(filtro){
      const gastosFilt = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFilt)
      console.log(gastosFilt);
   }
  }, [filtro])
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    },150)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      const gastosAct = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosAct) 
      setGastoEditar({})
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto])
    }
    
    setModal(false)
    setTimeout(() => {
      setAnimarModal(false)
    },500)
  }

  const eliminarGasto = (id) => {
    const gastosAct = gastos.filter(gastos => gastos.id !== id);
    setGastos(gastosAct)
  }

  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
        setFiltro = {setFiltro}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar = {setGastoEditar}
              eliminarGasto = {eliminarGasto}
              gastosFiltrados = {gastosFiltrados}
              filtro = {filtro}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto}/>
          </div>
        </>
      )}
      
      {modal && 
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal = {setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar} 
        />
      }


    </div>
  )
}

export default App
