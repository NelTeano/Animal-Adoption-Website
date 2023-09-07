import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Image, Button} from "@chakra-ui/react";


// STYLES
import "../assets/styles/fillupStyle.css"


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


    const ButtonsStyle = {
        backgroundColor: "#ADA7FF",
        height: "100px",
        width: "200px",
        color: "white",
        _hover: {
            backgroundColor: '#8984c7',
            color: 'white',
            transition: '0.7s'
        }
    }


    return (
        <>
            {ChosenAnimal && // JUST SAMPLE
                <>
                    <div className="information-board">
                        <div className="animal-appearance">
                            <Image 
                                src={ChosenAnimal.animal_image}
                            />
                            <div className="animal-label">
                                <h2>Name : {ChosenAnimal.name}</h2>
                                <h3>Breed : {ChosenAnimal.breed}</h3>
                            </div>
                        </div>
                        <div className="animal-information">
                                <div className="information-details">
                                    <h2>About :  </h2>
                                    <h3>Name : {ChosenAnimal.name}</h3>
                                    <h3>Age : {ChosenAnimal.age}</h3>
                                    <h3>Animal Type : {ChosenAnimal.animal_type}</h3>
                                    <h3>Breed : {ChosenAnimal.breed}</h3>
                                    <h3>Last Owner : {ChosenAnimal.last_owner}</h3>
                                    <h3>Location : {ChosenAnimal.location}</h3>
                                </div>
                                <div className="information-buttons">
                                    <Button sx={ButtonsStyle} > Apply For This Dog</Button>
                                    <Link
                                        to={"/gallery"}
                                    >
                                        <Button sx={ButtonsStyle} >Choose Other</Button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
