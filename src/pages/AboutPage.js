import styled from "styled-components";
import ResumeButton from "../components/ResumeButton";
import { FaFileDownload } from "react-icons/fa";

const AboutPage = () => {
  return (
    <About id='about'>
      <div className='aboutText'>
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
          similique distinctio voluptates ab neque eos eveniet dolor fuga beatae
          minus aut provident et aliquam, molestiae, hic alias? Laborum a
          reprehenderit ipsum mollitia, deserunt expedita quas amet non alias in
          voluptates eaque tempore iure debitis?
        </p>
      </div>
      <div className='contactInfo'>
        <h3>Contact</h3>
        <p>Oscar Forss</p>
        <p>Stockholm, Sweden</p>
        <p>+46 707 48 27 55</p>
        <p>
          <a href='mailto:oscar.forss.1@gmail.com'>
            <span>oscar.forss.1@gmail.com</span>
          </a>
        </p>
      </div>
      <div className='btnContainer'>
        <ResumeButton text='Download Resume' Icon={<FaFileDownload />} />
      </div>
    </About>
  );
};

const About = styled.div`
  background-color: #464646;
  width: 100%;
  padding: 8rem 1.6rem;
  margin: auto;
  h3,
  p {
  }
  .aboutText {
    margin-bottom: 2rem;

    h3,
    p {
      text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);
    }
    h3 {
      font-size: 1.7rem;
      padding: 0.6rem 0rem;
    }
    p {
      line-height: 1.8rem;
      color: #c7c7c7;
    }
  }
  .contactInfo {
    h3,
    p {
      text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);
    }
    h3 {
      font-size: 1.7rem;
      padding: 0.6rem 0rem;
    }
    p {
      line-height: 2rem;
      color: #c7c7c7;
      span {
        color: #fff;
      }
    }
  }
  .btnContainer {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AboutPage;
