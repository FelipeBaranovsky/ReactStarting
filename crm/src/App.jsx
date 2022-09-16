import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './websites/Inicio'
import NuevoCliente from './websites/NuevoCliente'
import EditarCliente from './websites/EditarCliente'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='nuevo' element={<NuevoCliente/>}/>
          <Route path='editar/:id' element={<EditarCliente/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App