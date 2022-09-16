import Formulario from "../components/Formulario"

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">NuevoCliente</h1>
      <p className="mt-3">Llena los siguientes campo para registrar un cliente</p>
      <Formulario/>
    </>
    
  )
}

export default NuevoCliente