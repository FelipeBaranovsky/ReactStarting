import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>

        <Header />
        {children}
        <Footer />
        <ToastContainer/>
    </>
  )
}
