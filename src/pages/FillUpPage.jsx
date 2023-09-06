import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function FillUpPage() {

    const AnimalId = useParams(); // TO ACCESS THE ID OF ANIMAL USING THE PARAMS 
    console.log(AnimalId) // TO VERIFY IF THE ANIMAL ID RECEIVED IS CORRECT

    const [ ChosenAnimal , setChosenAnimal ] = useState(''); // FOR STORING THE CHOSENANIMAL DATA

    useEffect(()=>{
        
    async function GetAnimalByParams(){
        
        try{
            const data = await fetch(`http://localhost:5174/api/animals/${AnimalId.id}`, {
                headers: {
                    Accept: 'application/json',
                },
            })
            const jsonAnimalData = await data.json();
            setChosenAnimal(jsonAnimalData)
        }catch(err){
            console.log('Cant Fetch the Animal Data');
        }  
    }   

    GetAnimalByParams(); // FETCH THE ROUTE USING PARAMS ROUTE IS USING findById()
    },[])

    console.log(ChosenAnimal)   // TO VERIFY THE CHOSEN ANIMAL DATA IS CORRECT


    return (
        <>
            {ChosenAnimal && // JUST SAMPLE
                <>
                    <h1>{ChosenAnimal.name}</h1>
                    <h1>{ChosenAnimal.age}</h1>
                    <h1>{ChosenAnimal.breed}</h1>
                </>
            }
        </>
    )
}
