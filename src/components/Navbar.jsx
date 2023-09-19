import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link,  useLocation } from 'react-router-dom'

// STYLE
import '../assets/styles/navbar.css'
import Logo from '../assets/Adoption-Website-Logo.png'

// COMPONENTS
import Authbutton from './AuthButton'
import Avatar from './AvatarIcon'
import { Button } from "@chakra-ui/react";

const LinkActiveStyle = {
    active : '#9A93FF',
    notActive : 'black'
}


function Navbar() {

    const [menu, setMenu] = useState(false) // TO SET THE USER MENU IF IT WILL SHOWS
    const { user, isAuthenticated } = useAuth0(); // AUTH0 USER INFORMATION AND TO CHECK IF ITS ALREADY LOGGED IN
    const location = useLocation(); 

    // SHOW USER MENU
    const showMenu = () =>{
        setMenu(true);
    }
    const hideMenu = () =>{
        setMenu(false);
    }

    const menuStyle = {
        display: 'flex',
        position: 'fixed',
        flexDirection: 'column',

        alignItems: 'center',
        widht: '100px',
        padding: '10px',
        gap: '20px',
        height: '160px',
        backgroundColor: 'transparent',
        marginLeft: '80px',
        zIndex: '1000',
    }

    const buttonStyle = {
        backgroundColor: '#ADA7FF',
        color: 'white',
        borderRadius: '999px',
        padding: '16px 32px',
        _hover: {
            backgroundColor: '#8984c7',
            color: 'white',
            transition: '0.7s'
        },
    }

    const buttonMenu = {
        backgroundColor: 'transparent',
        _hover: {
            backgroundColor: 'transparent',
        },
    }
    
    return (
        <>
            <nav>
                <div>
                    <img src={Logo}></img>
                </div>
                <div className="nav-menu">
                    <Link to="/" style={{ color: location.pathname === '/' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        Home
                    </Link>
                    <Link to="/about"   style={{ color: location.pathname === '/about' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        about us
                    </Link>
                    <Link to="/gallery" style={{ color: location.pathname === '/gallery' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        gallery
                    </Link>
                    <Link to="/contact" style={{ color: location.pathname === '/contact' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        contact us
                    </Link>
                </div>
                <div className="user-menu"> 
                { !isAuthenticated &&
                <Authbutton></Authbutton>        
                }
                    { isAuthenticated &&
                        <>
                        { menu ? (
                            <>
                                <Button sx={buttonMenu} onClick={hideMenu}>
                                                    <Avatar picture={user.picture}></Avatar>{ /* IF USER IS STILL LOGGED AVATAR ICON WILL SHOW */ }
                                </Button>
                            </>
                        ) : (   
                            <Button sx={buttonMenu} onClick={showMenu}>
                                <Avatar picture={user.picture}></Avatar>{ /* IF USER IS STILL LOGGED AVATAR ICON WILL SHOW */ }
                            </Button>  
                            )
                        }
                        </> 
                    }
                    {   menu &&
                    <div style={menuStyle}>
                        <Authbutton></Authbutton>  
                        <Link to={'AccountDetails'}>
                            <Button sx={buttonStyle}>Account Details</Button>
                        </Link>
                        <Link to={'MyAnimals'}>
                            <Button sx={buttonStyle}>My Animals</Button>
                        </Link>
                    </div>
                    }
                </div>
            </nav>
        </>
    )
}




export default Navbar
