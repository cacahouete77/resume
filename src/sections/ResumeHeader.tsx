import './ResumeHeader.css';

const profil = require("./profil.jpg");

function ResumeHeader() {
  return (
    <div className="resume-header">
      <img className="profile-picture" src={profil} alt="Ce à quoi je ressemble"></img>
      <div className="header-text">
        <div>
          <div className="name">Adrien Marcotte</div>
          <div className="sub-name">Écrivain de code, comme de mots</div>
        </div>

        <div className="contact-information">
          <span>(438) 503-8226</span>
          <span></span>
          <span>adrienmarcotte@gmail.com</span>
        </div>

        <span className="line blue-line"></span>
        <span className="line orange-line"></span>
        <span className="line red-line"></span>
        <span className="line green-line"></span>
      </div>
    </div>
  );
}

export default ResumeHeader;
