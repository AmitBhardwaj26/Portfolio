import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

import codechefbackened from "../../Assets/Projects/codechefbackend.png";
import Todolist from "../../Assets/Projects/To-DoList.png";
import Googlekeeper from "../../Assets/Projects/Googlekeeper.png";

import editor from "../../Assets/Projects/codeEditor.png";

import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codechefbackened}
              isBlog={false}
              title="Codechef MMMUT Website"
              description="Online Certificate Creation and Verification System in which Admin can create the unique key using data of user , the data can be modified or can be deleted by the Admin in future"
              ghLink="https://github.com/AmitBhardwaj26/Codechef_MMMUT"
              demoLink="https://codechef-mmmut-chapter.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Task-Schedule"
              description="Complete todo list app with custom list creation and database storage. User can create, update, delete and mark todo as completed.It uses the concept of REST API and CRUD operations."
              ghLink="https://github.com/AmitBhardwaj26/Schedule-Tasks"
              demoLink="https://schedule-tasks.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Googlekeeper}
              isBlog={false}
              title="Google Keeper Clone"
              description="Google Keeper Clone is a clone of Google Keep, a note-taking app. It is built using React.js and Material UI. It is a simple note-taking app where you can add, delete and edit notes. It is a responsive web app."
              ghLink="https://github.com/AmitBhardwaj26/Google-Keeper"
              demoLink="https://amitbhardwaj26.github.io/Google-Keeper/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
