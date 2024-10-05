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
              JavaScript
            </p>
          </marquee>
        </div>
      </div>
      <a href="/about">
        <div className="signature1 container">
          {" "}
          <p>MORE ABOUT ME</p>
          <h5>Credentials</h5>
        </div>
      </a>
      <a href="/projects">
        {" "}
        <div className="signature2 container">
          <div className="bg-image"></div>
          <p>SHOWCASE</p>
          <h5>Projects</h5>
        </div>
      </a>
    </>
  );
};

export default Card;
