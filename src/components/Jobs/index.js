import Image from "next/image";
import { Job } from "./Jobs.styled";

const Jobs = () => {
  return (
    <>
      <h2>Where Ive Worked</h2>
      <Job>
        <h3>ARBCO Enterprises LLC</h3>
        <div className="row">
          <div className="date">May 2021 - Present</div>
          <div className="description">
            <h4>Staff Engineer</h4>
            <p>I am in charge of lead the developers team and monitor the progress of the <b>Atgo Fitness Tracker</b> app project</p>
          </div>
        </div>
        <div className="row">
          <div className="date">April 2019 - Present</div>
          <div className="description">
            <h4>Javascript Full Stack Developer</h4>
            <p>I am responsible for developing new features and supporting the <b>Ketogains</b> platform.</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>Atlantia Search</h3>
        <div className="row">
          <div className="date">July 2017 - November 2018</div>
          <div className="description">
            <h4>Full Stack Software Developer</h4>
            <p>I was part of the pioneering team that created the first marketing marketplace in Latin America.</p>
          </div>
        </div>
      </Job>
    </>
  )
};

export default Jobs;
