import { useState } from 'react';
import { 
    Image,
    Input,  
    FormLabel,
    Button
} from '@chakra-ui/react'

// CSS STYLE
import '../assets/styles/contactStyle.css'

// IMAGE IMPORT 
import Cat from '../assets/cat-landingpage.png'

export default function Contact() {

    const [formData, setFormData] = useState('');       // FOR CONTACT FORM DATA
    const [isLoading, setIsLoading] = useState(false); // FOR THE BUTTON TO LOADS WHEN SUBMITTING

    const handleSubmit = async (event) => {
        event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
        setIsLoading(true);        // ACTIVE THE LOADING ANIMATION OF SUBMIT BUTTON

        try {
        const response = await fetch("http://localhost:5174/api/contact", {  // FETCHING THE ROUTE OF SERVER
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
        }finally {
            setIsLoading(false); // RESET THE ISLOADING AFTER THE REQUEST COMPLETE
        }
    }

    const handleInputChange = (event) => {              // HANDLING THE VALUES YOURE PUTTING IN INPUTS
        const { name, value } = event.target;             
        setFormData({ ...formData, [name]: value });
    }

    // CAT VECTOR SIZING
    const catModel = {
        width: '362.961px',
        height: '362.961px',
        position: 'absolute',
    } 

    return (
        <>
        <div className='contact-cat'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="344" height="356" viewBox="0 0 344 356" fill="none">
                            <path d="M2.77154e-05 38.7916L3.49691e-06 315.819C1.56562e-06 337.91 17.9087 355.819 40.0001 355.819L305.516 355.819C327.398 355.819 345.458 338.093 343.664 316.285C326.902 112.543 158.709 26.5267 43.4124 1.63712C20.3356 -3.34457 2.97793e-05 15.1832 2.77154e-05 38.7916Z" fill="#DAB6FC"/>
                        </svg>
                        <Image 
                            sx={catModel}
                            src={Cat}>
                        </Image>
                    </div>
            <div className='contact-container'>
                <div className='contact-board'>
                    <h2>
                        For More Details<br></br> 
                        Contact Us!
                    </h2>
                    <p>
                        Send our team a quick message with your question,<br></br>
                        Inquiries and we’ll get back to you as soon as<br></br>
                        possible. We’re pretty responsive and will try to<br></br>
                        respond in a few hours.
                    </p>
                </div>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <FormLabel>Name </FormLabel>
                        <Input 
                            type='text'
                            name='name'
                            onChange={handleInputChange}
                            isRequired
                        />
                        <FormLabel>Phone</FormLabel>
                        <Input 
                            type='tel'
                            name='phone'
                            pattern="(09\d{9})$"
                            onChange={handleInputChange}
                            placeholder='Please enter a 11-digit number starting with 09'
                            isRequired
                        />
                        <FormLabel>Email</FormLabel>
                        <Input 
                            name='email'
                            type='email'
                            onChange={handleInputChange}
                            isRequired
                        />
                        <FormLabel>Comment or Messege</FormLabel>
                        <textarea 
                            name='messege'
                            className='messege'
                            type='text'
                            onChange={handleInputChange}
                            required
                        /><br></br>
                        <Button 
                            type='submit'
                            isLoading={isLoading}
                            loadingText="Submitting"
                            isDisabled={isLoading} // DISABLE THE BUTTON LOAD WHEN LOADING IN STATE DISABLE
                        >Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
