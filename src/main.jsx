import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> // Envolvendo o App com StrictMode para destacar problemas potenciais na aplicação durante o desenvolvimento
    <BrowserRouter> //Envolvendo o App com BrowserRouter para habilitar o roteamento em toda a aplicação
      <App /> //Renderizando o componente App dentro do BrowserRouter para habilitar o roteamento em toda a aplicação
    </BrowserRouter> //Envolvendo o App com BrowserRouter para habilitar o roteamento em toda a aplicação
  </StrictMode> //Envolvendo o App com BrowserRouter para habilitar o roteamento em toda a aplicação
)

