import { useState } from 'react'
import './App.css'
import Hub from "./Components/Hub"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Router from './Routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
