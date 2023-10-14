import Image from "next/image";
import { Job } from "./Jobs.styled";

const Jobs = () => {
  return (
    <>
      <h2>Where I&apos;ve Worked</h2>
      <Job>
        <h3>CRIMSONGUARD</h3>
        <div className="row">
          <div className="date">May 2021 - Present</div>
          <div className="description">
            <h4>Staff Engineer</h4>
            <p>I am in charge of lead the developers team and monitor the progress of the <b><a href="https://atgo.app" target="_blank">Atgo Fitness Tracker</a></b> app project</p>
          </div>
        </div>
        <div className="row">
          <div className="date">April 2019 - Present</div>
          <div className="description">
            <h4>Javascript Full Stack Developer</h4>
            <p>I am responsible for developing new features and supporting the <b><a href="https://ketogains.com" target="_blank">Ketogains</a></b> platform.</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>Atlantia Search</h3>
        <div className="row">
          <div className="date">July 2017 - November 2018</div>
          <div className="description">
            <h4>Full Stack Software Developer</h4>
            <p>I was part of the pioneering team that created the <b><a href="https://atlantiasearch.com" target="_blank">first marketing marketplace</a></b> in Latin America.</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>Estrategia Corporativa NAAT</h3>
        <div className="row">
          <div className="date">December 2016 - June 2017</div>
          <div className="description">
            <h4>Full Stack .NET Software Developer</h4>
            <p>I developed web solutions for vacation exchange using various technologies. I used Microsoft tools, Opera PMS, and API Services.</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>DA Soluciones IT</h3>
        <div className="row">
          <div className="date">February 2016 - November 2016</div>
          <div className="description">
            <h4>Full Stack .NET Software Developer</h4>
            <p>I worked on web and desktop projects, such as <b><a href="https://www.facebook.com/factigo/" target="_blank">Factigo</a></b>, web scrapping, and Marketing tools.</p>
          </div>
        </div>
      </Job>
      <Job>
        <h3>GeniusSoft</h3>
        <div className="row">
          <div className="date">May 2014 - January 2016</div>
          <div className="description">
            <h4>.NET Developer</h4>
            <p>I contributed to the development of new features for the <b><a href="https://geniussoft.com.mx/" target="_blank">GENIUSlegal</a></b> software, such as modules for time and billing, accounting, and intranet/extranet. I also participated in the project of expanding the software to the Colombian market.</p>
          </div>
        </div>
        <div className="row">
          <div className="date">December 2013 - April 2014</div>
          <div className="description">
            <h4>Intern .NET Developer</h4>
            <p>I assisted clients with the configuration, and troubleshooting of the <b><a href="https://geniussoft.com.mx/" target="_blank">GENIUSlegal</a></b> software, a comprehensive solution for legal document management and automation.</p>
          </div>
        </div>
      </Job>
    </>
  )
};

export default Jobs;
