// REACT ROUTER
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// AUTH0
import { useAuth0 } from "@auth0/auth0-react";

// PAGES FILES
import Home from './pages/home'
import Gallery from './pages/gallery'
import Navbar from './components/Navbar'
import LandingPage from './pages/landingpage'


// JUST FOR TESTING PROPS





function App() {

  const { user , isAuthenticated } = useAuth0();
  const [data, setData] = useState('');
  

  {isAuthenticated && console.log(user)}

  useEffect(()=>{
  async function FetchOtherLink(){
    try{
      const data = await fetch("http://localhost:5174/api/users", {
        headers: {
          Accept: 'application/json',
        },
      })
      const jsonData = await data.json();
      setData(jsonData); 
    }catch(err){
      console.error('Error fetching data:', err);
    }
  }

  FetchOtherLink();



  },[])

  console.log(data);

  
  
  

  


  return (
    <>
      <Navbar/> 
        <Routes>
          <Route 
            path='/' 
            element={<LandingPage/>}
          />
          <Route
            path='/about' 
            element={<></>}/>
          <Route
            path='/service'
              element={<></>}/>
          <Route
            path='/gallery'
              element={
                <Gallery/>}
              />
          <Route
            path='/contact'
              element={<Home/>}/>
          {/* <Route path='/test' element={<Home/>}/> */}
        </Routes>
    </>
  )
}

export default App
