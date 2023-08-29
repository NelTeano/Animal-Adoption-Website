import { useState }  from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { useAuth0 } from "@auth0/auth0-react";

// COMPONENTS
import Button from '../components/AuthButton'
import '../App.css'

function Home() {


    const [count, setCount] = useState(0)
    const { loginWithRedirect } = useAuth0();

    return (
    <>
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
                <Button></Button>
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
