import { Avatar } from '@chakra-ui/react'
import PropTypes from 'prop-types';


function AvatarIcon({ picture }) {


    const propsTypes = {
        src: picture
    }

    return (
        <>        
            <Avatar size='md' src={propsTypes.src}></Avatar>
        </>
    )
}

AvatarIcon.propTypes = {
    picture: PropTypes.node,
};

export default AvatarIcon
