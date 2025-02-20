import React from "react";
const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-[#19191A] p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-80">
        {/* Profile Image */}
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-600 flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/60168596?v=4"
            className="w-full h-full object-cover"
            alt="profile image"
          />
        </div>

        {/* Name with Styling */}
        <a
          href="https://github.com/Nyi-NyiSoe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="font-semibold text-xl text-blue-400 mt-3">
            Nyi Nyi Soe
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Home;
