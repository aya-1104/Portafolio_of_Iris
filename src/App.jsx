import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {

  return (
    <BrowserRouter basename="/Portafolio_of_Iris" >
        <Routes>
            <Route path='/' element={<MainPage />} />        
        </Routes>
    </BrowserRouter>
  )
}

export default App
