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
      <h1 className="profile-name">Phyona Schrader</h1>
      <p className="profile-role">Ingeniera en Computación | Mentora | Atleta</p>
      <p className="profile-description">
        Apasionada por la tecnología, los sistemas distribuidos, y el desarrollo personal.
        Actualmente trabajando en proyectos de radar y explorando el mundo de la ingeniería militar.
      </p>
    </div>
  );
}

export default Profile;
