const About = () => {
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-start justify-center w-full h-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Hi, I'm Nyi Nyi Soe — a full-stack developer with a focus on building
          reliable and efficient web and mobile applications. I enjoy solving
          technical challenges and turning ideas into working solutions. Right
          now, I’m exploring new technologies and working on personal projects
          to keep improving my skills. If you have a project or idea in mind,
          feel free to reach out — I’d be happy to chat.
        </p>
      </div>
    </div>
  );
};
export default About;
