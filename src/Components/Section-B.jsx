import "./Section-B.css";

const SectionB = () => {
  return (
    <>
      <div className="section-B container">
        <div className="company"></div>
        <h6>CURRENT STATUS</h6>
        <p>
          Hello..!! My name is Anuj verma <br />
          Iam a full stack web developer <br />
          Iam currently working as a intern in <br /> RISHUS INFOTECH INDORE..
        </p>
        <a href="#">
          <h5>(Present)</h5>
        </a>
      </div>
      <a href="/contact">
        {" "}
        <div className="section-c container">
          <div className="stars"></div>
          <h1 className="lets">Let's</h1>
          <h1 className="work">work</h1>
          <h1 className="together">together</h1>
        </div>
      </a>
    </>
  );
};

export default SectionB;
