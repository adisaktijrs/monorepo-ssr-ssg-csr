"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const location = usePathname();
  useEffect(() => {
    console.info(
      `navigated to ${location} - ${new Date().toLocaleTimeString()}`
    );
  }, [location]);

  const clickHandler = (to: string) => {
    console.info(`click ${to} - ${new Date().toLocaleTimeString()}`);
  };

  return (
    <nav className="mb-10">
      <ul className="flex gap-2">
        <li>
          <Link
            onClick={() => clickHandler("/")}
            href="/"
            className={`border-2 border-blue-700 p-2 rounded-md ${location === "/" && "bg-blue-700 text-white"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => clickHandler("/slow")}
            href="/slow"
            className={`border-2 border-blue-700 p-2 rounded-md ${location === "/slow" && "bg-blue-700 text-white"}`}
          >
            Slow
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
