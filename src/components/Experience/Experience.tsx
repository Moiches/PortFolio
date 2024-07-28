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
                    <h6>January 2022 - July 2022</h6>
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
                    <h6>Feb 2023 - Feb 2024</h6>
                    <h5> Activities</h5>
                    <p>Use of internal bank technologies for backend development in transactions, participation in relevant projects such as the safeguarding of documents in SEIRI, which is the bank's document database.
                    </p>
                    </div>
                    <footer>
                    <ul className="tech-list">
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>APX</li>
                        <li>JBPM</li>
                        <li>SCRUM Developer</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>

                {/* Barcherlors Degree Bionics */}
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="experience">
                    <header>
                    <a href="https://www.upiita.ipn.mx/" target="_blank" rel="noreferrer">
                    <h3>Backend developer, Junta de Andalucia</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>January 2022 - January 2023 </h6>
                    <h5> Coursework</h5>
                    <ol>
                        <li>RESTFull web services, microservices coding using Spring Boot, JPA, Java EE</li>
                        <li>Integration of Docker into development workflows, enabling greater portability and consistency across different environments.</li>
                        <li>Use of Angular 17 and React</li>
                        <li>Database usage in Oracle/Mysql/Potsgress</li>
                        <li>Devops tools such as Jenkis, Sonar</li>
                        <li>Unit testing</li>
                        <li>Code versioning through GitLab and Github</li>
                    </ol>
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