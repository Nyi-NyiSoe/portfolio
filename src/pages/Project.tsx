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
      demoVideoUrl: "/videos/sonique.mp4",
      onViewProject: () =>
        window.open("https://github.com/Nyi-NyiSoe/fe-sonique", "_blank"),
    },

    {
      id: 2,
      image: "src/assets/smb.jpg",
      title: "Sonique-mobile",
      description:
        "Sonique-mobile is the mobile version of the Sonique music player application. It offers a user-friendly interface optimized for mobile devices, allowing users to enjoy their music on the go.",
      technologies: ["Flutter"],
      demoVideoUrl: "/videos/sbm.mp4",
      onViewProject: () =>
        window.open("https://github.com/Nyi-NyiSoe/sonique-mobile", "_blank"),
    },
    {
      id: 3,
      image:
        "src/assets/hlf.png",
      title: "HLF Blood Transfusion",
      description:
        "A work project to help people who need blood, keeping track of patient condition info and donor condition. Works both offline and online to ensure accessibility and reliability.",
      technologies: ["Flutter", "SQLite", "Django"],
      demoVideoUrl: "",
      onViewProject: () => undefined,
    },
    {
      id: 4,
      image:
        "src/assets/sentria.png",
      title: "Sentria",
      description:
        "Sentria is a community-driven project to help in areas affected by natural disasters. Using real-time USGS fact checks, people can offer places to stay, WiFi, food, and other resources for those in need.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoVideoUrl: "",
      onViewProject: () => undefined,
    },
  ];
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
            underConstruction={project.id === 4} // Mark the second project as under construction
            workProject={project.id === 3} // Mark the first project as a work project
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
