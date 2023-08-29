

// REACT ROUTER
import { Route, Routes } from 'react-router-dom'


// PAGES FILES
import Home from './pages/home'


function App() {
  



  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
