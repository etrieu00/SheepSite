import React from 'react';
import { ReactComponent as HillOne } from '../../SVG/Landscape/hill-one.svg';
import { ReactComponent as HillTwo } from '../../SVG/Landscape/hill-two.svg';
import { ReactComponent as HillThree } from '../../SVG/Landscape/hill-three.svg';
import { ReactComponent as HillFour } from '../../SVG/Landscape/hill-four.svg';
import { ReactComponent as WaterOne } from '../../SVG/Landscape/water-one.svg';
import { ReactComponent as Sheep } from '../../SVG/Sheeps/sheep-idle.svg';
import classes from './Landscape.module.css';

const Landscape = (props) => {
    return (
        <div>
            <Sheep className={classes.Sheep}/>
            <HillOne className={classes.HillOne}/>
            <WaterOne className={classes.WaterOne}/>
            <HillTwo className={classes.HillTwo}/>
            <HillThree className={classes.HillThree}/>
            <HillFour className={classes.HillFour}/>
        </div>
    );
}

export default Landscape