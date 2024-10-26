/* eslint-disable no-unused-vars */
import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center ">
          {/* Logo section */}
          <div className="text-2xl flex items-center justify-center cursor-pointer gap-2 font-bold py-8">
            <MdComputer />
            <p className="text-secondory"> TechA </p>
          </div>

          {/* Menu Section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-primary
                      font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* icon section  */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <CiSearch />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary  px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* mobile menu  */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              console.log("Menu button clicked");
              setOpen(!open);
            }}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
