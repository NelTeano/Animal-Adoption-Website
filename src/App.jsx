// REACT ROUTER
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// AUTH0
import { useAuth0 } from "@auth0/auth0-react";

// PAGES FILES
import Home from './pages/home'
import Gallery from './pages/gallery'
import LandingPage from './pages/landingpage'
import AboutPage from './pages/about'
import FillUpPage from './pages/FillUpPage'

// COMPONENTS
import Navbar from './components/Navbar'




function App() {

  const { user , isAuthenticated } = useAuth0(); 
  const [data, setData] = useState('');

  {isAuthenticated && console.log(user)} // PRINTS USER DETAILS IF IT LOGGED IN

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

  FetchOtherLink(); // FETCHING USERS DATA FROM DB
  },[])

  console.log(data); // PRINTS USERS DATA JUST FOR CHECKING

  
  
  const routes = [{
    pathname: "/",
    element: LandingPage
  },
  {
    pathname: "/about",
    element: AboutPage
  },
  {
    pathname: "/gallery",
    element: Gallery
  },
  {
    pathname: "/contact",
    element: Home
  },
  {
    pathname: "form/:id",
    element: FillUpPage
  },];

  
  


  return (
    <>
      <Navbar/>  
      <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.pathname} element={<route.element />} />
      ))}
    </Routes>
    </>
  )
}

export default App
