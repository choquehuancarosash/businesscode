import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Producto } from '../pages/Producto'
import { Inventario } from '../pages/Inventario'
import { Configuracion } from '../pages/Configuracion'

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Producto />} />
            <Route path="/inventarios" element={<Inventario />} />
            <Route path="/configuraciones" element={<Configuracion />} />
        </Routes>
    )
}
