import Image from "next/image"
import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

const Sidebar = () => {
    const router = useRouter()
    const {categorias} = useQuiosco()
    const goHome = () => {
        router.push('/')
    }

  return (
    <>
        <div className="mt-2">
            <Image className="hover:cursor-pointer" width={300} height={100} src="/assets/img/logo.svg" alt="Imagen logotipo" onClick={goHome}/>
        </div>
        
        <nav className="mt-14">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
  )
}

export default Sidebar