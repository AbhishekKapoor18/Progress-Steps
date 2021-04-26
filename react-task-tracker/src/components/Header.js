import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={{color: '#017AFF'}}>{ title }</h1>
           {location.pathname === '/' && ( <Button color={showAdd ? '#EE2421' : '#2bc22b'}
                    text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd} 
            /> )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    color: '#017AFF'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     color: 'red',
// backgroundColor: 'black',
// } 

export default Header

