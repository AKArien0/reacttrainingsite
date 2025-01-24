import './App.css'
import { AuthProvider } from "./Auth/AuthProvider"
import Header from "./Components/Header"
import Router from './Routes/Router'
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Router />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
