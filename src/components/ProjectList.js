import ProjectItem from "./ProjectItem";
import { url } from "../data/url";

const ProjectList = () => {
  return (
    <div>
      <ProjectItem
        url={url.shoeWebShop}
        title='Shoe Webshop'
        description='A shoe webshop build with Java and JavaFx, with a SQL database'
      />
    </div>
  );
};

export default ProjectList;
