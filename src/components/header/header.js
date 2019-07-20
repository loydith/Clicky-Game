import React from 'react';
import './style.css';
// import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        {/* <FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}> */}
            
        {/* </FadeIn> */}
        {/* <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} > */}
            <h1>Dogs Clicky Game</h1>
            <h2>click on an image to earn points, but don't click on any more than once!</h2>
        {/* </FadeIn> */}
    </header>
)};

export default Header;