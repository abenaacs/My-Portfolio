import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import { faAngular,faCss3,faHtml5,faGitAlt,faJsSquare,faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hello, I'm a computer science major and a passionate full-stack
          developer with a strong interest in website development. I find joy in
          creating engaging and user-friendly web experiences.
        </p>
        <p>
          As a fast learner and committed individual, I embrace challenges and
          strive to turn the impossible into a reality. Throughout my journey, I
          have achieved significant milestones and continuously push myself to
          reach new heights. I am also a goal-oriented person who thrives on
          setting and achieving objectives, both personally and professionally.
        </p>
        <p>
          I am excited to contribute my skills and knowledge to create
          innovative solutions and make a positive impact in the world of
          technology.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
