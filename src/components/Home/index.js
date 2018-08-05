import React from 'react';
import './home.css';
import html from '../../assets/html_b.png';
import css from '../../assets/css_b.png';
import sass from '../../assets/sass_b.png';
import less from '../../assets/less_b.png';
import js from '../../assets/js_b.png';
import react from '../../assets/react_b.png';
import redux from '../../assets/redux_b.png';
// import jq from '../../assets/jquery_b.png';

const Home = () => {
    const email = 'praca.patryk.jankowiak@gmail.com'
    return (
        <div className='home-wrapper' id='main'>
            <div className='technologies-wrapper'>
                <h2 className='title'><span className='active'>// Technologies //</span></h2>
                <div className='technologies'>
                    <img className='technologies-item' src={ html }></img>
                    <img className='technologies-item' src={ css }></img>
                    <img className='technologies-item' src={ sass }></img>
                    <img className='technologies-item' src={ less }></img>
                    <img className='technologies-item' src={ js }></img>
                    <img className='technologies-item' src={ react }></img>
                    <img className='technologies-item' src={ redux }></img>
                    {/* <img className='technologies-item' src={ jq }></img> */}
                </div>
            </div>
            <div className='contact-wrapper'>
                <h2 className='title'><span className='active'>// Contact me //</span></h2>
                <div className='contact'>
                    <p className='contact-text'>
                        <a href={`mailto:${ email }`}>praca.patryk.jankowiak@gmail.com</a>
                    </p>
                    <p className='contact-text'>(+48) 792-432-345</p>
                </div>
            </div>
            <div><a className="blink to-main-section" href='#header'></a></div>
        </div>
    )
}

export default Home;

