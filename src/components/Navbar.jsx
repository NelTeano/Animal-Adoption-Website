
import { useAuth0 } from "@auth0/auth0-react";

// STYLE
import '../assets/styles/navbar.css'
import Logo from '../assets/Adoption-Website-Logo.png'

// COMPONENTS
import Authbutton from './AuthButton'
import Avatar from './AvatarIcon'
import { Link,  useLocation } from 'react-router-dom'

const LinkActiveStyle = {
    active : '#9A93FF',
    notActive : 'black'
}


function Navbar() {

    const { user, isAuthenticated } = useAuth0();
    const location = useLocation();
    
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
                    <Link to="/service" style={{ color: location.pathname === '/service' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        service
                    </Link>
                    <Link to="/gallery" style={{ color: location.pathname === '/gallery' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        gallery
                    </Link>
                    <Link to="/contact" style={{ color: location.pathname === '/contact' ?  LinkActiveStyle.active : LinkActiveStyle.notActive }}>
                        contact us
                    </Link>
                </div>
                <div className="user-menu">  
                    <Authbutton></Authbutton>        
                    { isAuthenticated && <Avatar picture={user.picture} ></Avatar>} { /* IF USER IS STILL LOGGED AVATAR ICON WILL SHOW */ }
                </div>
            </nav>
        </>
    )
}




export default Navbar
