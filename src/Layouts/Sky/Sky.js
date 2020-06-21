import React, { useState } from 'react';

import { ReactComponent as Home } from '../../SVG/Clouds/home-cloud.svg';
import { ReactComponent as About } from '../../SVG/Clouds/about-cloud.svg';
import { ReactComponent as Contact } from '../../SVG/Clouds/contact-cloud.svg';
import { ReactComponent as Links } from '../../SVG/Clouds/links-cloud.svg';
import Clouds from '../../Navigation/Clouds/Clouds';

const Sky = (props) => {
    const cloudStyles={
        width: '15%',
        height: 'auto',
        position: 'absolute',
        cursor: 'pointer',
        transitionTimingFunction: 'ease-in-out',
        transition: '2.5s',
    }
    const cloudPositions = {
        'home':{
            'home':{
                top: '10%',
                left: '3%',
                width: '20%',
            },
            'about':{
                top: '5%',
                left: '25%',
                width: '10%',
            },
            'contact':{
                top: '30%',
                left: '25%',
                width: '10%',
            },
            'links':{
                top: '20%',
                left: '35%',
                width: '10%',
            }
        },
        'about':{
            'home':{
                top: '5%',
                left: '3%',
                width: '10%',
            },
            'about':{
                top: '35%',
                left: '3%',
                width: '20%',
            },
            'contact':{
                top: '10%',
                left: '87%',
                width: '10%',
            },
            'links':{
                top: '35%',
                left: '85%',
                width: '10%',
            }
        },
        'contact':{
            'home':{
                top: '5%',
                left: '3%',
                width: '10%',
            },
            'about':{
                top: '35%',
                left: '3%',
                width: '10%',
            },
            'contact':{
                top: '5%',
                left: '77%',
                width: '20%',
            },
            'links':{
                top: '20%',
                left: '10%',
                width: '10%',
            }
        },
        'links':{
            'home':{
                top: '10%',
                left: '63%',
                width: '10%',
            },
            'about':{
                top: '30%',
                left: '70%',
                width: '10%',
            },
            'contact':{
                top: '40%',
                left: '80%',
                width: '10%',
            },
            'links':{
                top: '3%',
                left: '77%',
                width: '20%',
            }
        }
    }
    return (
        <Clouds>
            <Home 
            onClick={ () => props.click('home') } 
            style={{...cloudStyles, ...cloudPositions[props.page].home}}/>
            <About onClick={ () => props.click('about') } 
            style={{...cloudStyles, ...cloudPositions[props.page].about}}/>
            <Contact onClick={ () => props.click('contact') } 
            style={{...cloudStyles, ...cloudPositions[props.page].contact}}/>
            <Links onClick={ () => props.click('links') } 
            style={{...cloudStyles, ...cloudPositions[props.page].links}}/>
        </Clouds>
    );
};

export default Sky;