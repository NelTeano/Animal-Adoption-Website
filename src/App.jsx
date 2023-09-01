// REACT ROUTER
import { Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react'


// PAGES FILES
import Home from './pages/home'
import Navbar from './components/Navbar'
import LandingPage from './pages/landingpage'


function App() {

  // const [data, setData] = useState('');
  // const [formData, setFormData] = useState({
  //   name: 'hello',
  //   email: 'testing'
  // });


  // useEffect(()=>{
  // async function FetchOtherLink(){
  //   try{
  //     const data = await fetch("http://localhost:5174/home", {
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     })
  //     const jsonData = await data.json();
  //     setData(jsonData); 
  //     console.log(data);
  //   }catch(err){
  //     console.error('Error fetching data:', err);
  //   }
  // }

  // async function TestPost(){
  //   try{
  //     const response = await fetch("http://localhost:5174/home", {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         body: JSON.stringify(formData) // Replace with your data
  //       },
  //     })
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log('Registration successful:', responseData);
  //     } else {
  //       console.error('Registration failed');
  //     }

  //   }catch(err){
  //     console.error('Error fetching data:', err);
  //   }
  // }

  // TestPost();
  // FetchOtherLink();



  // },[setData, setFormData])

  // console.log(data);
  


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
