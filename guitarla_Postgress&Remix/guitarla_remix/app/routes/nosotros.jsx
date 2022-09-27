import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return {
      title: 'GuitarLA - Sobre Nosotros',
      description: "Venta de guitarras, blog de música"
  } 
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec ultrices dui sapien eget. Imperdiet dui accumsan sit amet nulla facilisi morbi. Ipsum dolor sit amet consectetur adipiscing elit. In eu mi bibendum neque egestas congue quisque egestas diam. Amet dictum sit amet justo donec enim. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dui vivamus arcu felis bibendum. Id cursus metus aliquam eleifend mi in nulla. Augue eget arcu dictum varius duis at. Ornare arcu odio ut sem nulla pharetra. Tincidunt vitae semper quis lectus nulla at. Tristique senectus et netus et malesuada fames ac turpis egestas. A lacus vestibulum sed arcu non.</p>
          <p>Massa eget egestas purus viverra accumsan in. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Consectetur a erat nam at lectus urna duis. Condimentum id venenatis a condimentum vitae sapien pellentesque. Euismod elementum nisi quis eleifend. Amet purus gravida quis blandit turpis cursus in. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Libero id faucibus nisl tincidunt. Arcu risus quis varius quam quisque id diam. Imperdiet dui accumsan sit amet. Donec adipiscing tristique risus nec. Feugiat vivamus at augue eget arcu dictum varius. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. A lacus vestibulum sed arcu non. Orci ac auctor augue mauris augue neque gravida in fermentum. Sem nulla pharetra diam sit amet.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros