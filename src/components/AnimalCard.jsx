import { Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'; 



function AnimalCard({ animalName, animalPicture, animalAge }) {


    const propsTypes = {
        name: animalName,
        picture: animalPicture,
        age: animalAge,
    }
    // COMPONENT STYLES
    const cardContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '179px',
        height: '176px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '-1px -1px 20px 7px rgba(0, 0, 0, 0.25)'
    }


    const imageFormat ={
        maxWidth: '163px',
        maxHeight:'132.88px',
        borderRadius:'9.404px',
        marginTop:'10px'
    }

    const buttonStyle = {
        width: '90px',
        height: '36px',
        boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        top: '20px',
        gap: '3px',
        backgroundColor: '#ADA7FF',
        color: 'black',
        fontSize:'12.663px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
        
        return (
            <>
                <div style={cardContainer}>
                    <Image
                        sx={imageFormat}
                        src={propsTypes.picture}
                    ></Image>
                    <Link 
                        to={'/form'}
                    >
                        <Button
                            sx={buttonStyle}
                        >
                            <h3>{propsTypes.name}</h3> <p>{propsTypes.age}</p>
                        </Button>
                    </Link>
                </div>
            </>
        )
    }

    AnimalCard.propTypes = {
        animalName: PropTypes.string.isRequired, 
        animalPicture: PropTypes.string.isRequired,
        animalAge: PropTypes.string.isRequired,
    };


    export default AnimalCard
