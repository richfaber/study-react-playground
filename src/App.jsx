import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AutoRoutes from './router/AutoRoutes'

import './App.css'

import Main from './page'
import PageUseState from './page/use/PageUseState'

export default function App() {

  return (
    <>
      <h1>Vite + React PlayGround</h1>
      <BrowserRouter>
        <AutoRoutes />
      </BrowserRouter>
    </>
  )

}
