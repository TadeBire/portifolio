import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Project 1"
        description="This is a description for project 1"
        image="/assets/images/project1.jpg"
      />
      <ProjectCard
        title="Project 2"
        description="This is a description for project 2"
        image="/assets/images/project2.jpg"
      />
      <ProjectCard
        title="Project 3"
        description="This is a description for project 3"
        image="/assets/images/project3.jpg"
      />
    </div>
  );
};

export default Projects;
