import {  useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


// COMPONENTS
import Modal from "../components/Modal"
import AuthButton from "../components/AuthButton"

// STYLES 
import { useEffect , useState } from 'react'
import '../assets/styles/userDetailsStyles.css'


export default function UserDetails() {

    const [ User , setUser ] = useState(''); // FOR STORING THE CHOSENANIMAL DATA
    const [modalOpen, setModalOpen] = useState(true); // TO BE ABLE CLOSE AND OPEN THE MODAL

    const { isAuthenticated } = useAuth0();
    const params = useParams(); // TO ACCESS THE ID OF ANIMAL USING THE PARAMS 

    useEffect(()=>{

        async function getUserByParams(){
            try{
                const data = await fetch(`http://localhost:5174/api/users/${params.email}`, {
                    headers: {
                        Accept: 'application/json',
                    },
                })
                const jsonUserData = await data.json();
                setUser(jsonUserData)
            }catch(err){
                console.log('Cant Fetch the USER Data');
            } 
        }

    getUserByParams() // FETCH(USER DATA) USING PARAMS EMAIL
    },[User])

    const closeModal = () => { // CLOSE REQUIRE LOGIN MODAL
        setModalOpen(false);
    };

    console.log(User) // TO SEE IF IT FETCH THE USER DATA FROM DATABASE USING PARAMS

    return (
        <>
            { isAuthenticated ? (
            <div className="userDetails-container">
                User Details page
            </div>
            ) : (
                <Modal isOpen={modalOpen} closeModal={closeModal}>
                <div>
                    <h2>Please Log in</h2>
                    <br />
                    <p>Need to Sign in First To Continue your adopting process</p>
                    <br />
                    <AuthButton />
                </div>
                </Modal>
                )
            }
        </>
    )
}
