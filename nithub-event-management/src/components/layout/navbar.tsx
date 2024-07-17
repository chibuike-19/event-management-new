import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg/navbar";
import { useState } from "react";
import { ArrowDownIcon } from "../../assets/svg/sidebar/svg-export";
import { adminData } from "../../data-helpers/sidebar-data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const router = useNavigate();

  return (
    <div className="flex sticky px-6 md:px-10 justify-between p-5 border-b-2 border-b-[#E7E7E7] mb-5">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row gap-3">
        <button className="text-[#099137] border-2 border-[#099137] sm:flex hidden px-5 rounded-3xl py-2">
          Create Plan
        </button>
        <div className="cursor-pointer">
          <div
            className="flex flex-row items-center nav rounded-full w-[150px] "
            style={{ backgroundColor: "#F8F7FA" }}
            onClick={handleClick}
          >
            <div className="bg-primary py-2 px-2 h-full flex m-1 rounded-full text-white bg-[#099137] text-center justify-center items-center">
              <p>GIZ</p>
            </div>

            <div className="relative w-[70%] flex flex-row justify-between">
              <button
                type="button"
                className="rounded-full text-black font-medium text-md "
              >
                <div className="flex flex-row justify-between pl-1 items-center">
                  <div>Giz</div>
                </div>
              </button>
              <div>
                <ArrowDownIcon color="#455A64" />
              </div>
              {isOpen && (
                <div className="absolute right-0 mt-12 w-40 shadow-md rounded-md bg-white">
                  <ul className="z-100 rounded-md overflow-hidden divide-y divide-gray-200 flex flex-col items-start">
                    {adminData.map((option) => (
                      <li
                        key={option.label}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {option.link ? ( // Check if link is provided
                          <Link
                            to={option.link}
                            className="text-sm leading-5 text-gray-900 focus:outline-none flex flex-row gap-5 justify-between"
                          >
                            <div>{option.icon}</div>
                            <div>{option.label}</div>
                          </Link>
                        ) : (
                          <span className="text-sm leading-5 text-gray-500">
                            {option.icon}
                            {option.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
