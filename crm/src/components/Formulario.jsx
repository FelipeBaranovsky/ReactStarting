import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().min(3,'El nombre es muy corto').max(20,'El nombre es muy largo').required('El nombre del cliente es obligatorio'),
        empresa: Yup.string().required('La empresa del cliente es obligatorio'),
        email: Yup.string().email('Correo no válido').required('El correo del cliente es obligatorio'),
        telefono: Yup.number().positive('El número no es válido').integer('El número no es válido').typeError('El número no es válido'),
        notas: Yup.string().max(200,'Límite de 200 caracteres superado')
    })

    const handleSubmit = (valores) => {
        console.log(valores);
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>
        <Formik
            initialValues={{
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                notas: ''
            }}
            onSubmit={(values) => {
                handleSubmit(values)
            }}

            validationSchema={nuevoClienteSchema}
        >
            {({errors, touched}) => {
                console.log(touched);
                return (
                <Form className='mt-10'>
                <div className='mb-4'>
                    <label 
                        htmlFor="nombre"
                        className="text-gray-800"
                    >Nombre:</label>
                   <Field
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del cliente"
                    name="nombre"
                   /> 
                </div>
                {errors.nombre && touched.nombre ? (
                    <Alerta>{errors.nombre}</Alerta>
                ) : null}
                <div className='mb-4'>
                    <label 
                        htmlFor="empresa"
                        className="text-gray-800"
                    >Empresa:</label>
                   <Field
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa del cliente"
                    name="empresa"
                   /> 
                </div>
                {errors.empresa && touched.empresa ? (
                    <Alerta>{errors.empresa}</Alerta>
                ) : null}
                <div className='mb-4'>
                    <label 
                        htmlFor="email"
                        className="text-gray-800"
                    >Email:</label>
                   <Field
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del cliente"
                    name="email"
                   /> 
                </div>
                {errors.email && touched.email ? (
                    <Alerta>{errors.email}</Alerta>
                ) : null}
                <div className='mb-4'>
                    <label 
                        htmlFor="telefono"
                        className="text-gray-800"
                    >Telefono:</label>
                   <Field
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Telefono del cliente"
                    name="telefono"
                   /> 
                </div>
                {errors.telefono && touched.telefono ? (
                    <Alerta>{errors.telefono}</Alerta>
                ) : null}
                <div className='mb-4'>
                    <label 
                        htmlFor="notas"
                        className="text-gray-800"
                    >Notas:</label>
                   <Field
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                    placeholder="Notas del cliente"
                    name="notas"
                   /> 
                </div>
                {errors.notas && touched.notas ? (
                    <Alerta>{errors.notas}</Alerta>
                ) : null}
                <input 
                    type="submit"
                    value="Agregar Cliente"
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" 
                />
            </Form>
            )}}
    
        </Formik>
    </div>
  )
}

export default Formulario