import styled from "styled-components";
import ResumeList from "../components/ResumeList";
import TechList from "../components/TechList";
import { education } from "../data/education";
import { tech } from "../data/tech";

const ResumePage = () => {
  return (
    <Resume id='resume'>
      <ResumeList title='education' items={education} />
      <div className='listLine'></div>
      <TechList title='skills' items={tech} />
      <div className='listLine'></div>
    </Resume>
  );
};

const Resume = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin: auto;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .listLine {
    width: 600px;
    margin: auto;
    margin-top: 2rem;
    height: 1px;
    background-color: #cac9c9;
  }

  @media only screen and (max-width: 768px) {
    .listLine {
      width: 80%;
    }
  }
`;

export default ResumePage;
