import "./line1.css";

const Line = () => {
  return (
    <>
      <div className="Holder container">
        <div className="project1">
          <div className="P1photo"></div>
          <a href="">
            <h5>FRONTEND DEVELOPMENT</h5>
            <h3>Blogging</h3>
          </a>
        </div>
        <div className="project2">
          <div className="P2photo"></div>
          <a href="">
            <h5>REACT JS</h5>
            <h3>YouTube clone</h3>
          </a>
        </div>
        <div className="project3">
          <div className="P3photo"></div>
          <a href="">
            <h5>REACT JS</h5>
            <h3>Netflix clone</h3>
          </a>
        </div>
      </div>
      <div className="Heading">
        <h1>ALL PROJECTS</h1>
      </div>
    </>
  );
};

export default Line;
