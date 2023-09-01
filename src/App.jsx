// REACT ROUTER
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'


// PAGES FILES
import Home from './pages/home'
import Navbar from './components/Navbar'
import LandingPage from './pages/landingpage'


function App() {

  const [data, setData] = useState('');


  useEffect(()=>{
  async function FetchOtherLink(){
    try{
      const data = await fetch("http://localhost:5174/home", {
        headers: {
          Accept: 'application/json',
        },
      })
      const jsonData = await data.json();
      setData(jsonData); 
      console.log(data);
    }catch(err){
      console.error('Error fetching data:', err);
    }
  }

  FetchOtherLink();



  },[setData])

  console.log(data);
  


  return (
    <>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<></>}/>
          <Route path='/service' element={<></>}/>
          <Route path='/gallery' element={<></>}/>
          <Route path='/contact' element={<Home/>}/>
          {/* <Route path='/test' element={<Home/>}/> */}
        </Routes>
    </>
  )
}

export default App
