// src/Profile.jsx
import './Profile.css'; // Puedes usar módulos o Tailwind si prefieres
import ProfilePic from './IGFZ8341.JPG';
function Profile() {
  return (
    <div className="profile-container">
      <img
        src={ProfilePic}
        alt="Foto de perfil"
        className="profile-img"
    />
      <h1 className="profile-name">Home</h1>
      <p className="profile-role">Ingeniera en Computación | Mentora | Atleta</p>
      <p className="profile-description">
        Apasionada por la tecnología, los sistemas distribuidos, y el desarrollo personal.
        Actualmente trabajando en proyectos de radar y explorando el mundo de la ingeniería militar.
      </p>
      {/* Cards */}
      <div className="home-card">
        <h2>Bienvenida</h2>
        <p>¡Gracias por visitar mi sitio web!</p>
      </div>
      {/* Comments Section */}
      <div className="comments-section">
        <p>¡Gracias por visitar mi sitio web!</p>
        {/* Comments will go here */}
      </div>
    <div className="bottom-cards-container">
    <div className="home-card">Card 1</div>
    <div className="home-card">Card 2</div>
    <div className="home-card">Card 3</div>
    {/* Add more cards as needed */}
    {/* Repeat the cards for seamless effect */}
  <div className="home-card">Card 1</div>
  <div className="home-card">Card 2</div>
  <div className="home-card">Card 3</div>
</div>
      
    </div>
  );
}

export default Profile;
