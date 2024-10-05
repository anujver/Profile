import "./Information.css";

const Information = () => {
  return (
    <>
      <div className="Details container">
        <h6>CONTACT INFO</h6>
        <div className="mail">
          <div className="mailImage"></div>
          <h6>EMAIL ID</h6>
          <h5>vanuj9634@gmail.com</h5>
          <h4>vanuj2204@gmail.com</h4>
        </div>
        <div className="contact">
          <div className="contactImage"></div>
          <h6>CONTACT ME</h6>
          <h5>+91 8359086759</h5>
          <h4>+91 8839166262</h4>
        </div>
        <div className="location">
          <div className="locationImage"></div>
          <h6>LOCATION</h6>
          <h5>Villa no. 463,</h5>
          <h4>Omaxe hills indore</h4>
        </div>
        <h3 className="socialInfo">SOCIAL INFO</h3>
        <a href="https://www.linkedin.com/in/anuj-verma-440957242/">
          {" "}
          <div className="circle5"></div>{" "}
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FAnujverma561354">
          {" "}
          <div className="circle6"></div>{" "}
        </a>
        <a href="#">
          {" "}
          <div className="circle7"></div>{" "}
        </a>
      </div>
    </>
  );
};

export default Information;
