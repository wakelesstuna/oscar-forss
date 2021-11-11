import styled from "styled-components";
import { openUrlInNewTab } from "../utils/utils";

const ProjectItem = ({ title, description, url, img }) => {
  return (
    <Project>
      <div className='projectWrapper'>
        <h3>{title}</h3>
        <div className='imgContainer'>
          <img src={img} alt='project' />
          <div className='fade' onClick={() => openUrlInNewTab(url)}></div>
        </div>
        <div className='textContainer'>
          <p>{description}</p>
        </div>
      </div>
    </Project>
  );
};

const Project = styled.div`
  .projectWrapper {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    color: #313131;
    font-size: 2rem;
    padding: 1rem 0rem;
    text-align: center;
  }
  .imgContainer {
    position: relative;
    width: 300px;
    height: 200px;
    cursor: pointer;
    img {
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .fade {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0000006e;
      z-index: 10;
      opacity: 0;
      transition: all 250ms ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  .textContainer {
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    p {
      color: #313131;
      line-height: 1.8rem;
      letter-spacing: 1px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

export default ProjectItem;
