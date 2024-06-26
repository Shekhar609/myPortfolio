
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
//  import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Stock market prediction",
      description: "Using machine leaning to preduct price",
      imgUrl: projImg1,
      link:"https://github.com/Shekhar609/Stock-market-prediction",
      
    },
    {
      title: "Thyroid disease prediction",
      description: "Using Machinel learning to price prediction ",
      imgUrl: projImg2,
      link:"https://github.com/Shekhar609/Thyroid-disease-prediction/blob/main/Thyroid%20disease%20prediction-checkpoint.ipynb",
    },
    {
      title: "Job-portal",
      description: "Design & Development",
      imgUrl: projImg3,
      link:"https://github.com/Shekhar609/House-price-prediction",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col >
            
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills justify-content-center align-itmes-center"  id="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Resume</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {projects.map((project,index)=>{
                            <ProjectCard key={index}  {...project} />
                        })}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Content for Tab 3</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
             </Col>
          </Row>
       </Container>
       <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}

export default Projects;
