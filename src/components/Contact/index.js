import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [capVal, setCapVal] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ybiwvqt';
    const templateId = 'template_rel4he2';
    const publicKey = 'EGq_7G5mZJcYwEyPY';


    const templateParams = {
        from_name:name,
        from_email:email,
        to_name: "Abenezer",
        message:message,
        "g-recaptcha-response": capVal, 
    };


    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) =>{
        console.log('Email sent successfully', response);
        alert('Message successfully sent!');
                window.location.reload(false);
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error)=>{
        console.error('Error sending email', error);
        alert('Failed to send the message, please try again');
    })
}
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Feel free to reach out for inquiries, collaborations, or
            opportunities. I'm eager to connect with professionals, like-minded
            individuals, and potential clients. Whether it's a project,
            partnership, or a simple hello, I'd love to hear from you. Contact
            me via email or the contact form below. I respond promptly and look
            forward to starting a conversation. Let's work together to bring
            your ideas to life and achieve success.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit} method='POST'>
              
              <input className='fInput' placeholder='Full Name'  type="text" value={name}
              onChange={(e)=> setName(e.target.value)} required/>
              <input className='fInput' type="email" placeholder='Email' value={email}
              onChange={(e)=> setEmail(e.target.value)} required/>
              <textarea className='fInput' value={message}  placeholder='Message'
              onChange={(e)=> setMessage(e.target.value)} required>

              </textarea>
              <ReCAPTCHA className='fInput'
              sitekey='6LdNYHMpAAAAAJxqrwtLUFqFqN5KGuYE2I-OkpJ1'
              onChange={(val) => setCapVal(val)}
              />
              <button className='fInput flat-button' disabled={!capVal} type='submit'>Send Email</button>
            </form>
            
          </div>
        </div>
        <div className="info-map">
          Abenezer Nigussie,
          <br />
          Ethiopia, 4kilo King George VI St <br />
          Addis Ababa <br />
          <span>abenezernigussiecs@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[9.03354472193214, 38.76365043743165]}
            zoom={25}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.03354472193214, 38.76365043743165]}>
              <Popup>Abenu is here come over to grab some coffee </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
