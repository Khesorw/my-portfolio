
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faFile,  faEnvelope, faUserAstronaut  } from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import yodaImage from './www/pictures/babyYoda.jpg';



function App() {
  
  const projText = '</>';


  const [about, resume, contact] = [<FontAwesomeIcon icon={faCircleExclamation} />, <FontAwesomeIcon icon={faFile} />, <FontAwesomeIcon icon={faEnvelope} />];
 
  return (

    <>
    <nav>
      <div className="container-fluid d-flex p-3 bg-dark text-white justify-content-between align-content-between">
        <p
          style={{
            fontFamily: "Pacifico, cursive",
            fontSize: "2em",
            margin: "0",
            marginInlineStart: "1em",
          }}
        >
          Hasib
        </p>

        <div className="d-flex gap-2">
          {/* <button className="btn btn-dark">About {about}</button>
          <button className="btn btn-dark">Projects {projText}</button> */}
            {/* <button className="btn btn-dark">Resume {resume}</button> */}
            <a
              href='/assets/resume/KhesrowYosufiRESUME.pdf'
              download='KhesrowYosufi.pdf'
              className='btn btn-dark pt-3'
            >Resume { resume}</a>
          {/* <button className="btn btn-dark">Contact {contact}</button> */}
        </div>

        <div className="d-flex">
          <a className="btn btn-dark w-auto" href='https://www.linkedin.com/in/hasib-yosufi-b18761263/' >
            {<FontAwesomeIcon icon={faLinkedin} size="2x" />}
          </a>
            <a className="btn btn-dark w-auto"
             href='https://github.com/Khesorw'>
            {<FontAwesomeIcon icon={faGithub} size="2x" />}
          </a>
        </div>
      </div>
    </nav>

    <main className="flex-grow-1">
      <div
        className="container-fluid text-center text-black d-block justify-content-center"
        style={{ backgroundColor: "#f7f8fa", padding: "2rem 0" }}
      >
        <div className="container pt-3">
          <h3 className="text-primary">
            {<FontAwesomeIcon icon={faUserAstronaut} />} About ME
          </h3>
        </div>

        <div>
          <img
            className="rounded-circle"
            src={yodaImage}
            alt="this is image"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          className="container text-bg-light w-75"
            style={{
            fontFamily: 'Pacifico',
            textAlign: "justify",
            lineHeight: "1.2",
            padding: "1.5rem",
            borderRadius: "8px",
            marginTop: "1.5rem",
          }}
        >
          <section>
            <p>
              Welcome to my portfolio! I am a{" "}
              <strong>Computer Engineering Technology graduate</strong> with a
              passion for software development and a diverse skill set spanning
              web applications, databases, machine learning, and project
              management. Here's a glimpse into my expertise and
              accomplishments:
            </p>
          </section>

          <section>
            <p>
              <strong>Web Development</strong>
              <br />
              - Proficient in developing <strong>web applications</strong> using{" "}
              <strong>Java (Jakarta EE 8)</strong>,{" "}
              <strong>ASP.NET Core MVC</strong>, and <strong>Razor Pages</strong>
              .<br />
              - Skilled in <strong>frontend interfacing and design</strong> with
              tools like <strong>Figma</strong> to create user-friendly and
              responsive interfaces.
              </p>
              
              <p>
                <strong>Database Management</strong><br />
                - Two years of hands-on experience with <strong>SQL databases</strong> such as <strong>PostgreSQL</strong> and <strong>NoSQL databases</strong> like <strong>MongoDB</strong>.<br />
                - Adept at designing, optimizing, and managing databases for scalable applications.
              </p>

              <p>
                <strong>Programming Expertise</strong><br />
                - Strong foundation in <strong>C programming</strong>, including advanced concepts like <strong>memory management</strong>, with certifications from LinkedIn Learning.<br />
                - Experience in <strong>Java memory management</strong> and working with tools like <strong>Maven</strong> and <strong>npm</strong> for efficient project management.
              </p>

              <p>
                <strong>Business Intelligence and Machine Learning</strong><br />
                - Completed projects in <strong>Business Intelligence (BI)</strong> using <strong>R</strong> and tools like <strong>Weka</strong> and <strong>RapidMiner</strong> for data analysis and predictive modeling.<br />
                - Skilled in leveraging machine learning techniques to extract actionable insights from data.
              </p>

              <p>
                <strong>Additional Skills</strong><br />
                - Familiarity with <strong>Linux OS</strong>, enhancing my ability to work in diverse development environments.<br />
                - Experienced in managing projects with <strong>Maven</strong> and <strong>npm</strong> for seamless build automation and dependency management.
              </p>

              <p>
                My portfolio showcases projects that reflect my dedication to learning and my ability to apply technical knowledge to solve real-world problems. Explore my work to see how I can bring innovation and efficiency to your team or project!
              </p>
          </section>
        </div>
      </div>
    </main>

    <footer>
      <div
        className="container-fluid d-flex bg-dark justify-content-between text-white text-center"
        style={{ height: "17vh" }}
      >
        <p className="ms-2 align-content-center">
          {new Date().getFullYear().toString()}, Khesrow's Resume
        </p>

        <div className="me-3 d-flex mt-5 align-content-center gap-3">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
            <a
              href='https://github.com/Khesorw'
            >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href='https://www.linkedin.com/in/hasib-yosufi-b18761263/'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  </>
  );
}

export default App;


   {/* <img
                          className="rounded-circle"
                          src={yodaImage}
                          alt="this is image"
                          style={{
                            width: '180px',
                            height: '180px',
                            objectFit: 'cover',
                          
                          }}
                        /> */}