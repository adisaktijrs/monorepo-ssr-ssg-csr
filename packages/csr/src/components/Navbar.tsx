import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    console.info(
      `navigated to ${location.pathname} - ${new Date().toLocaleTimeString()}`
    );
  }, [location.pathname]);

  const clickHandler = (to: string) => {
    console.info(`click ${to} - ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="flex flex-col items-center m-10">
      <nav className="mb-10">
        <ul className="flex gap-2">
          <li>
            <NavLink
              onClick={() => clickHandler("/")}
              to="/"
              className={({ isActive }) =>
                `border-2 border-blue-700 p-2 rounded-md ${isActive && "bg-blue-700 text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => clickHandler("/picture")}
              to="/picture"
              className={({ isActive }) =>
                `border-2 border-blue-700 p-2 rounded-md ${isActive && "bg-blue-700 text-white"}`
              }
            >
              Picture
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
