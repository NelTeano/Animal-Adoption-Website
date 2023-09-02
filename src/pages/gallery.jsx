import AnimalCard  from '../components/AnimalCard';
import DogModel from '../assets/dogmodel.png'

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


    function gallery() {
        return (
            <>
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

export default gallery
