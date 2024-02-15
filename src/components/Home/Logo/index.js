import './index.scss';
import LogoA from '../../../assets/images/cube-2.png';
const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();
  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoA} alt="A" />
    </div>
  );
};

export default Logo;
