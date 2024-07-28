import { Container } from "./styles";
import Me from "../../assets/me.png";
import python from "../../assets/python.png";
import sclearn from "../../assets/SCLearn.svg";
import java from "../../assets/Java2.svg";
import pandas from "../../assets/pandas.svg";
import tensorflow from "../../assets/tensorflow.svg";
import fastapi from "../../assets/fastapi.svg";
import mongo from "../../assets/mongodb-icon.svg";
import pytorch from "../../assets/pytorch-icon.svg";
import d3 from "../../assets/d3.png";
import pbi from "../../assets/New_Power_BI_Logo.svg";
import spring from "../../assets/springio-icon.svg";
import mysql from "../../assets/mysql-icon.svg";
import postgress from "../../assets/postgresql.svg";
import oracle from "../../assets/oracle-icon.svg";
import qlik from "../../assets/qlik-svgrepo-com.svg";
import ydata from "../../assets/ydata-profiling_red.png";
import tableau from "../../assets/tableau-software.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import r from "../../assets/R_logo.svg";
import git from "../../assets/Git-Icon-1788C.svg";
import gcloud from "../../assets/google-cloud-1.svg";
import jupyter from "../../assets/jupyter-svgrepo-com.svg";
import docker from "../../assets/docker-svgrepo-com.svg";
import bash from "../../assets/bash-icon-svgrepo-com.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          As an avid tech enthusiast with a flair for creativity and pragmatism, I thrive on tackling complex challenges and delivering effective solutions. My journey in the tech world has been marked by a relentless pursuit of knowledge and a knack for problem-solving.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I have a strong interest in big bata, machine learning, deep learning, and Linux operating systems. My interest in the area of data is because I really like mathematics, especially probability and statistics. I think they are great tools because when applied properly, they can provide valuable information that was not very evident at first. Outside Software Development world I also enjoy PC hardware and cooking sometimes.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I am currently looking for work, open to learning new skills, and in my spare time, I’m developing personal projects with the technologies I like.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={sclearn} alt="ScikitLearn" className="large-svg" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={pandas} alt="pandas" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={tensorflow} alt="tensorflow" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={fastapi} alt="fastapi" />
            </ScrollAnimation>
          </div>  
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mongo} alt="mongo" />
            </ScrollAnimation>
          </div>     
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={spring} alt="spring" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div> 
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={postgress} alt="postgress" />
            </ScrollAnimation>
          </div>     
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={oracle} alt="oracle" />
            </ScrollAnimation>
          </div>  
        </div>
        
        
        {/* I want to learn */}
        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Tecnologies I want to learn</h3>
        </ScrollAnimation>
        <div className="hard-skills">
         <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={pytorch} alt="pytorch" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={d3} alt="d3" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={pbi} alt="pbi" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={qlik} alt="qliksense" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={ydata} alt="ydata" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={tableau} alt="tableau" />
            </ScrollAnimation>
          </div>
        </div>

        {/* I have worked with */}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Tecnologies I have worked with</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={nodeIcon} alt="node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={reactIcon} alt="react" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={typescriptIcon} alt="typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={r} alt="R" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={git} alt="git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={gcloud} alt="google-cloud" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jupyter} alt="jupyter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={bash} alt="bash" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={docker} alt="docker" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Me} alt="Moises Cercas" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
