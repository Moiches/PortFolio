import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Education() {
    return (
        <Container id="education">
            <h2>Education</h2>
            <div className="education">
                <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                <div className="project">
                    <header>
                    <a href="https://platzi.com/" target="_blank" rel="noreferrer">
                    <h3>Platzi</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>Present</h6>
                    <h5> Technical Skills</h5>
                    <p>Online educational platform, where I learn new technologies and keep myself updated in other technologies, taking the courses available there.</p>
                    </div>
                    <footer>
                    {/* <ul className="tech-list">
                        <li>AWS Lambda</li>
                        <li>API Gateway</li>
                        <li>DynamoDB</li>
                    </ul> */}
                    </footer>
                </div>
                </ScrollAnimation>
            </div>

            {/* Technician Degree */}

            <ScrollAnimation animateIn="fadeInLeft">
                <div className="education">
                    <header>
                    <a href="https://www.cecyt1.ipn.mx/" target="_blank" rel="noreferrer">
                    <h3>CECyT 1 "Gonzalo Vazquez Vela"</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>2015-2018</h6>
                    <h5> Extracurricular Activities</h5>
                    <p>I was a volunteer tutor teaching topics such as Java programing, C programing, Calculus etc.</p>
                    </div>
                    <footer>
                    <ul className="tech-list">
                        <li>Java</li>
                        <li>React</li>
                        <li>MySQL</li>
                        <li>Math tutor</li>
                        <li>JavaScript</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>

                {/* Barcherlors Degree Bionics */}
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="education">
                    <header>
                    <a href="https://www.upiita.ipn.mx/" target="_blank" rel="noreferrer">
                    <h3>Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas, IPN</h3>
                    </a>
                    </header>
                    <div className="body">
                    <h6>2019-2024</h6>
                    <h5> Coursework</h5>
                    
                    <p>Data Structures and Algorithms; Operating Systems; Computer Security; Software Testing; Advanced
                    Networking; Big Data Analytics, Pattern recognition,Systems modeling and control.</p>
                    <br />
                    <p>Experience with Machine Learning and Artifical Inteligence algorithms such as Ant Colony Optimization (ACO). Proficiency in libraries such as Pandas, TensorFlow,OpenCV, Numpy, ScikitLearn.</p>
                    </div> 
                    <footer>
                    <ul className="tech-list">
                        <li>Python</li>
                        <li>ScikitLearn</li>
                        <li>TensorFlow</li>
                        <li>MongoDB</li>
                        <li>Matlab</li>
                    </ul>
                    </footer>
                </div>
                </ScrollAnimation>
        </Container>
    )
}