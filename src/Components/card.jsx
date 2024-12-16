import "./card.css";
import photo from "../assets/Photo.jpg";
const Card = () => {
  return (
    <>
      <div className="card container">
        <div className="photo"></div>
        <div className="content">
          <p>A WEB DEVELOPER</p>
          <h2>
            Anuj <br /> Verma.
          </h2>
          <h6>
            Hello My name is anuj verma <br />
            iam a Full stack developer.
          </h6>
        </div>
      </div>
      <div className="skils">
        <div className="skils2">
          <marquee behavior="" direction="left">
            <p>
              MongoDB , Express JS , React JS , Node JS , HTML , CSS ,
              JavaScript , Tailwind CSS , Bootstrap , Redux
            </p>
          </marquee>
        </div>
      </div>
      <div className="signature1 container">
        <a href="/about">
          <p>MORE ABOUT ME</p>
          <h5>Credentials</h5>
        </a>
      </div>
      <div className="signature2 container">
        <div className="bg-image"></div>
        <a href="/projects">
          <p>SHOWCASE</p>
          <h5>Projects</h5>
        </a>
      </div>
    </>
  );
};

export default Card;
