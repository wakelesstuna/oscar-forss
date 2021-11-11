import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import styled from "styled-components";
import { links } from "../data/links";
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
      <FaLinkedinIn onClick={() => openUrlInNewTab(links.linkedIn)} />
      <IoMdSchool onClick={() => openUrlInNewTab(links.school)} />
      <FaGithub onClick={() => openUrlInNewTab(links.gitHub)} />
    </IconContainer>
  );
};

export default SocialIcons;
