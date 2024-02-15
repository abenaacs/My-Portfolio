import LogoTitle from '../../assets/images/cube-2.png';
import cube1 from '../../assets/images/cube-1.png';
import cube3 from '../../assets/images/cube-3.JPG';
import cube4 from '../../assets/images/cube-4.png';
import cube6 from '../../assets/images/cube-6.jpg';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
// import Layout from '../Layout';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [ 'b', 'e', 'n', 'e', 'z', 'e', 'r'];
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" style={{width: '60px'}}/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={cube1} alt='Abena' style={{background:'#8d8d8d'}} />
            </div>
            <div className="face2">
              <img src={cube6} alt='abena'/>
            </div>
            <div className="face3">
              <img src={cube4} alt='Abena'/>
            </div>
            <div className="face4">
              <img src={cube3} alt='Abena'/>
            </div>
            <div className="face5">
            <img src={cube1} alt='Abena' />
            </div>
            <div className="face6">
              <img src={LogoTitle}  alt='Abena' />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
