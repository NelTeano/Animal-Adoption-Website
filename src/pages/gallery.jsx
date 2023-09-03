
import AnimalCard  from '../components/AnimalCard';
import DogModel from '../assets/dogmodel.png'
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// STYLES
import '../assets/styles/galleryStyle.css'



// TESTING VALUES
const ValueTestProps  = [
    {
        name: 'Trump',
        age: '8yrs'
    },
    {
        name: 'Buddy',
        age: '4yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
    {
        name: 'Rex',
        age: '6yrs'
    },
];

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
                    { ValueTestProps.map((dogs, index)=>
                        (
                            <AnimalCard
                                key={index}
                                animalPicture={DogModel}
                                animalName={dogs.name}
                                animalAge={dogs.age}
                            />
                        )
                    )}
                </div>
            </>
        )
    }

export default Gallery
