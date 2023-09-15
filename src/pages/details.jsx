import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Image, Button, Input } from "@chakra-ui/react";



// COMPONENTS
import Modal from "../components/Modal"

import Form from "../components/Form"

// STYLES
import "../assets/styles/detailsStyle.css"



function FillUpPage() {

    // PAGE STATE
    const [ ChosenAnimal , setChosenAnimal ] = useState(''); // FOR STORING THE CHOSENANIMAL DATA
    const [ User , setUser ] = useState(''); // FOR STORING THE CHOSENANIMAL DATA
    const [formOpen, setformOpen] = useState(false); // FOR FORM MODAL CLOSE AND OPEN

    // USE FUNCTIONS FROM IMPORTS
    const params = useParams(); // TO ACCESS THE ID OF ANIMAL USING THE PARAMS 


    // PAGE VARIABLES
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

    useEffect(()=>{
        async function GetAnimalByParams(){
            
            try{
                const data = await fetch(`http://localhost:5174/api/animals/${params.id}`, {
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
                console.log('Cant Fetch the Animal Data');
            } 
        }

    getUserByParams() // FETCH(USER DATA) USING PARAMS EMAIL
    GetAnimalByParams(); // FETCH(ANIMAL DATA) USING PARAMS ID(FROM ANIMAL CHOSEN IN GALLERY)
    },[params])

    // MODAL OPEN AND CLOSE FUNCTIONS
    const closeformModal = () => { // CLOSE FORM MODAL
        setformOpen(false);
    };
    const openformModal = () => { // OPEN FORM MODAL
        setformOpen(true);
    };

    
    // FORM HANDLE SUBMIT FOR SUBMITTING APPLICATIONS FOR ANIMALS

    const handleSubmit = async (event) => {
        event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
        const updatedFormData = {
            id: User._id, // Keep the original id
            name: User.name, // Keep the original name
            picture: User.picture, // Keep the original picture
            email: User.email, // Keep the original email
            address: User.address, // Keep the original address
        };

        try {
        const response = await fetch(`http://localhost:5174/api/applicants/${ChosenAnimal._id}`, {  // FETCHING THE ROUTE OF SERVER
            method: 'POST',                                         
            headers: {
            'Content-Type': 'application/json',       
            },
            body: JSON.stringify(updatedFormData),          // CONVERTS THE BODY(THE SUBMITTED FORM VALUE ) TO STRING
        });
            console.log(updatedFormData); // Check the form data before submission

        
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




    console.log("ANIMAL : ", ChosenAnimal)   // TO VERIFY THE CHOSEN ANIMAL DATA IS CORRECT
    console.log("USER : ", User) // TO VERIFY IF THE WE GET THE DATA USING THE PARAMS EMAIL


    
    return (
            <>
                {ChosenAnimal && 
                <div className="information-board">
                    <div className="animal-appearance">
                    <Image src={ChosenAnimal.animal_image} />
                    <div className="animal-label">
                        <h2>Name : {ChosenAnimal.name}</h2>
                        <h3>Breed : {ChosenAnimal.breed}</h3>
                    </div>
                    </div>
                    <div className="animal-information">
                    <div className="information-details">
                        <h2>About : </h2>
                        <h3>Name : {ChosenAnimal.name}</h3>
                        <h3>Age : {ChosenAnimal.age}</h3>
                        <h3>Animal Type : {ChosenAnimal.animal_type}</h3>
                        <h3>Breed : {ChosenAnimal.breed}</h3>
                        <h3>Last Owner : {ChosenAnimal.last_owner}</h3>
                        <h3>Location : {ChosenAnimal.location}</h3>
                    </div>
                    <div className="information-buttons">
                        <Button sx={ButtonsStyle}
                            onClick={openformModal}
                        >Apply For This Dog</Button>
                        <Link to="/gallery">
                        <Button sx={ButtonsStyle}>Choose Other</Button>
                        </Link>
                    </div>
                    </div>
                </div>
                }
                <>
                    {!User.isAlreadyFillup ? (
                        <>
                            <Modal isOpen={formOpen} closeModal={closeformModal}>
                                <Form/>
                            </Modal>
                        </>
                        ) : 
                        <Modal isOpen={formOpen} closeModal={closeformModal}>
                            <form onSubmit={handleSubmit}>
                                <label>Id:</label><br></br>
                                    <Input
                                    type="text"
                                    width={'300px'}
                                    name="id"
                                    value={User._id}
                                    readOnly
                                    />
                                <label>Name:</label><br></br>
                                    <Input
                                    type="text"
                                    width={'300px'}
                                    name="name"
                                    value={User.name}
                                    readOnly
                                    />
                                <label>Picture:</label><br></br>
                                    <Input
                                    type="text"
                                    width={'300px'}
                                    name="picture"
                                    value={User.picture}
                                    readOnly
                                    />
                                    <br></br>
                                <label>Email:</label><br></br>
                                    <Input
                                    type="text"
                                    width={'300px'}
                                    name="email"
                                    value={User.email}
                                    readOnly
                                    />
                                <label>Address:</label><br></br>
                                    <Input
                                    type="text"
                                    width={'300px'}
                                    name="address"
                                    value={User.address}
                                    readOnly
                                    />
                                <Button 
                                type="submit"
                                >Confirm Apply</Button>
                            </form>
                        </Modal>
                    }
                </>
            </>
        );
}



    


export default FillUpPage

