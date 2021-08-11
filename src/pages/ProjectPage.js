import styled from "styled-components";
import ProjectList from "../components/ProjectList";

const ProjectPage = () => {
  return (
    <Project id='projects'>
      <div className='titleContainer'>
        <h3>Some of my projects</h3>
      </div>
      <div className='projects'>
        <ProjectList />
      </div>
    </Project>
  );
};

const Project = styled.div`
  margin-top: 2rem;
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleContainer {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    h3 {
      color: black;
      font-style: italic;
      font-size: 1.4rem;
      font-family: "Libre Baskerville", serif;
    }
  }
`;

export default ProjectPage;
