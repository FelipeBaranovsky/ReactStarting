import axios from "axios";
import { useState,createContext } from "react";

const LetrasContext = createContext()
const LetrasProvider = ({children}) => {
    const [alerta,setAlerta] = useState('')
    const [letra,setLetra] = useState('')
    const [cargando,setCargando] = useState(false)
    const busquedaLetra = async (busqueda) => {
        setCargando(true)
        try{
            const {artista,cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios(url)
            setLetra(data.lyrics)
            setAlerta('')
        }catch(error){
            setAlerta('Cancion no Encontrada')
        }
        setCargando(false)
    }
    return (
        <LetrasContext.Provider value={{alerta,setAlerta,busquedaLetra,letra,cargando}}>
            {children}
        </LetrasContext.Provider>
    )
}
export {
    LetrasProvider
}
export default LetrasContext