import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos.css'
import Ejemplo from './ejemplo.jsx'
import {Vino} from './cards1.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Ejemplo/>
    <Vino />
  </>,
)
