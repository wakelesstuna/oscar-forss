import { HiOutlineDatabase } from "react-icons/hi";
import JavaIcon from "../img/java.png";
import JavaScriptIcon from "../img/js.png";
import KotlinIcon from "../img/kotlin.png";
import GitIcon from "../img/git-icon.png";
import SpringBootIcon from "../img/spring-boot.png";
import ReactIcon from "../img/react-icon.png";

export const tech = [
  {
    id: 1,
    title: "Java",
    icon: <img src={JavaIcon} alt='java' />,
    description: "My main language from my education. Very good understanding",
  },
  {
    id: 6,
    title: "ReactJS",
    icon: <img src={ReactIcon} alt='react js' />,
    description: (
      <p>
        Good understanding of the language, used alot in my side projects i been
        doing on the side of the education. Also used <span>Tailwind css</span>{" "}
        a lot with react
      </p>
    ),
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <img src={JavaScriptIcon} alt='javascript' />,
    description:
      "Good understanding of the language, used in our frontend projects",
  },
  {
    id: 3,
    title: "Kotlin",
    icon: <img src={KotlinIcon} alt='kotlin' />,
    description:
      "Basic understanding of the language, used in advent of code 2020.",
  },
  {
    id: 4,
    title: "Git",
    icon: <img src={GitIcon} alt='git' />,
    description:
      "Using in pretty mutch ever projekt for source controll, good understanding",
  },
  {
    id: 5,
    title: "Spring Boot",
    icon: <img src={SpringBootIcon} alt='spring boot' />,
    description:
      "Pretty good understanding, have worked with spring web, spring web flux and spring security. Build both Rest and graphql api with the help of spring.",
  },
  {
    id: 10,
    title: "Database",
    icon: <HiOutlineDatabase />,
    description:
      "Mostly worked with relation databases as MySQL and postgres, some work with mongo db",
  },
];
