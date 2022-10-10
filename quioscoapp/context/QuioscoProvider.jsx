import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";
import {toast} from 'react-toastify'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        dni: ''
    })
    const [total, setTotal] = useState(0)


    const router = useRouter()

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad) + total,0)
        setTotal(nuevoTotal)
    }, [pedido])
    

    const obtenerCategorias = async () => {
        try {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }
    
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId,...prod}) => {
        if(pedido.some(productoState => productoState.id === prod.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === prod.id ? prod : productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
        }else {
            setPedido([...pedido,prod])
            toast.success('Agregado al Pedido')
        }
        setModal(false)
        
    }

    const handleEditarCantidades = (id) => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const colocarOrden = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/ordenes', {pedido,cliente,total, fecha: Date.now().toString()})
            //Reset app
            setCategoriaActual(categorias[0])
            setPedido([])
            setCliente({
                nombre: '',
                apellido: '',
                dni: ''
            })
            setTotal(0)

            toast.success('Pedido Realizado Correctamente!')
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangeCliente = (e) => {
        setCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
        console.log(cliente);
    }
    
    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            producto,
            handleSetProducto,
            modal,
            handleChangeModal,
            handleAgregarPedido,
            pedido,
            handleEditarCantidades,
            handleEliminarProducto,
            cliente,
            colocarOrden,
            total,
            handleChangeCliente
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext