import { useEffect } from "react";
import { useState } from "react";
import { Scrollchor, swing } from "react-scrollchor";

const NavLinks = ({ onClick, width }) => {
  const [menuColor, setMenuColor] = useState("white");

  const animateConfig = {
    duration: 400,
    easing: swing,
  };

  const listenScrollEvent = (e) => {
    if (width > 768) {
      window.scrollY > 1590 ? setMenuColor("black") : setMenuColor("white");
    }
  };

  useEffect(() => {
    if (width > 768 && window.scrollY > 1626) {
      setMenuColor("black");
    }
    window.addEventListener("scroll", listenScrollEvent);
  }, [width]);

  return (
    <>
      <ul>
        <li>
          <Scrollchor
            style={{ color: menuColor }}
            to='#home'
            beforeAnimate={onClick}
            animate={animateConfig}
          >
            HOME
          </Scrollchor>
        </li>
        <li>
          <Scrollchor
            style={{ color: menuColor }}
            to='#about'
            beforeAnimate={onClick}
            animate={animateConfig}
          >
            ABOUT
          </Scrollchor>
        </li>
        <li>
          <Scrollchor
            style={{ color: menuColor }}
            to='#resume'
            beforeAnimate={onClick}
            animate={animateConfig}
          >
            RESUME
          </Scrollchor>
        </li>
        <li>
          <Scrollchor
            style={{ color: menuColor }}
            to='#projects'
            beforeAnimate={onClick}
            animate={animateConfig}
          >
            PROJECTS
          </Scrollchor>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
