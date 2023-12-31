// REACT ROUTER
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// AUTH0
import { useAuth0 } from "@auth0/auth0-react";

// PAGES FILES
import Testpage from './pages/testpage'
import Gallery from './pages/gallery'
import Home from './pages/home'
import About from './pages/about'
import Details from './pages/details'
import Contact from './pages/contact'
import userDetails from './pages/userDetails';
import userAnimals from './pages/userAnimals';

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
    element: Home
  },
  {
    pathname: "/about",
    element: Testpage
  },
  {
    pathname: "/gallery",
    element: Gallery
  },
  {
    pathname: "/contact",
    element: Contact
  },
  {
    pathname: "form/:id/:email",
    element:  Details
  },
  {
    pathname: "testpage",
    element:  About
  },
  {
    pathname: `AccountDetails/:email`,
    element:  userDetails
  },
  {
    pathname: "MyAnimals",
    element:  userAnimals
  }
];

  
  


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
