import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Krishna</h1>
      </div>
      <div className="hidden md:flex">
        {links.map(({ link, id }) => {
          const linkUrl = `/${link}`;
          const isActive = pathname === linkUrl;

          return (
            <Link
              key={id}
              className={
                isActive
                  ? "text-white"
                  : "" +
                    "px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 font-medium"
              }
              href={linkUrl}
            >
              {link}
            </Link>
          );
        })}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b to-gray-500 from-black">
          {links.map(({ link, id }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={id}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
