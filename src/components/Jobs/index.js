import Image from "next/image";
import { Job } from "./Jobs.styled";

const Jobs = () => {
  return (
    <>
      <h2>Where Ive Worked</h2>
      <Job>
        <header>
          <Image src="/images/works/ketogains.jpg" alt="keto" width={50} height={50} />
          Crimsonguard
        </header>
        <div className="row">
          <div className="date">April 2019 - Present</div>
          <div className="description">
            <p className="title">Staff Engineer</p>
            <p>Work for Ketogains and Atgo Fitness Tracker projects</p>
          </div>
        </div>
        <div className="row">
          <div className="date">April 2019 - Present</div>
          <div className="description">
            <p className="title">Staff Engineer</p>
            <p>Work for Ketogains and Atgo Fitness Tracker projects</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>Staff Engineer </h3>
        <p>May 2019 -  Present</p>
        <ul>
          <li>Deliver</li>
          <li>Ketogains</li>
        </ul>
      </Job>
      <Job>
        <h3>Staff Engineer </h3>
        <p>May 2019 -  Present</p>
        <ul>
          <li>Deliver</li>
          <li>Ketogains</li>
        </ul>
      </Job>
    </>
  )
};

export default Jobs;
