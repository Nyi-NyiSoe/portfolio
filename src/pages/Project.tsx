import ProjectCard from "../common/ProjectCard";

const Project = () => {

  const projects = [
    {
      id: 1,
      image: "src/assets/sonique.jpg",
      title: "Sonique",
      description:
        "Sonique is a music player application that allows users to play, pause, and manage their music library. It features a sleek design and supports various audio formats.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      onViewProject: () =>
        window.open("https://github.com/Nyi-NyiSoe/fe-sonique", "_blank")
    },
    {
      id: 2,
      image:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2Fc662b879687b1aa47bda067af1cf9f66.1000x1000x1.png",
      title: "Sample Project",
      description:
        "This is a sample project description.Amet ut eu duis nisi non irure magna officia ut ad. Aliquip minim nisi excepteur et tempor dolore velit eiusmod deserunt id ea. Deserunt eiusmod ea cillum quis. Cupidatat elit duis eiusmod esse reprehenderit labore. Sit dolore dolor nulla dolor anim nostrud duis dolore ad incididunt. Non eiusmod mollit eiusmod velit eiusmod duis esse ipsum eu sit. Aliqua nostrud quis irure sunt incididunt sit non incididunt qui.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoVideoUrl: "/videos/kosui.mp4",
      onViewProject: () => window.open("https://example.com", "_blank")
    }
  ]
  return (
    <div className="min-h-screen bg-black p-8 md:p-12 animate-in transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            demoVideoUrl={project.demoVideoUrl}
            onViewProject={project.onViewProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
