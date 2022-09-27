import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
      <Layout
        pagina='Nosotros'
      >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen de nosotros'></Image>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default Nosotros