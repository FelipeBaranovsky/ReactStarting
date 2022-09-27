import {Link} from '@remix-run/react'
import Navegacion from './navegacion'
import logo from '../../public/img/logo.svg'


function Header() {

  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/">
                <img className='logo' src={logo} alt="Imagen logo" />
            </Link>
            <Navegacion/>
        </div>
    </header>
  )
}

export default Header