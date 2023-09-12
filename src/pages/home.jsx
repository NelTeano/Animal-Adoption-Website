// COMPONENTS
import { Button, Image } from '@chakra-ui/react'

// IMAGES IMPORTS
import Dogprint from '../assets/Dogprint.svg'
import Dog from '../assets/dog-landingpage.png'
import Cat from '../assets/cat-landingpage.png'

// STYLE CSS
import '../assets/styles/homeStyle.css'


export default function Landingpage() {

    const buttonSpacing = {
        marginTop: '60px',
        marginBottom: '60px'
    }

    const colorTheme = {
        black: '#302B3A',
        purple: '#ADA7FF'
    }

    const dogModel = {
        width: '240.713px',
        height: '344.22px',
        position: 'absolute'
    }

    const catModel = {
        width: '362.961px',
        height: '362.961px',
        position: 'absolute',
    }

    const pawModel = {
        width: '20px',
        height: '23px',
        transform: 'rotate(18.046deg)',
        marginRight: '10px',
        position: 'absolute',
    }

    const AdoptButtonStyle = {
        display: 'flex',                          
        backgroundColor: colorTheme.purple,
        padding: '16px 32px',
        justifyContent:'center',
        alignContent: 'center',
        gap: '10px',
        borderRadius: '999px',
        color: 'white',
        _hover: {
            backgroundColor: '#8984c7',
            transition: '0.7s'
        }
    }

    return (
        
        <>      
        {/* FLOATING OBJECTS-------------------------------------------- */}
        <div className='dog-vector'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="344" height="355" viewBox="0 0 344 355" fill="none">
                            <path d="M344 317.027V40C344 17.9086 326.091 0 304 0H38.4839C16.6019 0 -1.45779 17.7258 0.336354 39.5341C17.0979 243.275 185.291 329.292 300.588 354.182C323.664 359.163 344 340.635 344 317.027Z" fill="#DAB6FC"/>
                        </svg>
                        <Image 
                            marginLeft={'100px'}
                            sx={dogModel}
                            src={Dog}>
                        </Image>
                    </div>
                    <div className='cat-vector'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="344" height="356" viewBox="0 0 344 356" fill="none">
                            <path d="M2.77154e-05 38.7916L3.49691e-06 315.819C1.56562e-06 337.91 17.9087 355.819 40.0001 355.819L305.516 355.819C327.398 355.819 345.458 338.093 343.664 316.285C326.902 112.543 158.709 26.5267 43.4124 1.63712C20.3356 -3.34457 2.97793e-05 15.1832 2.77154e-05 38.7916Z" fill="#DAB6FC"/>
                        </svg>
                        <Image 
                            sx={catModel}
                            src={Cat}>
                        </Image>
                    </div>
                    <div className='paw-vector'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                            <path d="M44.4729 5.68542e-06L15 6.97372e-06C6.71573 7.33584e-06 -2.26678e-06 6.71572 -1.90466e-06 15L-6.47176e-07 43.7679C-2.88509e-07 51.9732 6.6918 58.8999 14.7087 57.1516C38.9935 51.8555 51.7263 32.7244 57.4023 16.0716C60.2575 7.69462 53.3231 5.29857e-06 44.4729 5.68542e-06Z" fill="#ADA7FF"/>
                        </svg>
                        <Image
                            sx={pawModel}
                            src={Dogprint}
                        ></Image>
                    </div>
            {/* FLOATING OBJECTS-------------------------------------------*/}
            <div className='board-container'>
                <div>
                    <h1>Looking for a 
                        <span style={{
                            color: colorTheme.purple
                        }}> good </span>
                        pet?
                    </h1>
                </div>
                <div className='board-about'>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Enim viverra quis egestas usi ullamcorper ut ante.<br></br>
                        Eu pretium lemiro ispum dolor amet viivata tarimo
                        ullamcorper ut
                    </p>
                </div>
                <div style={buttonSpacing}>
                    <Button
                        sx={AdoptButtonStyle}
                    >adopt now
                        <Image
                            src={Dogprint}
                        ></Image>
                    </Button>
                </div>
                <div className='board-total'>
                    <div>
                         <h2>299k+</h2>  {/* JUST SAMPLE VALUE FROM DATABASE LATER */}
                        <p>Total Dogs</p>
                    </div>
                    <div>
                        <h2>99k+</h2>
                        <p>Adopted</p>
                    </div>
                    <div>
                        <h2>2k+</h2>  
                        <p>Available</p>
                    </div>
                </div>
            </div>
        </>
    )
}
