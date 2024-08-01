import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-service";
import { adminData, clientData } from "../../data-helpers/sidebar-data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { userData } = useAuth();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<null | string>(null)

  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1026);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let route = useLocation()

  return (
    <div
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      className="h-full w-[120px] mx-5 flex flex-col items-center fixed"
    >
      <ul className="list-none rounded-3xl px-3 py-8 flex flex-col bg-gray-100 items-center gap-4 text-center justify-start ">
        {userData.role === "admin"
          ? adminData.map((item, inx) => (
              <Link
                to={item.link}
                key={inx}
                className="flex justify-center flex-col cursor-pointer gap-2 items-center"
              >
                <div
                  id={route.pathname === item.link ? "active" : ""}
                  className="bg-[#EDEDED] rounded-full h-10 w-10 flex justify-center items-center transition-all hover:bg-[#e0dede]"
                >
                  {item.icon}
                </div>
                <p className="text-[14px]">{item.label}</p>
              </Link>
            ))
          : clientData.map((item, indx) => (
              <Link
                to={item.link}
                key={indx}
              >
                <div
                  id={route.pathname === item.link ? "active" : ""}
                  className="bg-[#EDEDED] rounded-full h-10 w-10 flex justify-center items-center transition-all hover:bg-[#e0dede]"
                >
                  {item.icon}
                </div>
                <p className="text-[14px]">{item.label}</p>
              </Link>
            ))}
      </ul>
    </div>
  );
};
