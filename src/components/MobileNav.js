import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("white");

  const openMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const listenScrollEvent = (e) => {
    window.scrollY > 1615 ? setMenuColor("black") : setMenuColor("white");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const Nav = styled.nav`
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 5;
    .burger {
      display: flex;
      font-size: 3rem;
      color: ${menuColor};
      z-index: 10;
      cursor: pointer;
      transition: all 250ms ease-in-out;
    }
    .burger:hover {
      color: #cc5200;
    }
    .menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 80%;
      height: 100%;
      z-index: 8;
      background-color: #555555;
    }
    .linkContainer {
      width: 100%;
      height: 100%;
      z-index: 11;
      padding-top: 4rem;
      padding-left: 2rem;
      /* to style navlinks */
      ul {
        list-style: none;
        li {
          padding-bottom: 0.4rem;
          width: fit-content;
        }
        li a {
          text-decoration: none;
          cursor: pointer;
          transition: all 250ms ease-in-out;
          letter-spacing: 4px;
          &:hover {
            color: #cc5200;
          }
        }
      }
    }
    .fade {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 6;
      background-color: #00000081;
    }
    .close {
      position: fixed;
      top: 1rem;
      right: 1rem;
      font-size: 3rem;
      color: #fff;
      z-index: 10;
      cursor: pointer;
      transition: all 250ms ease-in-out;
      &:hover {
        color: #cc5200;
      }
    }
  `;

  return (
    <Nav>
      {isOpen ? (
        <>
          <div className='menu'>
            <IoClose onClick={openMenu} className='close' />
            <div className='linkContainer'>
              <NavLinks onClick={closeMenu} />
            </div>
          </div>
          <div className='fade'></div>
        </>
      ) : (
        <HiMenu onClick={openMenu} className='burger' />
      )}
    </Nav>
  );
};

export default MobileNav;
