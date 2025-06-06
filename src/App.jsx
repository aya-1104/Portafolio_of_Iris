import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Prueba from './pages/Prueba'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />    
            <Route path='/prueba' element={<Prueba />} />     
        </Routes>
    </BrowserRouter>
  )
}

export default App
