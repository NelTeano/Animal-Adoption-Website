

// REACT ROUTER
import { Route, Routes } from 'react-router-dom'


// PAGES FILES
import Home from './pages/home'


function App() {
  



  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logout' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
