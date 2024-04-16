import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/aboute",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
 
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {
  const [isSidebar, setIsSideBar] = useState(false);
  const handleSidebar = () => {
    setIsSideBar(!isSidebar);
  };

  return (
    <div className="h-16 m-2 flex justify-between items-center bg-gray-200 rounded-lg py-4 px-6">
      <div>
        <Link to={"/"} className="text-yellow-900 text-4xl">
          <FaReact />
        </Link>
      </div>
      <div
        className={`flex md:justify-end space-x-4 ${
          isSidebar
            ? "max-md:absolute top-20 rounded-md  right-2 left-[50%] t max-md:flex-col  max-md:bg-slate-500"
            : "max-md:hidden"
        }`}
      >
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`text-black hover:text-gray-500 ${
              !isSidebar ? "font-bold text-yellow-900" : ""
            } ${isSidebar ? "mb-4 font-extrabold " : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden" onClick={handleSidebar}>
        {isSidebar ? <HiX /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
