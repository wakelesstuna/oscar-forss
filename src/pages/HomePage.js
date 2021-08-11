import styled from "styled-components";
import SocialIcons from "../components/SocialIcons";
import bgImage from "../img/bg.jpg";
import { RiArrowDownCircleLine } from "react-icons/ri";
import { Scrollchor, swing } from "react-scrollchor";

const HomePage = () => {
  const animateConfig = {
    duration: 400,
    easing: swing,
  };
  return (
    <>
      <Home id='home'>
        <div className='mainText'>
          <h1>I'm Oscar Forss.</h1>
          <p>
            Java <span>developer student currently studying</span> my second
            year <span>at </span>
            Nackademin.<span> On my spare time im learning</span> React{" "}
            <span>as a frontend tool</span>
          </p>
          <div className='line'></div>
          <SocialIcons />
        </div>
        <Scrollchor to='#about' className='downArrow' animate={animateConfig}>
          <RiArrowDownCircleLine className='downArrow' />
        </Scrollchor>
      </Home>
    </>
  );
};

const Home = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .mainText {
    background: rgba(80, 80, 80, 0.788);
    border-radius: 25px;
    padding: 1.5rem 3rem;
    margin: 0 2rem;
    max-width: 634px;
    display: flex;
    flex-direction: column;
    h1,
    p {
      text-align: center;
      color: #e4e4e4;
      text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);
    }
    h1 {
      font-size: 3rem;
    }
    p {
      letter-spacing: 1px;
      margin-bottom: 1rem;
      color: #ffffff;
      span {
        color: #b8b8b8;
      }
    }
  }

  .line {
    height: 2px;
    width: 80%;
    margin: auto;
    border-radius: 2px;
    background-color: #2c2c2cc9;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 1px rgb(0 0 0 / 80%);
  }
  .downArrow {
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    transition: all 250ms ease-in-out;
    &:hover {
      color: #cc5200;
    }
  }
`;

export default HomePage;
