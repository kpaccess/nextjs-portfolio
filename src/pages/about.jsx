import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi there! I'm a front-end developer with experience in React and
          Redux. I'm passionate about creating user-friendly and visually
          appealing websites and applications.
        </p>

        <br />

        <p>
          In my free time, I enjoy exploring new technologies and learning new
          skills. I also enjoy hiking and spending time outdoors.
        </p>
      </div>
    </div>
  );
};

export default About;
