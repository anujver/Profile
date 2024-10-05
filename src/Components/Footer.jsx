import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer container">
        <h1>ANUJ VERMA</h1>
        <div className="links">
          <a className="home" href="/">
            HOME
          </a>
          <a className="projects" href="/projects">
            PROJECTS
          </a>
          <a className="contactme" href="/contact">
            CONTACT ME
          </a>
          <a className="aboutme" href="/about">
            ABOUT ME
          </a>
          <p>&copy; All rights reserved by</p>
          <p className="anuj">Anuj</p>
        </div>
      </div>

      <div className="temprory"></div>
    </>
  );
};

export default Footer;
