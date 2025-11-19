import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AutoRoutes from './router/AutoRoutes'

import './App.css'

export default function App() {

  return (
    <>
      <h1>React PlayGround</h1>
      <BrowserRouter>
        <AutoRoutes />
      </BrowserRouter>
    </>
  )

}
