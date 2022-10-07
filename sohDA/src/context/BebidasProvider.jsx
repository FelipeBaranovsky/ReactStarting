import axios from "axios";
import { useEffect,useState,createContext } from "react";

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [error, setError] = useState('')
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const {data} = await axios(url)
                setReceta(data.drinks[0])
            } catch (e) {
                console.log(e);
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])
    

    const consultarBebidas = async (datos) => {

        try {
            const urla = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}`
            const {data: datan} = await axios(urla)
            if(!datan){
                setError('Bebida no encontrada')
                setBebidas([])
                return
            }
            setError('')
        } catch (err) {
            console.log(err);
        }

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const {data} = await axios(url)
            setBebidas(data.drinks)

        } catch (e) {
            console.log(e);
        }
    }
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = (id) => {
        setBebidaId(id)
    }

    return (
        <BebidasContext.Provider value={{consultarBebidas,bebidas,handleModalClick,modal,handleBebidaIdClick,receta,cargando,error,setError}}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}
export default BebidasContext

