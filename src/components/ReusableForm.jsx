// import { useState } from "react"
// import PropTypes from 'prop-types';

// export default function AdoptionForm({children, postRoute, }) {
    
//     const [formData, setFormData] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();      // PREVENT DEFAULT VALUES IN SUBMITTING FORM
//         try {
//         const response = await fetch(postRoute, {  // FETCHING THE ROUTE OF SERVER
//             method: 'POST',                                         
//             headers: {
//             'Content-Type': 'application/json',       
//             },
//             body: JSON.stringify(formData),          // CONVERTS THE BODY(THE SUBMITTED FORM VALUE ) TO STRING
//         });
        
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//         } else {
//             console.error('Server responded with an error:', response.statusText);
//         }
//         } catch (err) {
//         console.error('Error fetching data:', err);
//         }
//     }


//     return (
//             <form onSubmit={handleSubmit}> 
//                 {children (handleInputChange)}
//                 <button type="submit">Submit</button>
//             </form>
//     )
// }

// AdoptionForm.propTypes ={
//     children: PropTypes.func.isRequired,
//     postRoute: PropTypes.string.isRequired
// }
    
