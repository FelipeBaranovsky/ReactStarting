import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout"
import { formatearDinero } from "../utils";

export default function Total() {

    const {pedido, cliente, colocarOrden, total, handleChangeCliente} = useQuiosco()
    const {nombre,apellido, dni} = cliente

    const dniValido = () => {
        let reg = new RegExp("([0-9]{8})|([0-9]{2}\.[0-9]{3}\.[0-9]{3})")
        if(reg.exec(dni) !== null && reg.exec(dni)[0] === dni){
            return true
        }else{
            return false
        }
    }

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3 || apellido === '' || apellido.length < 3 || !dniValido()
    }, [pedido, cliente]) 

    useEffect(() => {
        comprobarPedido()
    }, [pedido,comprobarPedido])

    return ( 
        <Layout pagina='Total y Confirmar Pedido'>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={(e) => handleChangeCliente(e)}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="apellido" className="block uppercase text-slate-800 font-bold text-xl">Apellido</label>
                    <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        placeholder="Ingrese su apellido"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={apellido}
                        onChange={(e) => handleChangeCliente(e)}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="dni" className="block uppercase text-slate-800 font-bold text-xl">DNI</label>
                    <input
                        id="dni"
                        name="dni"
                        type="text"
                        placeholder="Ingrese su DNI sin puntos"
                        pattern="([0-9]{2}(\.?)[0-9]{3}(\.?)[0-9]{3})"
                        title="Debe colocar los 8 números de su DNI"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={dni}
                        onChange={(e) => handleChangeCliente(e)}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                        title="Debe colocar sus datos y agregar un producto"
                    />
                </div>
            </form>
        </Layout>
    )
}