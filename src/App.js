import useWindowDimensions from "./components/useWindowDimensions";

import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

function App() {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width < 768 ? <MobileNav /> : <NavBar width={width} />}
      <HomePage />
      <AboutPage />
      <ResumePage />
      <ProjectPage />
      <Footer />
      {/* <ProjectInfoPage /> */}
    </div>
  );
}

export default App;
