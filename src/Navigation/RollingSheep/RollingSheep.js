import React from 'react';
import classes from './RollingSheep.module.css';

import {ReactComponent as Rollone} from '../../SVG/Sheeps/roll-one.svg';
import {ReactComponent as Rolltwo} from '../../SVG/Sheeps/roll-two.svg';
import {ReactComponent as Rollthree} from '../../SVG/Sheeps/roll-three.svg';
import {ReactComponent as Rollfour} from '../../SVG/Sheeps/roll-four.svg';

const RollingSheep = (props) => {
    const rolling = (state) =>{
        switch(state){
            case 'home':
                return (<Rollone className={classes.One}/>);
            case 'about':
                return (<Rolltwo className={classes.Two}/>);
            case 'contact':
                return (<Rollthree className={classes.Three}/>);
            case 'links':
                return (<Rollfour className={classes.Four}/>);
            default:
                return (<div></div>);
        }
    }

    return(
        <div>
            {rolling(props.roll)}        
        </div>
    );
};

export default RollingSheep;