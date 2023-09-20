import { useEffect, useState } from 'react'

// STYLES 
import '../assets/styles/userAnimalsStyles.css'
import { useAuth0 } from '@auth0/auth0-react';


export default function UserAnimals() {

    const [AnimalData, setAnimalData] = useState('');
    // const [UserAnimals, setUserAnimals] = useState('');

    const { user } = useAuth0();
    

    useEffect(()=>{
            
        async function getAnimals(){
            try{
                const data = await fetch("http://localhost:5174/api/animals", {
                headers: {
                    Accept: 'application/json',
                },
                })
                const jsonData = await data.json();
                setAnimalData(jsonData); 
            }catch(err){
                console.error('Error fetching Animals data:', err);
            }
        }
        
            getAnimals(); // FETCHTING DATA WHERE ANIMALS DATA SEND FROM DB


    },[])

    console.log(AnimalData); // TO CHECK IF IT ABLE TO FETCH ANIMAL DATAS
    console.log(user.email)

    // GET THE OBJECT(ANIMAL) THAT HAS AN APPLICANT MATCH WITH USER EMAIL(PARAMS)
    // const filteredObjects = AnimalData.filter((animal) =>
    // animal.applicants.some((applicant) => applicant.email === user.email)
    // );

    // console.log(filteredObjects);
    

    return (
        <div className="userAnimals-container">
            User animals Page
        </div>
    )
}
