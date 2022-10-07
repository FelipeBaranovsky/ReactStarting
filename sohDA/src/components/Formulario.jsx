import { useState } from 'react'
import {Button,Form,Row,Col,Alert} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {
    const {categorias} = useCategorias()
    const {consultarBebidas,error,setError} = useBebidas()
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta,setAlerta] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(busqueda).includes('') || busqueda.categoria === "-- Selecciona Categoría --"){
            setError('')
            setBusqueda({
                nombre: '',
                categoria: ''
            })
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }
  return (
    <Form onSubmit={handleSubmit}>
        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        {error && <Alert variant='danger' className='text-center'>{error}</Alert>}
        <Row>
           <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Ej: Tequila, Vodka, etc..."
                        name='nombre'
                        id='nombre'
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    />
                </Form.Group>
           </Col> 
           <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
                    <Form.Select
                        name='categoria'
                        id='categoria'
                        value={busqueda.categoria}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        <option className='topselect'>-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
           </Col> 
        </Row>
        <Row className='justify-content-end'>
            <Col md={3}>
                <Button variant='danger' className='text-uppercase w-100' type='submit'>Buscar Bebidas</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario