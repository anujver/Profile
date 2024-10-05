import "./Section.css";

const Section = () => {
  return (
    <>
      {" "}
      <div className="card1 container">
        <div className="Resume"></div>
        <a href="/Resume">
          <p>CHECK OUT THIS</p>
        </a>
        <a href="Resume">
          <h4>Resume</h4>
        </a>
      </div>
      <div className="card2">
        <div className="box">
          <a href="https://www.mongodb.com/docs/">
            {" "}
            <div className="box1"></div>{" "}
          </a>
          <a href="https://expressjs.com/">
            {" "}
            <div className="box2"></div>{" "}
          </a>
          <a href="https://react.dev/">
            {" "}
            <div className="box3"></div>{" "}
          </a>
          <a href="https://nodejs.org/docs/latest/api/">
            {" "}
            <div className="box4"></div>{" "}
          </a>
        </div>
        <p>MORE ABOUT MY SKILLS</p>
        <h4>M.E.R.N</h4>
      </div>
      <div className="card3">
        <div className="skill-section">
          <a href="https://www.linkedin.com/in/anuj-verma-440957242/">
            {" "}
            <div className="circle1"></div>{" "}
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FAnujverma561354">
            {" "}
            <div className="circle2"></div>{" "}
          </a>
        </div>
        <p>STAY WITH ME</p>
        <h4>Profiles</h4>
      </div>
    </>
  );
};

export default Section;
