import ProjectItem from "./ProjectItem";

import { projects } from "../data/projects";

const ProjectList = () => {
  return (
    <div>
      {projects.map((p, i) => (
        <ProjectItem
          key={i}
          url={p.url}
          title={p.title}
          description={p.desctiption}
          img={p.img}
        />
      ))}
    </div>
  );
};

export default ProjectList;
