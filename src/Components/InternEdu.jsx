import "./InternEdu.css";

const InternEdu = () => {
  return (
    <>
      <div className="Cards container">
        <div className="Internship">
          <h6>INTERNSHIP</h6>
          <p className="Month1">September - December</p>
          <p className="skills">MERN stack</p>
          <p className="company1">Rishus infotech</p>
          {/* second data */}
          <p className="Month2">July - August</p>
          <p className="skills">Web development online</p>
          <p className="company1">InternPe.com</p>
        </div>
        <div className="Education">
          <h6>EDUCATION</h6>
          <p className="Month1">2019 - 2022</p>
          <p className="skills">Diploma in computer science and engineering</p>
          <p className="company1">RGPV university Bhopal</p>
          {/* second data */}
          <p className="Month2">2022 - 2025</p>
          <p className="skills">
            Bachelors of computer science and engineering
          </p>
          <p className="company1">SAGE unversity Indore</p>
        </div>
      </div>
    </>
  );
};

export default InternEdu;
