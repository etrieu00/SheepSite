import React from 'react';
import classes from './Display.module.css';

const Display = (props) => {
    const position = {
        home: {
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            left: '55%',
            top: '25%',
            transitionTimingFunction: 'ease-in-out',
            transition: '1.5s',
        },
        about: {
            position: 'absolute',
            width: 'auto',
            left: '35%',
            top: '15%',
            transitionTimingFunction: 'ease-in-out',
            transition: '1.5s',
        },
        contact: {
            position: 'absolute',
            width: 'auto',
            left: '30%',
            top: '20%',
            transitionTimingFunction: 'ease-in-out',
            transition: '1.5s',
        },
        links: {
            position: 'absolute',
            width: 'auto',
            left: '10%',
            top: '20%',
            transitionTimingFunction: 'ease-in-out',
            transition: '1.5s',
        }
    }
    switch(props.page){
        case 'home':
            return(
                <div style={ position.home } >
                    <h1 className={classes.Heading} >Welcome to my little website</h1>
                    <p className={classes.Paragraph} >This is the home of the dumb looking sheeps.</p>
                    <p className={classes.Paragraph} >A website created for fun while experimenting with React and SVG.</p>
                </div>
            );
        case 'about':
            return(
                <div style={ position.about } >
                    <h1 className={classes.Heading} >About</h1>
                    <p className={classes.Paragraph} >My name is Eric Trieu.</p>
                    <p className={classes.Paragraph} >I recently graduated in December 2019.</p>
                    <p className={classes.Paragraph} >I enjoy coding and learning new techniques!</p>
                    <p className={classes.Paragraph} >I current work for Trident Systems.</p>
                    <p className={classes.Paragraph} >I like to eat lamb.</p>
                </div>
            );
        case 'contact':
            return(
                <div style={ position.contact } >
                    <h1 className={classes.Heading} >Contact Me!</h1>
                    <p className={classes.Paragraph} >etrieu2@masonlive.gmu.edu</p>
                </div>
            );
        case 'links':
            return(
                <div style={ position.links } >
                    <h1 className={classes.Heading} >Nothing here but us sheeps.</h1>
                    <p className={classes.Paragraph} >etrieu2@masonlive.gmu.edu</p>
                </div>
            );
        default:
            return(
                <div>
                    <h1 className={classes.Heading} >Did you break something?</h1>
                </div>
            );
    }
};

export default Display;