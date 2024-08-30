import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
    return (
        <Container id="experience">
            <h2>Experience</h2>
            <div className="experience">
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="experiences">
                    <header>
                    <a href="https://www.cic.ipn.mx/" target="_blank" rel="noreferrer">
                    <h3>Intern CIC IPN</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>July 2022 - January 2023</h6>
                    <h5> Technical Skills</h5>
                    <p>Assist in developing two types of neural networks developed by postgraduate students: an LSTM and a quantum LSTM. Both were trained with time series data from financial databases, aiming to compare their effectiveness using cost function graphs for both training and test data.</p>
                    <br />
                    <p>Help a postgraduate student generate an EEG signal database to train a fruit classifier, serving as the test subject.</p>

                    </div>
                    <footer>
                    <ul className="tech-list">
                        <li>Pytorch</li>
                        <li>DynamoDB</li>
                        <li>Math Skills</li>
                        <li>Qiskit</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>
            </div>

            {/* Technician Degree */}

            <ScrollAnimation animateIn="fadeInLeft">
                <div className="experience">
                    <header>
                    <a href="https://www.bbva.mx/" target="_blank" rel="noreferrer">
                    <h3>Backend Developer BBVA </h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>February 2023 - June 2024</h6>
                    <h5> Technical Skills</h5>
                    <p>
                    Developed custom backend solutions in Java using
Spring Framework, focusing on relational database
management in SQL.
Actively contributed to the ”Youngsters” project by integrating the LinkCard account service into the app, enhancing functionality and user experience.
Collaborated in a Scrum team for the planning, implementation, and deployment of features, using Jenkins
for continuous integration and Docker for environment
management.
Participated in document safeguarding in SEIRI, optimizing the bank’s document database to ensure integrity
and availability
                    </p>
                    </div>
                    <footer>
                    <ul className="tech-list">
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>APX</li>
                        <li>JBPM</li>
                        <li>SCRUM Developer</li>
                        <li>Jenkins</li>
                        <li>Sonar</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>

                {/* Barcherlors Degree Bionics */}
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="experience">
                    <header>
                    <a href="https://www.juntadeandalucia.es/" target="_blank" rel="noreferrer">
                    <h3>Backend developer, Junta de Andalucia</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>January 2021 - May 2022 </h6>
                    <h5>Technical Skills</h5>
                    <p>
                    Led the development of microservices and web services
(RESTful/SOAP) using Spring Framework, enabling the
modularization and scalability of government applications.
Maintained and optimized web pages to ensure high
performance and user satisfaction, implementing agile
development practices.
Implemented continuous integration solutions with
Jenkins and code quality control with SonarQube.
Deployed applications using Docker, ensuring consistent and efficient environments.
Managed databases in MySQL, Oracle, PostgreSQL, and
MongoDB, ensuring data integrity and availability
                    </p>
                    </div> 
                    <footer>
                    <ul className="tech-list">
                        <li>Java EE</li>
                        <li>Spring Framework</li>
                        <li>JPA</li>
                        <li>Maven</li>
                        <li>Docker</li>
                        <li>Jenkins</li>
                        <li>Sonar</li>
                        <li>SCRUM Developer</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>
        </Container>
    )
}