import logo from '../../assets/logo-white.png';

function Hero() {
  return (
    <div className="hero-container">
      <img src={logo} alt="logo" className="hero-image" />
      {/* Optional Text below: */}
      {/* <div className="hero-text">
        <p>WhistleHub Project PDAM</p>
      </div> */}
    </div>
  );
}

export default Hero;