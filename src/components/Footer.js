import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Scrollchor, swing } from "react-scrollchor";

const Footer = () => {
  return (
    <Foot>
      <Scrollchor to='#home'>
        <div className='whiteArrow'></div>
        <IoIosArrowDropupCircle className='backArrow' />
      </Scrollchor>
      <div className='infoContainer'>
        <div>
          <SocialIcons color='grey' hoverColor='#cc5200' />
        </div>
        <div className='centerShadow'>
          <p>oscar.forss.1@gmail.com</p>
        </div>
        <div className='centerShadow'>
          <AiOutlineCopyrightCircle />
          <p> Copy right 2020 Oscar Forss</p>
        </div>
      </div>
    </Foot>
  );
};

const Foot = styled.footer`
  position: relative;
  background-color: #2c2c2c;
  min-height: 300px;
  margin-top: 6rem;
  z-index: 1;
  .backArrow {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    color: grey;
    font-size: 4rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      color: #cc5200;
    }
  }
  .whiteArrow {
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .infoContainer {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
  }

  .centerShadow {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;
    /* text-shadow: 0px 1px 3px rgb(0 0 0 / 80%); */
    p,
    svg {
      color: #b9b9b9;
    }
    svg {
      color: #b9b9b9;
      font-size: 1.1rem;
      margin-right: 0.4rem;
      /* add shadow to svg */
      /* -webkit-filter: drop-shadow(0px 1px 3px rgb(0 0 0 / 80%));
      filter: drop-shadow(0px 1px 3px rgb(0 0 0 / 80%)); */
    }
  }
`;

export default Footer;
