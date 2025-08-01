import './Home.css';
import ProfilePic from './CaraProfile.png';
import Logo from './logo.png';

function Home() {
  return (
    <div className="profile-container">
      {/* Left Side: Large Profile Image */}
      <div className="profile-image-container">
        <img
          src={ProfilePic}
          alt="Foto de perfil"
          className="profile-image"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="text-content">
        <h1 className="profile-name">Home</h1>
        <p className="profile-role">
          This is a little bit about me... I play very pretty and and very pretty and dab. <br />
          ................................................................................................................
        </p>
        <p className="profile-description">
          This is just a different paragraph.. We can make as many of these as you want
        </p>
      </div>

      {/* Quote Card */}
      <div className="quote-card">
        <h2>Get a quote</h2>
      </div>

      {/* Bottom Cards */}
      <div className="bottom-cards">
        <div className="bottom-cards-inner">
          <div className="home-card">Card 1</div>
          <div className="home-card">Card 2</div>
          <div className="home-card">Card 3</div>
          <div className="home-card">Card 1</div> {/* Duplicate for seamless loop */}
          <div className="home-card">Card 2</div>
          <div className="home-card">Card 3</div>
          <div className="home-card">Card 1</div>
          <div className="home-card">Card 2</div>
          <div className="home-card">Card 3</div>
          <div className="home-card">Card 1</div>
          <div className="home-card">Card 2</div>
          <div className="home-card">Card 3</div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;