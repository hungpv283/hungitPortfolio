import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import HairSalon from "../../Assets/Projects/hairsalonFE.png";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Mommilk from "../../Assets/Projects/Mommilk.png";
import Quizlingo from "../../Assets/Projects/quizlingo.png";
import EVCare from "../../Assets/Projects/evcare.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Mommilk}
              title="MomMilk Front-End Project"
              description="MomMilk is an e-commerce platform for pregnant mothers and babies to search, compare, and buy milk products easily. Built with React.js, Vite.js, C#, and API Swagger, it uses MySQL and Firebase for data management, with secure JWT authentication. Deployed on Firebase and Azure, MomMilk ensures a seamless and reliable shopping experience."
              ghLink="https://github.com/hungpv283/MomMilk88_FE"
              demoLink="https://suame88-f056d.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/hungpv283/hungitPortfolio"
              demoLink="hungit-portfolio.vercel.app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={HairSalon}
              title="HairSalonBooking Front-End Project"
              description="Our platform simplifies haircut bookings with personalized service and stylist options, customer reviews, secure payments, and staff management tools. Built with React.js, Vite.js, Node.js, and Express.js, it utilizes MySQL and PostgreSQL, secured with JWT, and is deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/HairSalonBooking/HairSalonBooking_FE"
              demoLink="https://hair-salon-vjp.azurewebsites.net/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Quizlingo}
              title="QuizLingo Front-end Project"
              description="This is a project for managing quizzes. The project is built using NodeJs, ReactJs, MongoDB and using AntDesign UI .The project is deployed on Netlify and Render."
              ghLink="https://github.com/devbaoo/FE_Quizlingo"
              demoLink="https://quizlingo.netlify.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={EVCare}
              title="EVCare Front-End Project"
              description="This is an electric vehicle inspection scheduling project. The project is built using NodeJs, ReactJs, MongoDB and AntDesign UI. The project is deployed on Netlify and has a domain name."
              ghLink="https://github.com/devbaoo/WDP301-EVCare-FE"
              demoLink="https://evcare.systems/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
