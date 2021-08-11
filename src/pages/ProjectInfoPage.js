import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const ProjectInfoPage = () => {
  return (
    <ProjectInfo>
      <div className='navBar'>
        <BiArrowBack className='backArrow' />
      </div>
      <h1>project info page</h1>
    </ProjectInfo>
  );
};

const ProjectInfo = styled.nav`
  width: 100%;
  min-height: 200vh;
  .navBar {
    width: 100%;
    height: 5vh;
    position: fixed;
    border-bottom: 2px solid #b4b4b490;

    display: flex;
    align-items: center;
  }
  .backArrow {
    cursor: pointer;
    font-size: 1.6rem;
    margin-left: 1rem;
  }
`;

export default ProjectInfoPage;
