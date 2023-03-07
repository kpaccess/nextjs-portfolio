import Image from "next/image";

import project1 from "./assets/projects/project1.jpg";
import project2 from "./assets/projects/project2.jpg";
import project3 from "./assets/projects/project3.jpg";
import project4 from "./assets/projects/project4.jpg";
import project5 from "./assets/projects/project5.jpg";
import project6 from "./assets/projects/project6.jpg";
import project7 from "./assets/projects/project7.jpg";
import project8 from "./assets/projects/project8.jpg";
import project9 from "./assets/projects/project9.jpg";
import project10 from "./assets/projects/project10.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Telus",
    },
    {
      id: 2,
      src: project2,
      title: "BeliefNet",
    },
    {
      id: 3,
      src: project3,
      title: "Cisco",
    },
    {
      id: 4,
      src: project4,
      title: "CafeDilli",
    },
    {
      id: 5,
      src: project5,
      title: "cpa2biz",
    },
    {
      id: 6,
      src: project6,
      title: "FICO",
    },
    {
      id: 7,
      src: project7,
      title: "McAfee",
    },
    {
      id: 8,
      src: project8,
      title: "BlackArrow",
    },
    {
      id: 9,
      src: project9,
      title: "AT&T",
    },
    {
      id: 10,
      src: project10,
      title: "Freedom",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-40  pb-60">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="pb-4">
                <h2 className="text-2xl">{title}</h2>
              </div>
              <Image
                height={500}
                width={500}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
