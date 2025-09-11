const Education = () => {
  return (
    <div className="group bg-[#19191A]  rounded-2xl shadow-lg flex flex-col items-start justify-center w-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 before:absolute before:w-full before:h-full before:-left-40 before:-top-40 before:bg-blue-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-all before:duration-500 before:scale-0 before:hover:opacity-10 before:hover:scale-100 after:absolute after:w-full after:h-full after:-right-40 after:-bottom-40 after:bg-purple-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-all after:duration-500 after:scale-0 after:hover:opacity-10 after:hover:scale-100">
      <div>
        <div className="flex flex-col items-start justify-center w-full h-full p-8">
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Education
          </h1>
          <div className="space-y-6 ">
            <div className="group cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                Computer Science
              </h3>
              <p className="text-gray-400 text-sm">
                University of computer studies,Mandalay • 2017 - 2019
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Relevant coursework: Data Structures, Algorithms, Web
                Development
              </p>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                Online Certifications
              </h3>
              <p className="text-gray-400 text-sm">
                Various platforms • 2021 - Present
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Web Developer, Python Certification, Flutter Masterclass
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
