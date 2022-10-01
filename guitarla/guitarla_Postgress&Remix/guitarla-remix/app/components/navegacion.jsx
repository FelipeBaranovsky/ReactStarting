import {Link, useLocation} from '@remix-run/react'

function Navegacion() {
    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
        >Inicio</Link>
        <Link
            to="/nosotros"
            className={location.pathname === '/nosotros' ? 'active' : ''}
        >Nosotros</Link>
        <Link
            to="/blog"
            className={location.pathname === '/blog' ? 'active' : ''}
        >Blog</Link>
        <Link
            to="/guitarras"
            className={location.pathname === '/guitarras' ? 'active' : ''}
        >Tienda</Link>
    </nav>
  )
}

export default Navegacion