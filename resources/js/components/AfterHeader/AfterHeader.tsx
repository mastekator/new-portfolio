//React
import React from 'react';

//Styles
import classes from "./AfterHeader.module.css";

const AfterHeader:React.FC = () => {
    return (
        <div className={classes.background}>
            <div className={classes.stars}> </div>
            <div className={classes.stars2}> </div>
            <div className={classes.stars3}> </div>
        </div>
    );
}

export default AfterHeader;
