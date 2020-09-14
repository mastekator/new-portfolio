// React
import React, {useEffect} from 'react';

// Third-party
import WOW from 'wowjs';

// Styles
import classes from './Header.module.css'

// App
import AfterHeader from '../../AfterHeader/AfterHeader';

const Header:React.FC = () => {
    useEffect(() => {
        new WOW.WOW().init()
    })

    return (
        <div className={classes.header}>
            <AfterHeader/>
        </div>
    );
}

export default Header;
