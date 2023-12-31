import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react'


function AuthButton() {
    const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();

    const ButtonStyle = {
        backgroundColor: '#ADA7FF',
        color: 'white',
        borderRadius: '999px',
        padding: '16px 32px',
        _hover: {
            backgroundColor: '#8984c7',
            color: 'white',
            transition: '0.7s'
        },
    };
    
    return(
    <>
        { isAuthenticated ? 
            <Button 
                sx={ButtonStyle}
                onClick={() => logout()} // ACTIVATE CALLBACK LOGOUT THE ACCOUNT AND REDIRECT
            >
                Sign Out
            </Button> :
            <Button 
                sx={ButtonStyle}
                onClick={() => loginWithRedirect()} // ACTIVATE CALLBACK LOGIN REDIRECTED TO AUTH0 LOGINPAGE
            >
                Sign In
            </Button>
        }
    </>
    )
}

export default AuthButton
