import styled from "styled-components";
import NavLinks from "./NavLinks";

const NavBar = ({ width }) => {
  return (
    <Nav>
      <NavLinks width={width} />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 3vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  /* to style nav links */
  ul {
    display: flex;
    list-style: none;
    li a {
      text-decoration: none;
      color: #fff;
      padding: 0 1rem;
      letter-spacing: 4px;
      transition: all 250ms ease-in-out;
      &:hover {
        color: #cc5200;
      }
    }
  }
`;

export default NavBar;
