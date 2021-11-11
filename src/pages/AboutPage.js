import styled from "styled-components";
import ResumeButton from "../components/ResumeButton";
import { FaFileDownload } from "react-icons/fa";
import { aboutMe } from "../data/aboutMe";

const AboutPage = () => {
  const mailTo = `mailto:${aboutMe.email}`;

  return (
    <About id='about'>
      <div className='imageWrapper'>
        <img src={aboutMe.profilePic} alt='profile' />
      </div>
      <div className='aboutWrapper'>
        <div className='aboutText'>
          <h3>About me</h3>
          <p>{aboutMe.description}</p>
        </div>
        <div className='contactInfo'>
          <h3>Contact</h3>
          <p>{aboutMe.name}</p>
          <p>{aboutMe.contact.city}</p>
          <p>{aboutMe.contact.phone}</p>
          <p>
            <a href={mailTo}>
              <span>{aboutMe.email}</span>
            </a>
          </p>
        </div>
        <div className='btnContainer'>
          <ResumeButton text='Download Resume' Icon={<FaFileDownload />} />
        </div>
      </div>
    </About>
  );
};

const About = styled.div`
  background-color: #464646;
  width: 100%;
  padding: 8rem 1.6rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .imageWrapper {
    width: 300px;
    height: 300px;
    margin-right: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 99999px;
    }
  }

  .aboutWrapper {
    max-width: 600px;
  }
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
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .imageWrapper {
      width: 200px;
      height: 200px;
      margin: 0;
      margin-bottom: 2rem;
    }
    .btnContainer {
      justify-content: center;
    }
  }
`;

export default AboutPage;
