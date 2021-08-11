import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import styled from "styled-components";
import { url } from "../data/url";
import { openUrlInNewTab } from "../utils/utils";

const SocialIcons = ({ hoverColor, color }) => {
  const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    svg {
      margin: 0 1rem;
      font-size: 2rem;
      cursor: pointer;
      transition: all 250ms ease-in-out;
      color: ${color ? color : "#fff"};
      &:hover {
        color: ${hoverColor ? hoverColor : "#02df02"};
      }
    }
  `;

  return (
    <IconContainer>
      <FaLinkedinIn onClick={() => openUrlInNewTab(url.linkedIn)} />
      <IoMdSchool onClick={() => openUrlInNewTab(url.school)} />
      <FaGithub onClick={() => openUrlInNewTab(url.gitHub)} />
    </IconContainer>
  );
};

export default SocialIcons;
