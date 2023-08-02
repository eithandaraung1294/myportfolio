import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import LogoTitle from '../../assets/images/Elogo.png';
import AnimatedLetters from '../AnimatedLetters'; 
import Logo from './Logo';
import './index.scss';


const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','t','h','a','n','d','a','r']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Return a cleanup function to clear the timer on unmount
        return () => clearTimeout(timerId);
      }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={'${letterClass}_12'}>i</span>
                <br />
                <span className={'${letterClass}_13'}>I</span>
                <span className={'${letterClass}_14'}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray = {nameArray}
                idx = {15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray = {jobArray}
                idx = {22} /> </h1>
                <h2>Frontend Developer / Backend Developer </h2>
                <Link to="/contact" className='falt-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home