
import AnimalCard  from '../components/AnimalCard';
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

// STYLES
import '../assets/styles/galleryStyle.css'

// COMPONENTS
import Modal from "../components/Modal"
import AuthButton from "../components/AuthButton"

    function Gallery() {

    const [AnimalData, setAnimalData] = useState('');
    const [modalOpen, setModalOpen] = useState(true); // TO BE ABLE CLOSE AND OPEN THE MODAL

    const { user, isAuthenticated } = useAuth0();

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
                console.error('Error fetching data:', err);
            }
        }
        
            getAnimals(); // FETCHTING DATA WHERE ANIMALS DATA SEND FROM DB


    },[])

    const closeModal = () => { // CLOSE REQUIRE LOGIN MODAL
        setModalOpen(false);
    };
    
    console.log(AnimalData);
    
    return (
        <>
            {isAuthenticated ? (
                <>
                    <div className='gallery-board'>
                    <h2>Every Pet Deserves a Loving Home. <span style={{color: '#ADA7FF'}}>Adopt</span> a Pet Today</h2>
                    <p>Browse our available animals and learn more about the adoption process. Together, we can rescue,<br /> 
                        rehabilitate, and rehome pets in need. Thank you for supporting our mission to bring joy to families through<br />
                        pet adoption.
                    </p>
                    <div>
                        <Select placeholder='Animals'>
                        <option value='option1'>Dogs</option>
                        <option value='option2'>Cats</option>
                        <option value='option3'>Birds</option>
                        <option value='option4'>Reptiles</option>
                        <option value='option5'>Exotic Animals</option>
                        </Select>
                    </div>
                    </div>
                    <div className='gallery-container'>
                    { AnimalData && AnimalData.map((animal) =>  
                        <div key={animal._id}>
                        <Link to={`/form/${animal._id}/${user.email}`}>           
                            <AnimalCard
                            animalPicture={animal.animal_image}
                            animalName={animal.name}
                            animalAge={animal.age}
                            animalDetails={animal}
                            />
                        </Link>  
                        </div> 
                    )}
                    </div>
                </>
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
            )}
        </>
    );
}



export default Gallery
