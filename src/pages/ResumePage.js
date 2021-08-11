import styled from "styled-components";
import ResumeList from "../components/ResumeList";
import { education } from "../data/education";

const ResumePage = () => {
  const items = [];
  return (
    <Resume id='resume'>
      <ResumeList title='education' items={education} />
      <div className='listLine'></div>
      <ResumeList title='skills' items={items} />
      <div className='listLine'></div>
    </Resume>
  );
};

const Resume = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin: auto;
  background-color: #ffffff;
  .listLine {
    width: 70%;
    margin: auto;
    margin-top: 2rem;
    height: 1px;
    background-color: #cac9c9;
  }
`;

export default ResumePage;
