
import AnimalCard  from '../components/AnimalCard';
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// STYLES
import '../assets/styles/galleryStyle.css'




    function Gallery() {

    const [AnimalData, setAnimalData] = useState('');

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

    
    console.log(AnimalData);
    // console.log(AnimalData[0]._id)
    
        return (
            <>
                <div className='gallery-board'>
                    <h2>Every Pet Deserves a Loving Home. <span style={{color: '#ADA7FF'}}>Adopt</span> a Pet Today</h2>
                    <p>Browse our available animals and learn more about the adoption process. Together, we can rescue,<br></br> 
                        rehabilitate, and rehome pets in need. Thank you for supporting our mission to bring joy to families through<br></br>
                        pet adoption.
                    </p>
                    <div>
                        <Select placeholder='Animals'>
                            <option value='option1'>Dogs</option>
                            <option value='option2'>Cats</option>
                            <option value='option3'>Birds</option>
                            <option value='option3'>Reptiles</option>
                            <option value='option3'>Exotic Animal</option>
                        </Select>
                    </div>
                </div>
                <div className='gallery-container'>
                    { AnimalData && AnimalData.map((animal)=>  
                        <div key={animal._id}>
                            <Link to={
                                    `/form/${animal._id}`
                                }>           
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
        )
    }


    

export default Gallery
