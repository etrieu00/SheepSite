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
                right: '3%',
                width: '10%',
            },
            'links':{
                top: '35%',
                right: '5%',
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
                right: '3%',
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
                right: '30%',
                width: '10%',
            },
            'about':{
                top: '35%',
                right: '25%',
                width: '10%',
            },
            'contact':{
                top: '40%',
                right: '3%',
                width: '10%',
            },
            'links':{
                top: '3%',
                right: '3%',
                width: '20%',
            }
        }
    }


    const [page,setPage] = useState({
        page:'home',
    });
    const homeHandler = () => {
        setPage({page:'home'});
    };
    const aboutHandler = () => {
        setPage({page:'about'});
    };
    const contactHandler = () => {
        setPage({page:'contact'});
    };
    const linksHandler = () => {
        setPage({page:'links'});
    };

    return (
        <Clouds>
            <Home 
            onClick={homeHandler} 
            style={{...cloudStyles, ...cloudPositions[page.page].home}}/>
            <About onClick={aboutHandler} 
            style={{...cloudStyles, ...cloudPositions[page.page].about}}/>
            <Contact onClick={contactHandler} 
            style={{...cloudStyles, ...cloudPositions[page.page].contact}}/>
            <Links onClick={linksHandler} 
            style={{...cloudStyles, ...cloudPositions[page.page].links}}/>
        </Clouds>
    );
};

export default Sky;