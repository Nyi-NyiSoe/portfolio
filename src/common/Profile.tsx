import { Github, Linkedin, Mail } from "lucide-react";

const Profile = () => {
  
  return (
    <div className="group bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-80 after:h-80 after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 flex justify-center items-center mb-6 ring-4 ring-blue-500/20">
          <img
            src="https://avatars.githubusercontent.com/u/60168596?v=4"
            className="w-full h-full object-cover"
            alt="profile image"
          />
        </div>

        <a
          href="https://github.com/Nyi-NyiSoe"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center group"
        >
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:scale-110">
            Nyi Nyi Soe
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Full Stack Developer</p>
        </a>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/Nyi-NyiSoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nyi-nyi-soe-960a95341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:nyinyisoe.dev@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
