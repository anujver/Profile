import "./oldcards.css";

const Oldcards = () => {
  return (
    <>
      <div className="oldcards container">
        <div className="div1">
          <div className="skill-section1">
            <a href="https://www.linkedin.com/in/anuj-verma-440957242/">
              {" "}
              <div className="circle3"></div>{" "}
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FAnujverma561354">
              {" "}
              <div className="circle4"></div>
            </a>
          </div>
          <p>STAY WITH ME</p>
          <h4>Profiles</h4>
        </div>
        <a href="/contact">
          {" "}
          <div className="section-d container">
            <div className="stars1"></div>
            <h1 className="lets1">Let's</h1>
            <h1 className="work1">work</h1>
            <h1 className="together1">together</h1>
          </div>
        </a>
        <a href="/credentials">
          <div className="signatureA container">
            <p>MORE ABOUT ME</p>
            <h5>Credentials</h5>
          </div>
        </a>
      </div>
    </>
  );
};

export default Oldcards;
