import "./credentials.css";

const Credentials = () => {
  return (
    <>
      <div className="object container">
        <div className="picture"></div>
        <h2>Anuj verma</h2>
        <h5>@anuj2204</h5>
        <div className="social">
          <a href="">
            <div className="circle8"></div>
          </a>
          <a href="">
            <div className="circle9"></div>
          </a>
          <a href="">
            <div className="circle10"></div>
          </a>
          <a href="">
            <div className="circle11"></div>
          </a>
        </div>
        <button type="button" class="btn2 btn-outline-secondary">
          Contact me
        </button>
      </div>
    </>
  );
};

export default Credentials;
