import shoeImage from "../img/shoe-webshop.jpg";
import HakimLivs from "../img/hakim-livs.jpg";

export const projects = [
  {
    title: "Shoe Webshop",
    desctiption:
      "A shoe webshop build with Java and JavaFx, with a MySql database",
    url: "https://github.com/wakelesstuna/Best_shoe_webshop_ever",
    img: shoeImage,
  },
  {
    title: "Hakim Livs",
    desctiption:
      "A fullstack application, building a webshop for Hakim Livs. We worked as a team of 7 developers and 3 testers, with 1 product owner. We used Spring boot with Java as a backen Rest sever. We implemented spring security to secure our application, and we used RabitMQ as messagening between our backend serivces. We also implemented a mail service with the Twillio mailsender api. (takes about 1 min for the backend to wake up)",
    url: "https://www.hakimlivs.store/",
    img: HakimLivs,
  },
];
