import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/header/Header'
import { Corp } from './assets/components/corp/Corp'
import { Footer } from './assets/components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <h1>Hello Vite + React + typescript</h1>
      <Header />
      <Corp />
      <Footer />

    </div>
    </>
  )
}

export default App
