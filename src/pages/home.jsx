import { useState, useEffect }  from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { useAuth0 } from "@auth0/auth0-react";


// COMPONENTS
// import Navbar from '../components/Navbar'
import '../App.css'

function Home() {


    const [count, setCount] = useState(0)
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


    
    // ---------------------  TESTING SUBMITTING FORM  ---------------------

    const [formData, setFormData] = useState({
        name: '',                                       // STATE FOR CHANGING THE VALUES
        email: '',
    });

    const handleInputChange = (event) => {              // HANDLING THE VALUES YOURE PUTTING IN INPUTS
        const { name, value } = event.target;             
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
        try {
        const response = await fetch("http://localhost:5174/home", {  // FETCHING THE ROUTE OF SERVER
            method: 'POST',                                         
            headers: {
            'Content-Type': 'application/json',       
            },
            body: JSON.stringify(formData),          // CONVERTS THE BODY(THE SUBMITTED FORM VALUE ) TO STRING
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('Server responded with an error:', response.statusText);
        }
        } catch (err) {
        console.error('Error fetching data:', err);
        }
    }
    
    // ---------------------  TESTING SUBMITTING FORM  ---------------------
        
    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input
                type='text'
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type='text'
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            </div>
            <button type="submit">Submit</button>
        </form>

        <div>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                <button onClick={() => logout()}>Log Out</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    </>
    )
}




export default Home
