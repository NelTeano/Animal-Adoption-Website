import { useState }  from 'react'

    function Form() {

        const [formData, setFormData] = useState({
            name: '',                                       // STATE FOR CHANGING THE VALUES
            email: '',
        });
    
        const handleInputChange = (event) => {              // HANDLING THE VALUES YOURE PUTTING IN INPUTS
            const { name, value } = event.target;             
            setFormData({ ...formData, [name]: value });
        }
    
    
        const handleSubmit = async (event) => {
            event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
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
            }
        }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type='text'
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
        </form>
        </>
    )
    }

export default Form
