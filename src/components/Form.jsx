import { useState}  from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from "react-router-dom";
import { Input, Select, Image, Button } from '@chakra-ui/react'

    function Form() {

        const { user } = useAuth0(); // FOR AUTH0 USER DATA 
        const AnimalId = useParams(); 
        const [isLoading, setIsLoading] = useState(false); // FOR THE BUTTON TO LOADS WHEN SUBMITTING
        

        const [formData, setFormData] = useState({
            name: user?.name || '',           // USE AUTH0 USERNAME IF THERES NO IT WILL BECOME EMPTY STRING
            email: user?.email || '',         
            picture: user?.picture || '',
            address: '',
            net_income: '',
        });

        const handleInputChange = (event) => {              // HANDLING THE VALUES YOURE PUTTING IN INPUTS
            const { name, value } = event.target;             
            setFormData({ ...formData, [name]: value });
        }
    
    
        const handleSubmit = async (event) => {
            event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
            setIsLoading(true);        // ACTIVE THE LOADING ANIMATION OF SUBMIT BUTTON

            try {
            const response = await fetch("http://localhost:5174/api/users", {  // FETCHING THE ROUTE OF SERVER
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

        const netIncomeRanges = [
            'Less than ₱25,000',
            '₱25,000 - ₱50,000',
            '₱50,000 - ₱75,000',
            '₱75,000 - ₱100,000',
            'More than ₱100,000',
        ];

        console.log("from form", AnimalId)

    return (
        <>
            { user &&
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label>Name:</label>
                        <Input
                        type="text"
                        value={user.name}
                        width={'300px'}
                        readOnly
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Input
                        type="email"
                        value={user.email}
                        width={'300px'}
                        readOnly
                        />
                    </div>
                    <div>
                        <label>Picture:</label>
                        <Image
                            src={user.picture}
                            width={'70px'}
                            height={'70px'}
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        width={'300px'}
                        />
                    </div>
                    <div>
                        <label>Net Income:</label>
                        <Select 
                            name="net_income"
                            value={formData.net_income}
                            onChange={handleInputChange}
                            width={'300px'} 
                            >
                            <option value="">Select Net Income Range</option>
                            {netIncomeRanges.map((range) => (
                                <option key={range} value={range}>
                                    {range}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <Button 
                            type='submit'
                            isLoading={isLoading}
                            loadingText="Submitting"
                            isDisabled={isLoading} // DISABLE THE BUTTON LOAD WHEN LOADING IN STATE DISABLE
                    >Submit</Button>
            </form>
            }
        </>
    )
    }

export default Form
