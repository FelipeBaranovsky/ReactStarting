import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'


const Heading = styled.h2`
  font-family: 'Lato', sans-serif;
  color: #FFF; 
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Imagen = styled.img`
  margin-top: 50px;
  max-width: 400px;
  width: 80%;
  margin: 100 auto 0 auto;
  display: block;
`

const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width:90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

function App() {
  
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda,criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagenes criptomonedas"></Imagen>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
      
    </Contenedor>
  )
}

export default App
